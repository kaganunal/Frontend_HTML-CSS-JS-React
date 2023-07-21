import React from 'react'
import '../assets/style/navbar.scss'

const Navbar = ({kategori,setSecilenKategori}) => {
  return (
   <nav>
    <h3>Ank-Boost-12 Kütüphane</h3>
    <ul>
      {kategori.map(kategori=><li key={kategori.kategoriId}><span onClick={()=>{setSecilenKategori(kategori.kategoriId)}}>{kategori.kategoriAdi}</span></li>)}
    </ul>
   </nav>
  )
}

export default Navbar