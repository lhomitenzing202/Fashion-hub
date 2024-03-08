// import './Breadcrum.css'
// import arrow_icon from '../Assets/breadcrum_arrow.png'


// const Breadcrum = (props) => {
//   const {porduct}=props
//   return (
//     <div className="breadcrum">
//       Home <img src={arrow_icon} alt="" /> 
//       Shop <img src={arrow_icon} alt="" />
//        {product.category} <img src={arrow_icon} alt="" />
//         {product.name} <img src={arrow_icon} alt="" />
//     </div>
//   )
// }


// export default Breadcrum
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
  const { product } = props; // Corrected spelling of "product"
  return (
    <div className="breadcrum">
      Home <img src={arrow_icon} alt="" /> 
      Shop <img src={arrow_icon} alt="" />
       {product.category} <img src={arrow_icon} alt="" />
        {product.name} <img src={arrow_icon} alt="" />
    </div>
  );
};

export default Breadcrum;



