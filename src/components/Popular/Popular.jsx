// import './Popular.css'
// import data_product from '../Assets/data'



// const Popular = () => {
//   return (
//     <div className="popular">
//         <h1>Popular in womens</h1>
//         <hr/>
//         <div className="popular-item">
//             {data_product.map((Item,i)=>{
//                 return<Item key={i} id ={Item.id} name={Item.name} image={Item.image} new_price={Item.new_price} old_price={Item.old_price}/>
//             })}
//         </div>

//   </div>    
//   )
// }

// export default Popular

import './Popular.css';
import Item from '../Items/Item';
import { useEffect, useState } from 'react';

const Popular = () => {

  const[popularInWomen,setPopularitem]= useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/popularamongwomen')
    .then((response)=>response.json())
    .then((data)=>setPopularitem(data))
},[])

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr/>
      <div className="popular-item">
        {popularInWomen.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
            image={item.image}
          />
        ))}
      </div>
    </div>    
  );
}

export default Popular;

        
   