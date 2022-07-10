import { useContext } from 'react'
import { EditorContext } from '@/stores/context/editor-context/EditorContext'

export const useEditorContext = () => {
  const editor = useContext(EditorContext)

  if (!editor) {
    throw new Error(
      'The `useEditor` hook must be used inside the <EditorProvider> component\'s context.'
    )
  }

  return editor
}
