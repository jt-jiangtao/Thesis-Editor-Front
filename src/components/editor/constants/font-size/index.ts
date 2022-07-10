import { CSSProperties } from 'react'
import { sizeMapping } from '@/components/editor/constants/font-size/size-mapping'

export default function getFontSizeStyle(key : string): CSSProperties {
  const style : CSSProperties = {}
  const font = sizeMapping[key]
  style['fontSize'] = font.size + font.unit
  return style
}
