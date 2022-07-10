import React from 'react'
import { RenderElementProps } from 'slate-react'
import { Page } from '@/components/editor/blocks'

export interface ToolbarBlockProps {
    type: string
    title: string
    icon: React.ReactElement
    modkey?: string
    renderBlock: (props: RenderElementProps) => React.ReactElement
    isHiddenInToolbar?: boolean
}

const blocks: ToolbarBlockProps[] = [
  {
    type: 'page',
    title: 'Page',
    icon:<>p</> ,
    isHiddenInToolbar: true,
    renderBlock: (props : RenderElementProps) =>(
      <Page {...props}></Page>
    )
  }
]

export default blocks
