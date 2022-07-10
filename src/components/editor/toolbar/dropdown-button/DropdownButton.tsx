import styles from './index.module.scss'
import classNames from 'classnames'
import { Dropdown } from 'antd'
import { BsChevronDown } from 'react-icons/bs'
import { CSSProperties, useState } from 'react'

type DropdownButtonProps = {
    active ?: boolean,
    hidden ?: boolean,
    disable ?: boolean,
    className ?: string,
    menu : JSX.Element,
    children: JSX.Element,
    trigger ?: ('click' | 'hover' | 'contextMenu')[],
    split ?: boolean,
    styles ?: CSSProperties,
    iconStyles ?: CSSProperties
}

export default function DropdownButton(props : DropdownButtonProps){

  const { trigger = [ 'click' ], split = true } = props

  const [ open, setOpen ] = useState(false)

  const onVisibleChange = (visible: boolean) => {
    setOpen(visible)
  }

  return (
    <Dropdown onVisibleChange={onVisibleChange} className={styles['dropdown']} overlay={props.menu} trigger={trigger}>
      <div style={props.styles} className={classNames(styles['dropdown-button'], {
        [props.className || ''] : props.className
      })}>
        <div className={classNames(styles['down-content'], {
          [styles['down-content-split']] : split
        })}>
          {props.children}
        </div>
        <div style={props.iconStyles} className={classNames(styles['down-icon'],  {
          [styles['down-icon-rotate']]: open,
          [styles['down-icon-split']]: split
        })}>
          <BsChevronDown />
        </div>
      </div>
    </Dropdown>
  )
}
