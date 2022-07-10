import { ReactEditor } from 'slate-react'
import withCustomNormalize from '@/components/editor/plugin/with-custom-normalize'
import { Editor } from 'slate'

const plugins = [
  withCustomNormalize
]

export default function withTemplateEditor(editor: Editor){

  for (let i = 0; i < plugins.length; i++) {
    const plugin = plugins[i]
    editor = plugin(editor)
  }

  return editor
}
