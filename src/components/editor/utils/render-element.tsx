import { RenderElementProps } from 'slate-react'
import blocks, { ToolbarBlockProps } from '@/components/editor/constants/block-list'
import { Element } from '@/components/editor/blocks'
import ElementWrapper from '@/components/editor/blocks/element-wrapper'

const renderElement = ({ element, ...props }: RenderElementProps) => {
  const block = blocks.find(
    (block: ToolbarBlockProps) => block.type == element.type
  )
  if (block) {
    if (element.type === 'page'){
      return block.renderBlock({ element, ...props })
    }
    return <ElementWrapper elementProps={{ element, ...props }}>
      {block.renderBlock({ element, ...props })}
    </ElementWrapper>
  } 
  return <ElementWrapper elementProps={{ element, ...props }}>
    <Element element={element} {...props} />
  </ElementWrapper>
    
}

export default renderElement
