

const loginPage = ()=>{

     return(
    
        <div className="container">
             <div className="loginpage">                                   
                   <div className="welcomeMessage">
                        <h1>Welcome</h1>
                        <h2>Java Point Of Sales</h2> 
                   </div>  
                   <div className="loginForm">                       
                        <h1>Login</h1>
                        <form action="">
                            <label htmlFor="username">  Username:</label>
                            <input type="text" name="username" placeholder="Username" />
                            <label htmlFor="password">Password</label>
                            <input type="password" name="pasword" placeholder="Password"/>
                             <button>Button</button>
                        </form>

                    </div>  
             </div>
        </div>
        
     );

}

export default loginPage;