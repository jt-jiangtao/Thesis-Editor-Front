import React, { CSSProperties } from 'react'
import getFontSizeStyle from '@/components/editor/constants/font-size'

export interface IFontStyleMark {
    type: string
    title: string
    icon ?: React.ReactElement
    modkey ?: string
    getStyle ?: (key: any, leaf?: any) => CSSProperties
}

const fontStyleMarks : IFontStyleMark[] = [
  {
    type: 'size',
    title: 'font-size',
    getStyle: getFontSizeStyle
  }
]

export default fontStyleMarks
