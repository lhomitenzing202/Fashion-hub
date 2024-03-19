import '../page/css/Loginsignup.css'

const LoginSignup = () => {
  return (
    <>
   <div className="loginsignup">
    <div className="loginsignup-container">
    <h1>Sign Up</h1>

      <div className="loginsignup-fields">
        <input type="text" placeholder='Your Name' />
        <input type="email" placeholder='Email address' />
        <input type="password" placeholder='Password'/>
        </div>

      <button>Continue</button>
      <p className='loginsignup-login'>Already Have an account ? <span>Login Now</span></p>
      

      <div className="loginsignup-agree">
  <input type="checkbox" name='' id='' />
  <p>By continuing, i agree to the terms of use and policy. </p>
  </div>
  </div>
  </div>

  </>
  )
}

export default LoginSignup






