import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Signup.css'
 

const Signup= () =>{
    return  (

        <>
        <div className="container">

                 <h1>Register</h1>
                 
                <div className="create Account">
                        
                        
                        <form action="">

                            <div className="names">
                                    <input type="text" placeholder='Firstname' />
                                    <input type="text" placeholder='Lastname' />
                                </div>  
                            
                                    <input type="email" placeholder='Email' />
                                    <input type="email" placeholder='Confirm email'/>
                                    <input type="password" name="" id="" placeholder='Create password' />
                                    <input type="password" name="" id="" placeholder='Confirm password' />                  
                        </form>
                </div>
           </div>
        </>
    )
}

export default Signup;