import React from 'react'
import Nav from '../components/Nav'

const Header = ({bgColor}) => {
  return (
    <header style={{backgroundColor: bgColor}}>
        <Nav />
    </header>
  )
}

export default Header