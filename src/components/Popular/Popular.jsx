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
import data_product from '../Assets/data';
import Item from '../Items/Item';

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr/>
      <div className="popular-item">
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            itemName={item.name}
            newPrice={item.new_price}
            oldPrice={item.old_price}
            imageUrl={item.image}
          />
        ))}
      </div>
    </div>    
  );
}

export default Popular;

        
   