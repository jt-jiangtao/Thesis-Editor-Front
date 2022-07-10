import { SharedContext } from '@/stores/context/shared-context/SharedContext'
import { useContext } from 'react'

export const useSharedContext = () => {
  const editor = useContext(SharedContext)

  if (!editor) {
    throw new Error(
      'The `useEditor` hook must be used inside the <SharedProvider> component\'s context.'
    )
  }

  return editor
}
