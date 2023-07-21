import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Card from './components/Card'
import './assets/style/app.scss'
import axios from 'axios'


function App() {
  const [kitap, setKitap] = useState([])
  const [kategori, setKategori] = useState([])
  const [secilenKategori, setSecilenKategori] = useState(0)
  const kitaplariGetir = async () => {
    let url = "http://localhost:3000/kitaplar"
    if (secilenKategori) {
      url += "?kitapKategoriId=" + secilenKategori
    }
    const response = await axios.get(url)
    const veri = response.data
    setKitap(veri)
  }
  const kategorileriGetir = async () => {
    let url = "http://localhost:3000/kategoriler"
    const response = await axios(url)
    const veri = response.data
    setKategori(veri)
    // kitapEkle kitap sil
  }
  const yeniKitapEkle=async(yeniKitap)=>{
    let url="http://localhost:3000/kitaplar"
    const response=await axios.post(url,yeniKitap)
    // setKitap([...kitap,yeniKitap])
    // kitaplariGetir()
  }
  useEffect(()=>{
    kitaplariGetir();
    kategorileriGetir();
  },[secilenKategori])
  return (
    <>
      <Navbar kategori={kategori} setSecilenKategori={setSecilenKategori}/>
      <Form yeniKitap={yeniKitapEkle} />
      <Card data={kitap} />

    </>
  )
}

export default App
