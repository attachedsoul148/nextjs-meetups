import React from 'react'
import Navigation from './Navigation'

const Layout: React.FC<{ children: React.ReactElement | React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navigation />
      <div className="container">{children}</div>
    </div>
  )
}

export default Layout
