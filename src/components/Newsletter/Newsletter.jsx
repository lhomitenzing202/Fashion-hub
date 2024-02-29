import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className="newsletter">
        <h1>Get Exclusive offers on Your Email</h1>
        <p>Suscribe to Our Newsletter and Stay Updated</p>
        <div>
            <input type="email" placeholder='Your Email' />
            <button>Suscribe</button>
        </div>
    </div>
  )
}

export default Newsletter