import React from 'react'
import Button from '../buttons/Button'
import Input from '../input/Input'
import Label from '../label/Label'

const Form = ({text, style, btnStyle}) => {
  return (
    <form>
        <Label text={"Seu nome:"}/>
        <Input style={style}/>
        <Label text={"E-mail:"}/>
        <Input style={style}/>
        <Label text={"CPF:"}/>
        <Input style={style}/>
        <Button style={btnStyle} text={"Enviar"}/>
    </form>
  )
}

export default Form