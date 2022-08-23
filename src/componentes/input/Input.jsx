import React from 'react'

const Input = ({style, type, key}) => {
  return (
        <input className={style} type={type} key={key} />
  )
}

export default Input