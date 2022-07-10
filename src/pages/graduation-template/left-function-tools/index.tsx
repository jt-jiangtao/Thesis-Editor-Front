import styles from '@/styles/graduation-template/left-function-tools/left-function-tools.module.scss'
import classNames from 'classnames'
import { VscFiles } from 'react-icons/vsc'
import Outline from '@/pages/graduation-template/left-function-tools/Outline'
import { useMemo, useState } from 'react'
import { useSharedContext } from '@/stores/context/shared-context/useSharedContext'
import { nanoid } from 'nanoid'

type functionToolsType = 'outline' | ''

const toolsList : {
    type: functionToolsType,
    icon: JSX.Element
}[] = [
  {
    'type': 'outline',
    'icon': <VscFiles />
  }
]

export default function LeftFunctionTools(){
  const [ currentToolType, setCurrentToolType ] = useState<functionToolsType>('')

  const changeTab = (type : functionToolsType)=>{
    if (currentToolType == type) setCurrentToolType('')
    else setCurrentToolType(type)
  }

  const { data: sharedData } = useSharedContext()

  const renderToolList = useMemo(() => {
    const list: JSX.Element[] = []
    toolsList.map(item=>{
      list.push((
        <div key={`tool-list__${nanoid(5)}`} className={classNames(styles['tool-wrapper'], {
          [styles['tool-wrapper-active']]: currentToolType === item.type,
          [styles['tool-wrapper-hover']]: currentToolType !== item.type,
        })}>
          <div
            onClick={()=> changeTab(item.type)}
            className={classNames(styles['tool'])}>
            {item.icon}
            {/*<div className={styles["tool-name-wrapper"]}>*/}
            {/*    <span className={styles["tool-name"]}>大纲</span>*/}
            {/*</div>*/}
          </div>
        </div>
      ))
    })
    return list
  }, [ currentToolType ])

  return (
    <>
      <div className={classNames(styles['tools-list'], {
        [styles['tools-list__hidden']]: !sharedData.toolShow
      })}>
        {renderToolList}
      </div>
      <div className={classNames(styles['tools-container'], {
        [styles['tools-container-hidden']]: currentToolType === ''
      })}>
        <Outline show={currentToolType === 'outline'} close={()=> changeTab('')}/>
      </div>
    </>
  )
}
