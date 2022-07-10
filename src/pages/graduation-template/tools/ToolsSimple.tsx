import styles from '@/styles/graduation-template/tools/tools-simple.module.scss'
import classNames from 'classnames'
import { DropdownButton, SingleButton } from '@/components/editor/toolbar'
import { GrRedo, GrUndo } from 'react-icons/gr'
import {
  TbBold,
  TbEraser,
  TbFileImport,
  TbFileSearch,
  TbItalic,
  TbLayoutGridAdd,
  TbLink, TbMessageCircle,
  TbUnderline
} from 'react-icons/tb'
import { Menu } from 'antd'
import deleteLineIcon from '@/assets/icon/delete_line.svg'
import { RiAlignCenter, RiAlignJustify, RiAlignLeft, RiAlignRight } from 'react-icons/ri'
import { GoListOrdered, GoListUnordered } from 'react-icons/go'
import { AiOutlinePicture, AiOutlineTable } from 'react-icons/ai'
import { useSlate } from 'slate-react'
import { HistoryEditor } from 'slate-history'

export default function ToolsSimple(){
  const editor = useSlate()
  return (
    <div className={styles['tools-simple']}>
      <div className={classNames(styles['tools-group'], styles['tool-group__split'])}>
        <SingleButton
          disable={editor.history.undos.length === 0}
          onclick={()=> {
            HistoryEditor.undo(editor)
          }} format="return-back" icon={<GrUndo />} />
        <SingleButton
          disable={editor.history.redos.length === 0}
          onclick={()=> {
            HistoryEditor.redo(editor)
          }}
          format="return-forward" icon={<GrRedo />} />
        <SingleButton format="erase" icon={<TbEraser />} />
      </div>
      <div className={classNames(styles['tools-group'], styles['tool-group__split'])}>
        <DropdownButton
          split={false}
          menu={
            <Menu
              items={[
                {
                  key: '1',
                  label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                                            1st menu item
                    </a>
                  ),
                },
                {
                  key: '2',
                  label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                                            2nd menu item
                    </a>
                  ),
                },
                {
                  key: '3',
                  label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                                            3rd menu item
                    </a>
                  ),
                },
              ]}
            />
          }>
          <SingleButton hover={false} format="erase" icon={<TbLayoutGridAdd />} />
        </DropdownButton>
      </div>
      <div className={classNames(styles['tools-group'], styles['tool-group__split'])}>
        <DropdownButton
          iconStyles={{
            width: '16px'
          }}
          styles={{
            width: '66px'
          }}
          split={false}
          menu={
            <Menu
              items={[
                {
                  key: '1',
                  label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                                            1st menu item
                    </a>
                  ),
                },
                {
                  key: '2',
                  label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                                            2nd menu item
                    </a>
                  ),
                },
                {
                  key: '3',
                  label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                                            3rd menu item
                    </a>
                  ),
                },
              ]}
            />
          }>
          <div className={styles['font-construct']}>
            <span>正文</span>
          </div>
        </DropdownButton>
        <DropdownButton
          iconStyles={{
            width: '16px'
          }}
          styles={{
            width: '66px'
          }}
          split={false}
          menu={
            <Menu
              items={[
                {
                  key: '1',
                  label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                                            1st menu item
                    </a>
                  ),
                },
                {
                  key: '2',
                  label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                                            2nd menu item
                    </a>
                  ),
                },
                {
                  key: '3',
                  label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                                            3rd menu item
                    </a>
                  ),
                },
              ]}
            />
          }>
          <div className={styles['font-construct']}>
            <span>默认</span>
          </div>
        </DropdownButton>
        <DropdownButton
          iconStyles={{
            width: '16px'
          }}
          styles={{
            width: '56px'
          }}
          split={false}
          menu={
            <Menu
              items={[
                {
                  key: '1',
                  label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                                            1st menu item
                    </a>
                  ),
                },
                {
                  key: '2',
                  label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                                            2nd menu item
                    </a>
                  ),
                },
                {
                  key: '3',
                  label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                                            3rd menu item
                    </a>
                  ),
                },
              ]}
            />
          }>
          <div className={styles['font-construct']}>
            <span>11</span>
          </div>
        </DropdownButton>
      </div>
      <div className={classNames(styles['tools-group'], styles['tool-group__split'])}>
        <SingleButton format="bold" icon={<TbBold />} />
        <SingleButton format="italic" icon={<TbItalic />} />
        <SingleButton format="underline" icon={<TbUnderline />} />
        <SingleButton format="delete-line" icon={deleteLineIcon} />
        {/*    文字颜色 文字背景颜色    */}
      </div>
      <div className={classNames(styles['tools-group'], styles['tool-group__split'])}>
        <SingleButton format="align-left" icon={<RiAlignLeft />} />
        <SingleButton format="align-center" icon={<RiAlignCenter />} />
        <SingleButton format="align-right" icon={<RiAlignRight />} />
        <SingleButton format="align-justify" icon={<RiAlignJustify />} />
        {/*  行高 左右缩进  */}
      </div>
      <div className={classNames(styles['tools-group'], styles['tool-group__split'])}>
        <SingleButton format="align-left" icon={<GoListOrdered />} />
        <SingleButton format="align-center" icon={<GoListUnordered />} />
      </div>
      <div className={classNames(styles['tools-group'], styles['tool-group__split'])}>
        <SingleButton format="align-left" icon={<AiOutlinePicture />} />
        <SingleButton format="align-center" icon={<AiOutlineTable />} />
        <SingleButton format="align-center" icon={<TbLink />} />
        <SingleButton format="align-center" icon={<TbFileImport />} />
      </div>
      <div className={classNames(styles['tools-group'], styles['tool-group__split'])}>
        <SingleButton format="align-left" icon={<TbFileSearch />} />
      </div>
      <div className={styles['tools-group']}>
        <SingleButton format="align-left" icon={<TbMessageCircle />} />
      </div>
    </div >
  )
}
