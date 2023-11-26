import { coutContext } from '@/context'
import { useContext, useEffect, useState } from 'react'
import { RouteObject } from 'react-router-dom'
import { Routes } from '../router/index'

function filterTreeObjectsByProperty(node, property, value) {
  // 如果节点为空，返回空数组
  if (!node) {
    return []
  }

  // 用于存储筛选后的节点
  let filteredNodes = []

  // 遍历节点的子节点
  for (let i = 0; i < node.length; i++) {
    const item = node[i]
    // 如果节点是对象并且具有指定的属性，并且属性值等于预期值
    if (typeof item === 'object' && item['meta']?.[property] === value) {
      // 将符合条件的对象添加到筛选后的数组中
      filteredNodes.push({ ...item, children: filterTreeObjectsByProperty(item.children, property, value) })
    } else if (Array.isArray(item.children)) {
      // 如果子节点是数组，则递归调用该函数以处理嵌套节点
      const filteredChildren = filterTreeObjectsByProperty(item.children, property, value)

      // 如果有符合条件的子节点，将其添加到筛选后的数组中
      if (filteredChildren.length > 0) {
        filteredNodes.push({ ...item, children: filteredChildren })
      }
    }
  }

  return filteredNodes
}

export const routeFilter = (routes: any[], count): any[] => {
  return filterTreeObjectsByProperty(routes, 'preCode', count === 'role' ? 1 : 2)
}

const useLoadRoutes = () => {
  const { count } = useContext(coutContext)
  const [routes, setRoutes] = useState(Routes as RouteObject[])
  useEffect(() => {
    console.log('count is changed')
    const newRoutes = routeFilter(Routes, count)
    console.log(newRoutes, 'newRoutes')
    setRoutes(newRoutes as RouteObject[])
  }, [count])

  return routes
}

export default useLoadRoutes
