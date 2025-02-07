import React from 'react'
import { useParams } from 'react-router-dom'
import { productList } from './HomePage'
function SinglePage() {
    const  {id} = useParams();
    console.log("product list", id);
   
    const card=productList.find((card)=>card.id==id);
  return (
    <div>
        <div><img src={card.image}/></div>
        <div>{card.cardTitle}</div>
    </div>
  )
}

export default SinglePage