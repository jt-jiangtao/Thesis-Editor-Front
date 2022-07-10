import styles from '@/styles/graduation-template/tools/tools.module.scss'
import { FiChevronDown } from 'react-icons/fi'
import { useState } from 'react'
import ToolsSimple from '@/pages/graduation-template/tools/ToolsSimple'
import ToolsDetail from '@/pages/graduation-template/tools/ToolsDetail'
import classNames from 'classnames'

export default function Tools() {
  const [ toolType, setToolType ] = useState<'simple' | 'detail'>('simple')

  const renderTool = () => {
    if (toolType === 'simple') {
      return <ToolsSimple/>
    } else if (toolType === 'detail') {
      return <ToolsDetail/>
    }
  }

  const toggleToolType = () => {
    if (toolType === 'simple') setToolType('detail')
    else setToolType('simple')
  }

  return (
    <div className={classNames(styles['tools'], {
      [styles['tools-detail']]: toolType === 'detail'
    })}>
      <div className={styles['tools-container']}>
        {renderTool()}
        <div className={styles['tools-more']}>
          <div
            onClick={toggleToolType}
            className={classNames(styles['icon-container'], 'hover-gray', {
              [styles['icon-container-rotate']]: toolType === 'detail'
            })}>
            <FiChevronDown/>
          </div>
        </div>
      </div>
    </div>
  )
}
