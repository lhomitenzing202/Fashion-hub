/* eslint-disable react/prop-types */
// import './ProductDisplay.css'
// import stardull_icon from '../Assets/star_dull_icon.png'
// import star_icon from '../Assets/star_icon.png'

// const ProductDisplay = (props) => {
//     const {product} = props;
//   return (
    // <div className="productdisplay">
    //     <div className="productdisplay-left">
    //         <div className="productdisplay-img-list">
    //             <img src={product.image} alt="" />
    //             <img src={product.image} alt="" />
    //             <img src={product.image} alt="" />
    //             <img src={product.image} alt="" />
    //         </div>
    //         <div className="productdisplay-img">
    //             <img className='productdisplay-main-img' src={product.image} alt="" />
    //         </div>
    //     </div>

    //     <div className="productdisplay-right">
    //         <h1>{product.name}</h1>

    //         <div className="productdisplay-right-star">

    //             <img src={star_icon} alt="" />
    //             <img src={star_icon} alt="" />
    //             <img src={star_icon} alt="" />
    //             <img src={star_icon} alt="" />
    //             <img src={stardull_icon} alt="" />
    //             <p>(122)</p>
    //         </div>

    //     </div>
    // </div>

    import  { useState, useEffect } from 'react';
import all_Product from '../Assets/all_product'; // Assuming all_products.js contains an array of products

const ProductDisplay = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Function to fetch product by ID
    const fetchProductById = () => {
      const foundProduct = all_Product.find(prod => prod.id === productId);
      setProduct(foundProduct);
    };

    // Call the function to fetch product by ID
    fetchProductById();
  }, [productId]);

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>{product.image}</p>
          <p>Price: ${product.new_price}</p>
          {/* Add other product details as needed */}
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};


export default ProductDisplay