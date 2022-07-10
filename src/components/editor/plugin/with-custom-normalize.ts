import { Transforms, Element, Text, Editor } from 'slate'
import { ReactEditor } from 'slate-react'


const emptyPage = { type: 'page', children: [ { type: 'element', children: [ { type: 'text', text: '' } ] } ] }

function withCustomNormalize(editor: Editor) {
  const { normalizeNode } = editor
  editor.normalizeNode = entry => {

    const [ node, path ] = entry

    if (Text.isText(node)) return normalizeNode(entry)

    if (Element.isElement(node) && node.type === 'page') {
      let PageNode
      try {
        PageNode = ReactEditor.toDOMNode(editor, node)
      } catch (e) {
        return
      }

      const computedHeight = PageNode.offsetHeight

      const pageHeight = computedHeight - 192

      let currentPageHeight = 0

      const children = Array.from(PageNode.children[1].children)

      children.forEach(child => {

        const childStyles = window.getComputedStyle(child)
        const computedChildHeight = child.clientHeight
        const childMargin = parseFloat(childStyles.marginTop) + parseFloat(childStyles.marginBottom)
        const childPadding = parseFloat(childStyles.paddingBottom) + parseFloat(childStyles.paddingTop)
        const childBorder = parseFloat(childStyles.borderLeftWidth) + parseFloat(childStyles.borderRightWidth) + parseFloat(childStyles.borderTopWidth) + parseFloat(childStyles.borderBottomWidth)

        const childHeight = computedChildHeight + childMargin + childPadding + childBorder

        currentPageHeight = currentPageHeight + childHeight

        if (currentPageHeight > pageHeight) {
          Transforms.liftNodes(editor)
          Transforms.splitNodes(editor)
          Transforms.wrapNodes(editor, emptyPage)
        }
      })

    }


    return normalizeNode(entry)
  }
  return editor
}

export default withCustomNormalize
