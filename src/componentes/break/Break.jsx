import React from 'react'
import P from '../pe/P'
import S from "./Break.module.css"
const Break = ({text}) => {
  return (
    <div className={S.break}>
        <hr className={S.hr}></hr>
        <P text={text}/>
    </div>
  )
}

export default Break