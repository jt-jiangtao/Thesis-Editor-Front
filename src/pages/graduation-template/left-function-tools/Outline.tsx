import React from 'react'
import styles from '@/styles/graduation-template/left-function-tools/outline.module.scss'
import { CloseOutlined } from '@ant-design/icons'
import classNames from 'classnames'

type OutlineProps = {
    close: Function,
    show: boolean
}

export default function Outline(props : OutlineProps){
  return (
    <div className={classNames(styles['outline-container'], {
      [styles['outline-hidden']]: !props.show
    })}>
      <div className={styles['outline-header']}>
        <div className={styles['title']}>
                    大纲
        </div>
        <div
          onClick={() => props.close()}
          className={classNames(styles['close'], 'hover-gray')}>
          <CloseOutlined />
        </div>
      </div>
      <div className={styles['outline-content']}>

      </div>
    </div>
  )
}
