import styles from '@/styles/graduation-template/footer.module.scss'
import { useSharedContext } from '@/stores/context/shared-context/useSharedContext'
import { BsViewList } from 'react-icons/bs'
import { MdOutlineFullscreen, MdOutlineFullscreenExit } from 'react-icons/md'
import { fullScreen, isFullscreen } from '@/components/editor/utils/full-screen'
import { useEffect, useState } from 'react'

export default function Footer() {
  const { data: sharedData, setData: setSharedData } = useSharedContext()
  const toggleLeftToolShow = () => {
    setSharedData(Object.assign(JSON.parse(JSON.stringify(sharedData)), {
      'toolShow': !sharedData.toolShow
    }))
  }

  const [ fullscreen, setFullscreen ] = useState(isFullscreen())

  const renderFullscreenIcon = () => {
    if (fullscreen) {
      return <MdOutlineFullscreenExit/>
    }
    return <MdOutlineFullscreen/>
  }

  return (
    <div className={styles['footer']}>
      <div className={styles['left']}>
        <div
          onClick={toggleLeftToolShow}
          className={styles['left-tool']}>
          <BsViewList className={styles['icon']}/>
          <span>工具栏</span>
        </div>
      </div>
      <div className={styles['right']}>
        <div
          onClick={() => {
            fullScreen()
            setFullscreen(!fullscreen)
          }}
          className={styles['full-screen']}>
          {renderFullscreenIcon()}
        </div>
      </div>
    </div>
  )
};
