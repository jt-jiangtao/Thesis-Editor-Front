import styles from './empty-element-wrapper.module.scss'
import { IoMdAdd } from 'react-icons/io'
import classNames from 'classnames'
import { useFocused, useSelected } from 'slate-react'
import { useState } from 'react'

type EmptyElementWrapperProps = {
    children: JSX.Element
}

export default function EmptyElementWrapper(props: EmptyElementWrapperProps) {
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
      className={styles['empty-wrapper']}
    >
      <span
        className={classNames(styles['add-container'], 'hover-gray-more', {
          [styles['add-container__hidden']]: hoverContent ? false : !selected || !focused
        })}>
        <IoMdAdd/>
      </span>
      <div
        className={styles['empty-content']}>
        {props.children}
      </div>
    </div>
  )
}
