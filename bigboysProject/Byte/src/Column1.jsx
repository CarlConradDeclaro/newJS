import './Column1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faHouse,faUsers ,faCalendarDays, faGear} from '@fortawesome/free-solid-svg-icons'
 const Column1= () =>{
  
    return(
        <div className='Column1'> 
              <div className='userProfile'>
                  <div className="img"><h1>ANZ</h1></div>
                  <h1></h1>
                  <div className="userName">ANZ Company</div>
              </div>
  

           <div className="menubar">

                    <div className="Home">
                            <div className='icon'> <FontAwesomeIcon icon={faHouse}/></div>  
                            <h4 className="label">Home</h4>          
                     </div>

                    <div className="Following">
                        <div className='icon'> <FontAwesomeIcon icon={faUsers}/></div>  
                        <h4 className="label">Following</h4>
                    </div>
                    <div className="Events">
                        <div className='icon'> <FontAwesomeIcon icon={faCalendarDays}/></div>  
                        <h4 className="label">Events</h4>
                    </div>
                    <div className="Setting">
                        <div className='icon'> <FontAwesomeIcon icon={faGear}/></div>  
                        <h4 className="label">Events</h4>    
                    </div> 
                  

              </div>
              
        </div>
         
    )

}

export default Column1;