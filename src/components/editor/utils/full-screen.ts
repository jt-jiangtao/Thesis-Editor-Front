// 判断是否全屏
export function isFullscreen() {
  const doc: any = document
  if (doc.fullscreen) {
    return true
  } 
  return false
    
}
// 点击按钮全屏事件
export function fullScreen() {
  if (isFullscreen()) {
    const doc: any = document
    // 是全屏就退出全屏
    if (doc.exitFullscreen) {
      doc.exitFullscreen()
    } else if (doc.mozCancelFullScreen) {
      (doc as any).mozCancelFullScreen()
    } else if (doc.webkitCancelFullScreen) {
      doc.webkitCancelFullScreen()
    }
  } else {
    const doc: any = document.documentElement
    // 否则将页面全屏
    if (doc.requestFullscreen) {
      doc.requestFullscreen()
    }
    //FireFox
    else if (doc.mozRequestFullScreen) {
      doc.mozRequestFullScreen()
    }
    //Chrome等
    else if (doc.webkitRequestFullScreen) {
      doc.webkitRequestFullScreen()
    }
    //IE11
    else if (doc.msRequestFullscreen) {
      doc.msRequestFullscreen()
    }
  }
}
