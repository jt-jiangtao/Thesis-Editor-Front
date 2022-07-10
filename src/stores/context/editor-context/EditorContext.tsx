import React, { useState } from 'react'
import { Node, Range } from 'slate'
import defaultSelection from '@/components/editor/utils/default-selection'

type EditorProviderProps = {
    children?: JSX.Element
}

type dataType = {
    value: Node[]
    lastBlurSelection: Range | null
}

export interface TextEditorContextState {
    data: dataType,
    setData : Function
}

const defaultData : dataType= {
  value: [
    {
      type: 'page',
      children: [
        {
          type: 'element',
          children: [
            {
              type: 'text',
              text: '粗体',
              setting: {
                font: {
                  bold: true,
                  italics: true,
                  underline: true,
                  del: false,
                  color: 'red'
                }
              }
            },
            {
              type: 'text',
              text: ' ',
            },
            {
              type: 'text',
              text: '斜体',
              setting: {
                font: {
                  italics: true,
                  color: 'blue'
                }
              }
            }
          ]
        },
        {
          type: 'element',
          children: [
            {
              type: 'text',
              text: '斜体',
              setting: {
                font: {
                  italics: true
                }
              }
            }
          ]
        },
        {
          type: 'element',
          children: [
            {
              type: 'text',
              text: '下划线',
              setting: {
                font: {
                  underline: true
                }
              }
            }
          ]
        },
        {
          type: 'element',
          children: [
            {
              type: 'text',
              text: '删除线',
              setting: {
                font: {
                  del: true
                }
              }
            }
          ]
        },
        {
          type: 'element',
          children: [
            {
              type: 'text',
              text: '2'
            },
            {
              type: 'text',
              text: '2',
              setting: {
                font: {
                  position: 'top'
                }
              }
            }
          ]
        },
        {
          type: 'element',
          children: [
            {
              type: 'text',
              text: '2'
            },
            {
              type: 'text',
              text: '2',
              setting: {
                font: {
                  position: 'bottom'
                }
              }
            }
          ]
        },
        {
          type: 'element',
          children: [
            {
              type: 'text',
              text: '初号',
              setting: {
                font: {
                  size: '0'
                }
              }
            }
          ]
        },
        {
          type: 'element',
          children: [
            {
              type: 'text',
              text: '小初',
              setting: {
                font: {
                  size: 'small-0'
                }
              }
            }
          ]
        },
        {
          type: 'element',
          children: [
            {
              type: 'text',
              text: '一号',
              setting: {
                font: {
                  size: '1'
                }
              }
            }
          ]
        },
        {
          type: 'element',
          children: [
            {
              type: 'text',
              text: '小一',
              setting: {
                font: {
                  size: 'small-1'
                }
              }
            }
          ]
        },
        {
          type: 'element',
          children: [
            {
              type: 'text',
              text: '二号',
              setting: {
                font: {
                  size: '2'
                }
              }
            }
          ]
        },
        {
          type: 'element',
          children: [
            {
              type: 'text',
              text: '小二',
              setting: {
                font: {
                  size: 'small-2'
                }
              }
            }
          ]
        },
        {
          type: 'element',
          children: [
            {
              type: 'text',
              text: '三号',
              setting: {
                font: {
                  size: '3'
                }
              }
            }
          ]
        },
        {
          type: 'element',
          children: [
            {
              type: 'text',
              text: '小三',
              setting: {
                font: {
                  size: 'small-3'
                }
              }
            }
          ]
        },
        {
          type: 'element',
          children: [
            {
              type: 'text',
              text: '四号',
              setting: {
                font: {
                  size: '4'
                }
              }
            }
          ]
        },
        {
          type: 'element',
          children: [
            {
              type: 'text',
              text: '小四',
              setting: {
                font: {
                  size: 'small-4'
                }
              }
            }
          ]
        },
        {
          type: 'element',
          children: [
            {
              type: 'text',
              text: '五号',
              setting: {
                font: {
                  size: '5'
                }
              }
            }
          ]
        },
        {
          type: 'element',
          children: [
            {
              type: 'text',
              text: '小五',
              setting: {
                font: {
                  size: 'small-5'
                }
              }
            }
          ]
        },
        {
          type: 'element',
          children: [
            {
              type: 'text',
              text: '六号',
              setting: {
                font: {
                  size: '6'
                }
              }
            }
          ]
        },
        {
          type: 'element',
          children: [
            {
              type: 'text',
              text: '小六',
              setting: {
                font: {
                  size: 'small-6'
                }
              }
            }
          ]
        },
        {
          type: 'element',
          children: [
            {
              type: 'text',
              text: '七号',
              setting: {
                font: {
                  size: '7'
                }
              }
            }
          ]
        },
        {
          type: 'element',
          children: [
            {
              type: 'text',
              text: '八号',
              setting: {
                font: {
                  size: '8'
                }
              }
            }
          ]
        },
      ]
    }
  ],
  lastBlurSelection: defaultSelection
}

export const defaultTextEditorContextState : TextEditorContextState = {
  data: defaultData,
  setData : ()=>{}
}

export const EditorContext = React.createContext<TextEditorContextState>(defaultTextEditorContextState)

export function EditorProvider(props : EditorProviderProps){
  const [ data, setData ] = useState(defaultData)
  return (
    <EditorContext.Provider value={{
      data,
      setData
    }}>
      {props.children}
    </EditorContext.Provider>
  )
}
