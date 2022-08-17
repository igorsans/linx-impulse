import React from 'react'
import P from '../pe/P'
import Title from '../title/Title'

const Article = ({style}) => {
  return (
    <article className={style}>
        <Title text={"Ajude o algorítimo a ser mais certeiro"}/>
        <P text={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, necessitatibus officia. Praesentium illo quo quidem, voluptas nihil ipsa cum expedita magni veniam minus molestias blanditiis est sed id veritatis sapiente?"}/>
        <P text={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, necessitatibus officia. Praesentium illo quo quidem, voluptas nihil ipsa cum expedita magni veniam minus molestias blanditiis est sed id veritatis sapiente?"}/>
    </article>
  )
}

export default Article