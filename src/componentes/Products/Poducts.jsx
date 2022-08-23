import {useEffect, useState} from 'react';
import Card from '../Card/Card';


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

  const nextPage = ()=>{
    setPage(nextPag)
  }

  useEffect(() => {
    handleRequisicao();
  }, [page]);
  
  return (
    <div>
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

        <button onClick={nextPage}>teste</button>
    </div>
  )
}

export default Poducts