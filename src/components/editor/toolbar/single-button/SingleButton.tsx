import styles from './index.module.scss'
import classNames from 'classnames'

type SingleButtonProps = {
    icon : JSX.Element | string,
    active ?: boolean,
    hidden ?: boolean,
    disable ?: boolean,
    onclick ?: Function,
    format : string,
    className ?: string,
    hover ?: boolean
}

export default function SingleButton(props : SingleButtonProps){
  const { active = false, hidden = false, disable = false, hover = true } = props

  const click = (event : any) => {
    !disable && props.onclick && props.onclick(event)
  }

  const renderIcon = () => {
    if (typeof props.icon === 'string'){
      return (
        <span className={styles['icon']}>
          <img src={props.icon} />
        </span>
      )
    }
    return props.icon
  }

  return (
    <div onClick={click} className={classNames(styles['button'], {
      [styles['button-active']]: active,
      [styles['button-hidden']]: hidden,
      [styles['button-disable']]: disable,
      [styles['button-not-disable']]: !disable && hover,
      [props.className || ''] : props.className
    })}>
      <div className={styles['button-icon']}>
        {renderIcon()}
      </div>
    </div>
  )
}
