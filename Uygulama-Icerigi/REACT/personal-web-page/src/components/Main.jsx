import React from 'react'

const Main = ({title, mesaj, src, imgAlt}) => {
  return (
    <main>
        <h1>{title}</h1>
        <p>{mesaj}</p>
        <img src={src} alt={imgAlt}  />
    </main>
  )
}

export default Main