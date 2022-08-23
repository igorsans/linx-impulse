const Section = ({style, compOne, compTwo, comThree}) => {
  return (
    <section className={style}>
        {compOne ? compOne : ''}
        {compTwo ? compTwo :''}
    </section>
  )
}

export default Section