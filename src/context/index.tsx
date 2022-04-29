import { Store } from '../models'
import React, { useContext } from 'react'

export const store = {
  app: new Store()
}

export const GlobalContext = React.createContext<typeof store>(null)

export const useStore = () => useContext(GlobalContext)
