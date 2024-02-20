import './Hero.css'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>Latest Arrivals</h2>

            <div>
            <div className="hero-hand-icon">
                <p>New</p><img src="src\components\Assets\hand_icon.png" alt="" />
            </div>
            <p>Collections</p>
            <p>for everyone</p>
            </div>

            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src="src\components\Assets\arrow.png" alt="" />
            </div>
            </div>

            <div className="hero-right">
                <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero