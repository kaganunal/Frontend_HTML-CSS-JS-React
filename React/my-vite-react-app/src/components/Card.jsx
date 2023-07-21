import React from 'react'
import '../assets/style/card.scss'
const Card = ({data}) => {
  return (
    <div className="card-container">
      {data.map(kitap=><div className="card">
        <img src={kitap.kitapResmi} alt={kitap.kitapAdi}/>
        <div className="card-body">
          <p>{kitap.kitapAdi}</p>
          <p>{kitap.kitapYazar}</p>
          <p>{kitap.kitapSayfa}</p>
          <p>{kitap.kitapAciklama}</p>
          <p>{kitap.kitapAciklama}</p>
          <p>{kitap.kitapKategoriId}</p>
        </div>
      </div>
        
        
        
        )}
    </div>
  )
}

export default Card