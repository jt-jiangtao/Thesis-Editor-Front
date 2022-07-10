import styles from '@/styles/graduation-template/edits.module.scss'
import { Editable, useEditor } from 'slate-react'
import renderElement from '@/components/editor/utils/render-element'
import renderLeaf from '@/components/editor/utils/render-leaf'
import { useEditorContext } from '@/stores/context/editor-context/useEditorContext'

export default function Edits(){
  const { data, setData } = useEditorContext()
  const editor = useEditor()
  return (
    <div className={styles['edit-container']}>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onBlur={() => {
          setData({ ...data, lastBlurSelection: editor.selection })
        }}
      />
    </div>
  )
}
