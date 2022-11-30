import React from 'react'
import { useContext, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [hoverActive, setHoverActive] = useState(false)
  const [hoverIndex, setHoverIndex] = useState(5)

  return (
    <AppContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
        hoverActive,
        setHoverActive,
        hoverIndex,
        setHoverIndex,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
