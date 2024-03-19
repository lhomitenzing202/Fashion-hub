import './Footer.css'

const Footer = () => {
  return (
   <div className="footer">
    <div className="footer-logo">
        <img src="src\components\Assets\fashionhub4.PNG" alt="" />
        <p>Fashion-Hub</p>
    </div>
    
    <ul className='footer-links'>
        <li>Home</li>
        <li>Products</li>
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