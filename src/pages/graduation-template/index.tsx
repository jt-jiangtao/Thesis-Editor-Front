import styles from '@/styles/graduation-template/index.module.scss'
import Headers from './headers'
import Edits from '@/pages/graduation-template/Edits'
import Tools from '@/pages/graduation-template/tools'
import Footer from '@/pages/graduation-template/Footer'
import { useMemo } from 'react'
import { BaseEditor, BaseElement, createEditor } from 'slate'
import { HistoryEditor, withHistory } from 'slate-history'
import {
  ReactEditor,
  Slate,
  withReact
} from 'slate-react'
import { EditorProvider } from '@/stores/context/editor-context/EditorContext'
import { useEditorContext } from '@/stores/context/editor-context/useEditorContext'
import withTemplateEditor from '@/components/editor/plugin'
import LeftFunctionTools from '@/pages/graduation-template/left-function-tools'
import { SharedProvider } from '@/stores/context/shared-context/SharedContext'
import { ElementSetting } from '@/components/editor/interface/element-setting'

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor & HistoryEditor
        Element: BaseElement & {
            type ?: string,
            setting ?: ElementSetting
        }
    }
}

export default function GraduationTemplate() {
  const editor = useMemo(
    () => withTemplateEditor(withReact(withHistory(createEditor()))),
    []
  )
  const { data : editorState, setData : setEditorState } = useEditorContext()

  return (
    <div className={styles['graduation-template']}>
      <EditorProvider>
        <SharedProvider>
          <Slate
            editor={editor}
            value={editorState.value}
            onChange={value=>{
              setEditorState({ ...editorState.value, value })
            }}
          >
            <div className={styles['top']}>
              <Headers/>
              <Tools/>
              <div className={styles['shadow']}/>
            </div>
            <div className={styles['operation-wrapper']}>
              <div className={styles['tools-wrapper']}>
                <LeftFunctionTools />
              </div>
              <div className={styles['edits-scroll']}>
                <div className={styles['edits-wrapper']}>
                  <div className={styles['edits-container']}>
                    <Edits/>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['footer-wrapper']}>
              <Footer />
            </div>
          </Slate>
        </SharedProvider>
      </EditorProvider>
    </div>
  )
}
