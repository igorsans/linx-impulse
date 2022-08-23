import React from 'react'

const Card = ({keyId, img, productName, description, oldPrice, price, count, value}) => {
  return (
    <div key={keyId}>
        <div>
            <img src={img} alt=""/>
        </div>
        <div>
            <h3>{productName}</h3>
            <p>{description}</p>
            <p>De: R$:{oldPrice}</p>
            <p>Por: R${price}</p>
            <p>ou {count}x de R${value}</p>
            <button>Comprar</button>
        </div>
    </div>
  )
}

export default Card