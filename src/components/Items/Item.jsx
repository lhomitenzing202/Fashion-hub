/* eslint-disable react/prop-types */

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




// import PropTypes from 'prop-types'; // Import PropTypes
import './Item.css';
import { Link } from 'react-router-dom';



const Item = (props) => {
  return (
    <div className="item">
       <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link> 
      <p>{props.name}</p>

      <div className="item-prices">
        <div className="item-price-new">
          Nrs: {props.new_price}
        </div>
        <div className="item-price-old">
          Nrs: {props.old_price}
        </div>
      </div>
    </div>
  );
}

// Item.propTypes = {
//   image: PropTypes.string, 
//   id: PropTypes.number,
//   name: PropTypes.string, 
//   new_price: PropTypes.number, 
//   old_price: PropTypes.number, 
// };

export default Item;


