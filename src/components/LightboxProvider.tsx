import React, { useState, useMemo } from 'react'

enum LIGHTBOX_TYPE {
  IMAGE,
  VIDEO,
}

const initialState = {
  src: null,
  type: LIGHTBOX_TYPE.IMAGE,
}

export const LightboxContext = React.createContext(initialState)

type Props = {
  children: React.ReactNode
}

export const LightboxProvider = ({ children }: Props) => {
  const [state, setState] = useState(initialState)

  const value = useMemo(
    () => ({
      ...state,
      setState,
    }),
    [state],
  )

  return (
    <LightboxContext.Provider value={value}>
      {children}
    </LightboxContext.Provider>
  )
}
