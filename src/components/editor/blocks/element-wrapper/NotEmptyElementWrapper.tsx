import styles from './not-empty-element-wrapper.module.scss'
import classNames from 'classnames'
import { useFocused, useSelected } from 'slate-react'
import { RiAlignJustify } from 'react-icons/ri'
import { useState } from 'react'

type ElementWrapperProps = {
    children : JSX.Element
}

export default function NotEmptyElementWrapper(props : ElementWrapperProps){
  const selected = useSelected()
  const focused = useFocused()
  const [ hoverContent, setHoverContent ] = useState(false)
  const [ hoverOutTimeout, setHoverOutTimeout ] = useState<NodeJS.Timeout | null>(null)
  const [ hoverEnterTimeout, setHoverEnterTimeout ] = useState<NodeJS.Timeout | null>(null)
  const closeElementTool = () => {
    if (hoverEnterTimeout){
      clearTimeout(hoverEnterTimeout)
    }
    const hoverOutTimeout = setTimeout(() => setHoverContent(false), 200)
    setHoverOutTimeout(hoverOutTimeout)
  }
  const openElementTool = () => {
    if (hoverOutTimeout){
      clearTimeout(hoverOutTimeout)
    }
    const hoverEnterTimeout = setTimeout(() => setHoverContent(true), 200)
    setHoverEnterTimeout(hoverEnterTimeout)
  }
  return (
    <div
      onMouseEnter={openElementTool}
      onMouseLeave={closeElementTool}
      data-slate-wrapper="empty"
      className={styles['not-empty-wrapper']}
    >
      <span
        className={classNames(styles['not-empty-container'], 'hover-gray-more', {
          [styles['not-empty-container__hidden']]: hoverContent ? false : !selected || !focused
        })}>
        <RiAlignJustify />
      </span>
      <div className={styles['not-empty-content']}>
        {props.children}
      </div>
    </div>
  )
}
