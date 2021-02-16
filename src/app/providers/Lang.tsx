import * as React from 'react'

export const defaultLacal = "en"
export const locals = ["en", "fr"]
export const LangContext = React.createContext<any[]>([])

export const LangProvider: React.FC = ({children}) => {
  const [local, setLocal] = React.useState("en")
  return (
    <LangContext.Provider value={[local, setLocal]}>
      {children}
    </LangContext.Provider>
  )
}