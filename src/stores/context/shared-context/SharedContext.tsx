import React, { useState } from 'react'

type SharedProvider = {
    children?: JSX.Element
}

type DataType = {
    toolShow: boolean
}

const defaultData = {
  toolShow: false
}

export interface SharedContextState {
    data: DataType,
    setData : Function
}

const defaultSharedContextState = {
  data: defaultData,
  setData : ()=>{}
}

export const SharedContext = React.createContext<SharedContextState>(defaultSharedContextState)

export function SharedProvider(props : SharedProvider){
  const [ data, setData ] = useState(defaultData)

  return (
    <SharedContext.Provider value={{
      data,
      setData
    }}>
      {props.children}
    </SharedContext.Provider>
  )
}
