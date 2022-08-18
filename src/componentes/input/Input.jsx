import React from 'react'

const Input = ({style, type, key}) => {
  return (
    <div>
        <input className={style} type={type} key={key} />
    </div>
  )
}

export default Input