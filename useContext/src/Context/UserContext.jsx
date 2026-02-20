import React, { createContext, useState } from 'react'

export const userContext = createContext()

const UserContext = (prop) => {
  return (
    <userContext.Provider value={ravinder}>
      {prop.children}
    </userContext.Provider>
  )
}

export default UserContext
