/* eslint-disable react/prop-types */
import { useContext } from 'react'
import './css/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/Items/Item'


const ShopCategory = (props) => {
  const{all_product}= useContext(ShopContext)
  return (
   <div className="shopcategory">
    <img className='shopcategory-banner' 
    src={props.banner} alt="" />

    <div className="shopcategory-indexsort">
     <p>
       <span>Showing </span> Total Products 
       </p>

       <div className="shopcategory-sort">
        Sort By <img
         src="src\components\Assets\dropdown_icon.png" alt="" />
       </div>
    </div>

    <div className="shopcategory-products">
      {all_product.map((item , i)=>{
        if(props.category === item.category){
          return <Item key={i}
          id = {item.id}
          name={item.name}
          new_price={item.new_price}
          old_price={item.old_price}
          image={item.image}/>
        }else{
          return null;
        }
      })}
    </div>
    <div className="shopcategory-loadmore">
      Explore More
    </div>
   </div>
  )
}

export default ShopCategory