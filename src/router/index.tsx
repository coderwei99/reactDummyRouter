import useLoadRoutes from '@/hooks/useLoadRouter.ts'
import { lazy, Suspense } from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'

// 自定义懒加载函数
const lazyLoad = (factory: () => Promise<any>) => {
  const Module = lazy(factory)
  return (
    <Suspense fallback={<div>loading</div>}>
      <Module />
    </Suspense>
  )
}

export type IRouteObject = {
  children?: IRouteObject[]
  element?: React.ReactNode
  index?: boolean
  path?: string
  meta?: {
    preCode: 1 | 2
  }
} & RouteObject

export const Routes: IRouteObject[] = [
  {
    path: '/login',
    index: true,
    element: lazyLoad(() => import('../views/login/index.tsx')),
  },
  {
    path: '/main',
    element: lazyLoad(() => import('../views/home/index.tsx')),
    meta: {
      preCode: 1,
    },
    children: [
      {
        index: true,
        element: lazyLoad(() => import('../views/category/index.tsx')),
        meta: {
          preCode: 1,
        },
      },
      {
        path: '/main/category',
        element: lazyLoad(() => import('../views/category/index.tsx')),
        meta: {
          preCode: 1,
        },
      },
      {
        path: '/main/about',
        element: lazyLoad(() => import('../views/about/index.tsx')),
        meta: {
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
