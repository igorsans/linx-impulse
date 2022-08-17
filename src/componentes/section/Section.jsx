import React from 'react'
import Article from '../articles/article'
import Form from '../form/Form'
import S from './Section.module.css'

const Section = () => {
  return (
    <section className={S.section}>
        <Article style={S.article}/>
        <Form style={S.input} btnStyle={S.buttonForm}/>
    </section>
  )
}

export default Section