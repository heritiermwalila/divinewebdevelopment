import * as React from 'react'
import { LANG } from '../lang'
import { LangContext, defaultLacal } from '../providers'


export default () => {
  const [local] = React.useContext(LangContext)
  const t = (key: string, page: string) => {
    //
    
    if(!LANG[local][page][key]){
      console.warn(`No string "${key}" for local "${local}"`)
    }
    return LANG[local][page][key] || LANG[local][page][defaultLacal] || ""
  }

  return {t, local}
}