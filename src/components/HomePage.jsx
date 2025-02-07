import React from "react";
import lotion from '../assets/product-category-1.jpg.webp'
import sports from '../assets/product-category-2.jpg.webp'
import "../styles/style.css";
import { useNavigate } from "react-router-dom";
import { use } from "react";
import "../styles/homepage.css";
export const productList=[
    {
id: 1,
image: lotion,
cardTitle:"oil",
    },
    {
        id: 2,
        image: sports,
        cardTitle:"sport",
            },
    
]
function HomePage(){
    const navigation = useNavigate();
const handleNavigation= (id) =>{
    navigation(`/singlecard/${id}`)
}
    return(
        <div className="navcontainer">
         {productList.map((item)=>(
            <div className="cont" key={item.id}>
                <div><img src={item.image} className="cont1"/> </div>
                <div> {item.cardTitle}</div>
                <button type= 'button' className="button1" onClick={()=>handleNavigation(item.id)}>View</button>
                </div>
         ))}   

           </div>
       
    )
}
export default HomePage;