import {useEffect, useState} from 'react';
import Card from '../Card/Card';
import S from './Products.module.css'
import Button from '../buttons/Button';


const Poducts = () => {

  const [cardInfo, setcardInfo] = useState([]);
  const [page, setPage] = useState('frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1')
  const [nextPag, setNextPage] = useState('')

  async function handleRequisicao() {
    const response = await fetch(
      `https://${page}`
    );
    const json = await response.json();
    setcardInfo([...json.products]);
    setNextPage(json.nextPage)
  }

  const nextPage = (e)=>{
    setPage(nextPag)
  }

  useEffect(() => {
    handleRequisicao();
  }, [page]);
  
  return (
    <div className={S.divProducts}>
      <div className={S.products}>
          {cardInfo.map((item) =>
          <Card
          productName={item.name}
          img={item.image}
          description={item.description}
          oldPrice={item.oldPrice}
          price={item.price}
          count={item.installments.count}
          value={item.installments.value}
           />
          )}
      </div>
      <Button func={nextPage} style={S.btn} text="Ainda mais produtos aqui!"/>
    </div>
  )
}

export default Poducts