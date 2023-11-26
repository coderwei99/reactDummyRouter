import { Suspense, lazy } from 'react'
import { IRouteObject } from '../index.tsx'

// 自定义懒加载函数
export const lazyLoad = (factory: () => Promise<any>) => {
  const Module = lazy(factory)
  return (
    <Suspense fallback={<div>loading</div>}>
      <Module />
    </Suspense>
  )
}
export const LoginRouter: IRouteObject[] = [
  {
    path: '/login',
    index: true,
    element: lazyLoad(() => import('../../views/login/index.tsx')),
    meta: {},
  },
]
