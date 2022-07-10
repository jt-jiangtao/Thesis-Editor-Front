import React, { CSSProperties, useCallback, useMemo } from 'react'

import { RenderLeafProps } from 'slate-react'

import fontElementDomMarks, { IFontMark } from '../constants/dom-font-list'
import fontStyleMarks, { IFontStyleMark } from '@/components/editor/constants/style-list'

const renderLeaf = ({ attributes, leaf, ...props }: RenderLeafProps) => {
  let { children } = props

  const styles: CSSProperties = {}

  // 获取leaf中setting -> font
  const fontElementDomKeys = Object.keys((leaf as any)?.setting?.font || {})

  // 使用标签来实现效果
  fontElementDomMarks.forEach((fontMark: IFontMark) => {
    switch (fontMark.type) {
    // 上标和下标
    case 'position':
      if (fontElementDomKeys.includes(fontMark.type) && (leaf as any)?.setting?.font[fontMark.type] !== 'normal') {
        if (fontMark.renderChildren) {
          children = fontMark.renderChildren(children, leaf, (leaf as any)?.setting?.font[fontMark.type])
        }
      }
      break
      // 粗体、斜体、下划线、删除线
    default:
      if (fontElementDomKeys.includes(fontMark.type) && (leaf as any)?.setting?.font[fontMark.type]) {
        if (fontMark.renderChildren) {
          // 在外层包裹元素
          children = fontMark.renderChildren(children, leaf)
        }
      }
      break
    }
  })

  fontStyleMarks.forEach((fontStyleMark: IFontStyleMark) => {
    const fontSizeType = (leaf as any)?.setting?.font[fontStyleMark.type]
    if (fontElementDomKeys.includes(fontStyleMark.type) && fontSizeType != ''){
      if (fontStyleMark.getStyle){
        Object.assign(styles, fontStyleMark.getStyle(fontSizeType))
      }
    }
  })


  return (
    <span {...attributes} style={styles}>
      {children}
    </span>
  )
}

export default renderLeaf
