

const LoginSignup = () => {
  return (
    <>
    <div className="loginsignup">
    <div className="loginsignup-container">
    <h1>Sign Up</h1>

    <div className="loginsignup-fields">
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
    </div>
    <button>Continue</button>
    <p className="loginsignup-login">Already have an account ? <span>Login now</span></p>

    <div className="loginsigunp-agree">
      <input type="checkbox" name='' id='' />
      <p>By continuing, i agree to the terms of use and policy. </p>
    </div>
    </div>
    </div>
    </>
  )
}

export default LoginSignup


