import { RenderElementProps } from 'slate-react'
import EmptyElementWrapper from '@/components/editor/blocks/element-wrapper/EmptyElementWrapper'
import NotEmptyElementWrapper from '@/components/editor/blocks/element-wrapper/NotEmptyElementWrapper'

type ElementWrapperProps = {
    children : JSX.Element,
    elementProps: RenderElementProps
}


export default function ElementWrapper(props : ElementWrapperProps){

  const { element } = props.elementProps

  const renderWrapper = () => {
    if (emptyElement()){
      return <EmptyElementWrapper>{props.children}</EmptyElementWrapper>
    }
    return <NotEmptyElementWrapper>{props.children}</NotEmptyElementWrapper>
        
  }

  const emptyElement = () => {
    if (element.children.length > 1)return false
    if ((element.children[0] as any).type !== 'text')return false
    return (element.children[0] as any).text === ''
  }

  return (
    <div data-slate-wrapper={true}>
      {renderWrapper()}
    </div>
  )
}
