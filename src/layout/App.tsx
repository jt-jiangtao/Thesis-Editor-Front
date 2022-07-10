import { useRoutes } from 'react-router-dom'
import React, { useEffect } from 'react'
import routes from '@/router'

export default function App(){
  useEffect(()=>{
    resizeWidth()
    window.onresize = resizeWidth
  }, [])

  const resizeWidth = ()=>{
    //得到手机屏幕的宽度
    const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
    //得到html的Dom元素
    const htmlDom = document.getElementsByTagName('html')[0]
    if(htmlWidth > 750){
      htmlDom.style.fontSize = '16px'
    }else{
      //设置根元素字体大小
      htmlDom.style.fontSize = htmlWidth / 37.5 + 'px'
    }
  }

  const element = useRoutes(routes)
  return (
    <>
      {element}
    </>
  )
}
