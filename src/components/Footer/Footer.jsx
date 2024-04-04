import './Footer.css'
import footer_icon from '../Assets/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <div className="footer">
    <div className="footer-logo">
        <img src={footer_icon} alt="" />
        <p>FashionHub</p>
    </div>
    
    <ul className='footer-links'>
        
        <li><Link style={{ textDecoration: 'none' }} to='/'>Home</Link></li>
        <li><Link style={{ textDecoration: 'none' }} to='/'>Latest Product</Link></li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    <div className="social-icons">
        <div className="footer-icon-container">
            <img src="src\components\Assets\instagram_icon.png" alt="" />
            </div>
            <div className="footer-icon-container">
            <img src="src\components\Assets\whatsapp_icon.png" alt="" />
            </div>
            <div className="footer-icon-container">
            <img src="src\components\Assets\pintester_icon.png" alt="" />
            </div>

    </div>

    <div className="footer-copyrights">
        <hr />
        <p>Copyrights @ 2024 - All Rights Reserved By FashionHub. </p>
    </div>
   </div>
  )
}

export default Footer