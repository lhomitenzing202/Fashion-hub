
// import './Item.css'

// const Item = (props) => {
//   return (
//     <div className="item">
//     <img src={props.image} alt="" />
//     <p>{props.name}</p>

//     <div className="item-prices">
//         <div className="item-price-new">
//             {props.new_price}
//         </div>
//         <div className="item-price-old">
//             {props.old_price}
//         </div>
//     </div>

// </div>
//   )
// }

// export default Item




import PropTypes from 'prop-types'; // Import PropTypes
import './Item.css';
import { Link } from 'react-router-dom';


const Item = (props) => {
  return (
    <div className="item">
      <Link to ={`/product/${props.id}`}>
        <img src={props.imageUrl} alt="Image" /></Link>
      <p>{props.itemName}</p>

      <div className="item-prices">
        <div className="item-price-new">
          Nrs: {props.newPrice}
        </div>
        <div className="item-price-old">
          Nrs: {props.oldPrice}
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  imageUrl: PropTypes.string, 
  id: PropTypes.string,
  itemName: PropTypes.string, 
  newPrice: PropTypes.number, 
  oldPrice: PropTypes.number, 
};

export default Item;
