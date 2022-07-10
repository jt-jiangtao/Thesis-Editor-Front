import React from 'react'
import { RenderElementProps } from 'slate-react'

const Element = (props: RenderElementProps) => {
  return <div {...props.attributes}>{props.children}</div>
}

export default Element
