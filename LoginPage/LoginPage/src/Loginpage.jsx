import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Login.css'
import { FaGoogle,FaApple } from 'react-icons/fa';


function Login() {
 
  return (
    <>
        <div className="login">        
              <div className="SignIn">

                   <div className="title">
                      <h1>Welcome</h1>
                   </div>

                    {/* ikaw na bahala pag modify ning form, dko knows pag handle sa form hahaha  */}
                    <form action="">
                       
                        <div className="username">
                            <input type="text"  name='username' placeholder='Username or Email'/>
                        </div>
                      
                        <div className="password">
                            <input type="password" name='password'  placeholder='Password' />
                        </div>

                        <div className="forgotPass">
                       <a href="Signup.jsx">Forgot Password</a>
                        </div>

                        <div className="btn">
                              <button>Log In</button>
                        </div>

                    </form>                 

                   <div className="signUp">
                        <p>Don't have an account yet? <a href="#">Sign Up</a></p>
                   </div>

                   <div className="accounts">
                         <div className="apple">
                               <button><FaApple/>   Log in with Apple</button>
                         </div>

                         <div className="google">
                                 <button><FaGoogle />   Log in with Google</button>
                         </div>
                   </div>
              </div> 
        </div>
    </>
  )
}

export default Login
