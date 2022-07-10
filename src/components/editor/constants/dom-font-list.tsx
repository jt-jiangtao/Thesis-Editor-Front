import {
  ItalicOutlined,
  StrikethroughOutlined,
  UnderlineOutlined,
  BoldOutlined,
  HighlightOutlined
} from '@ant-design/icons'
import React from 'react'

export interface IFontMark {
  type: string
  title: string
  icon?: React.ReactElement
  modkey?: string
  renderChildren?: (children: any, leaf?: any, type ?: any) => React.ReactElement
}

const fontElementDomMarks: IFontMark[] = [
  {
    type: 'bold',
    title: 'BOLD',
    icon: <BoldOutlined />,
    renderChildren: (children: any) => <strong>{children}</strong>
  },
  {
    type: 'italics',
    title: 'Italics',
    icon: <ItalicOutlined />,
    renderChildren: (children: any) => <em>{children}</em>
  },
  {
    type: 'del',
    title: 'Strike Through',
    icon: <StrikethroughOutlined />,
    renderChildren: (children: any) => <del>{children}</del>
  },
  {
    type: 'underline',
    title: 'UnderLine',
    icon: <UnderlineOutlined />,
    renderChildren: (children: any) => <u>{children}</u>
  },
  {
    type: 'position',
    title: 'Position',
    renderChildren: (children : any, leaf: any, type : any) => {
      if (type === 'top') return <sup>{children}</sup>
      return  <sub>{children}</sub>
    }
  }
]

export default fontElementDomMarks
