import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import './index.css'
{/* <FontAwesomeIcon icon={faRightToBracket} /> */}

const LogInPage  = () => {
   
    return(
           <div className="container">
                    
                

                     <div className="LoginBody">

                            <h1>Money Expenses Tracker</h1>
                            <p>Designed to simplify your financial journey and provide you with valuable insights into your spending habits.</p>
                            <form action="">

                             <input type="text" placeholder="Enter Email" required/>
                             <input type="text" placeholder="Enter Password" required/>
                             <input type="button" value="submit" />



                            </form>
                            
                    </div>
                 
           </div>
    );

};

export default LogInPage;