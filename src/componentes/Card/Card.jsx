import React from 'react'
import Button from '../buttons/Button'
import S from './Card.module.css'
const Card = ({keyId, img, productName, description, oldPrice, price, count, value}) => {
  return (
    <div className={S.card} key={keyId}>
        <div>
            <img src={img} alt=""/>
        </div>
        <div>
            <h4>{productName}</h4>
            <p>{description}</p>
            <p>De: R$:{oldPrice}</p>
            <p className={S.bold}>Por: R${price}</p>
            <p>ou {count}x de R${value}</p>
            <Button text ="Comprar" style={S.btn}/>
        </div>
    </div>
  )
}

export default Card