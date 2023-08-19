import React, { Children } from 'react'
import Header from './header'

const TopNav = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    </>
    
  )
}

export default TopNav