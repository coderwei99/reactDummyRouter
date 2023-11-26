import useLoadRoutes from '@/hooks/useLoadRouter.ts'
import { lazy, Suspense } from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'
import { LoginRouter } from './modeule/login.tsx'
// 自定义懒加载函数
export const lazyLoad = (factory: () => Promise<any>) => {
  const Module = lazy(factory)
  return (
    <Suspense fallback={<div>loading</div>}>
      <Module />
    </Suspense>
  )
}

export type IRouteObject = {
  children?: any[]
  element?: React.ReactNode
  index?: boolean
  path?: string
  meta?: {
    title: string
    preCode?: 1 | 2
  }
} & RouteObject

export const Routes: IRouteObject[] = [
  ...LoginRouter,
  {
    path: '/main',
    element: lazyLoad(() => import('../views/home/index.tsx')),
    meta: {
      title: 'home',
      preCode: 1,
    },
    children: [
      {
        index: true,
        path: '/main/category',
        element: lazyLoad(() => import('../views/category/index.tsx')),
        meta: {
          title: '分类1',
          preCode: 1,
        },
      },
      {
        path: '/main/category1',
        element: lazyLoad(() => import('../views/category/index.tsx')),
        meta: {
          title: '分类2',
          preCode: 1,
        },
      },
      {
        path: '/main/about',
        element: lazyLoad(() => import('../views/about/index.tsx')),
        meta: {
          title: '关于',
          preCode: 2,
        },
      },
    ],
  },
]

const Router: React.FC = () => {
  const routes = useLoadRoutes()
  return useRoutes(routes as RouteObject[])
}

export default Router
