import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrums/Breadcrum";


 const Product = () => {
  const{all_products} = useContext(ShopContext);
  const {prodcuctId} = useParams();
  const product = all_products.find((e)=>e.id === Number(prodcuctId));
  return (
    <div>
      <Breadcrum product={product}/>
    </div>
  )
}

export default Product