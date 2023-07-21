import React from 'react'

const Nav = () => {

const data = [{
  username: "cem",
  title: "skjdf"
}]

  return (
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Nav