
import './Column2.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faSliders,faTableCellsLarge,faAngleDown,faEllipsis} from '@fortawesome/free-solid-svg-icons'
const Column2 = ()=>{
    return (
        <div className="feed">
         
         <div className="searchBar">
                    <div className='icon'> <FontAwesomeIcon icon={faMagnifyingGlass}/></div>  
                    <div className="searchArea">
                        <input type="text" name="" id="" className="search" placeholder='Search' />
                    </div>
                    <div className='icon'> <FontAwesomeIcon icon={faSliders}/></div> 
         </div>

             <div className="feedPosts">
                 
                    <div className='WhatsOnUrMind'>                  
                            <div className="createPost">
                                    <input type="text" name="" id=""  placeholder="What's on your mind?" />
                            </div>
                            <div className="plusBtn">
                                <h3>+</h3>
                            </div>
                    </div>

                    <div className="category">
                            <div className='x'>
                                
                                <div className="trending">
                                    <h3>Trending</h3>
                                </div>

                                <div className="following">
                                    <h3>Following</h3>
                                </div>

                                <div className="nerby">
                                    <h3>Nerby</h3>
                                </div>
                            </div> 

                            
                            <div className='catIcon'>
                            <div className='icon'> <FontAwesomeIcon icon={faTableCellsLarge}/><FontAwesomeIcon icon={faAngleDown}/></div> 
                            
                            </div>
                    </div>

                    <div className="post">
                           <div className="profileArea">

                                 <div className="picture">
                                       
                                       <div className="profileUser">
                                       <img src="./nft.jpg" alt="profilePic"  />
                                       </div>
                                    
                                     <div className="info">
                                        <div className="name"><h3>Carl Conrad Declaro</h3></div>                             
                                        <div className="timePost"><p>26 mins</p></div>
                                     </div>

                                 </div>

                                 <div className="others">
                                     <div className='icon'> <FontAwesomeIcon icon={faEllipsis}/> </div> 
                                 </div>
                           </div>

                           <div className="content">
                                  <div className="files">
                                         <div className="img">
                                            <img src="./cm.jpg" alt="" srcset="" />
                                         </div>
                                  </div>

                                  <div className='details'>
                                        <div className="categry">
                                            <h4>GAME</h4>
                                        </div>

                                        <div className="caption">
                                            <h3> Lorem ipsum dolor sit amet  dicta nostrum.</h3>
                                        </div>
                                  </div>

                                  <div className="postInfos">
                                        <p>Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique tempore tempora, exercitationem consectetur accusamus distinctio aliquam quidem optio nobis quo maiores possimus eos magni, fugiat aspernatur, Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloremque consectetur reiciendis repellat obcaecati soluta possimus, fuga maiores voluptate voluptatum provident. Nobis consectetur a molestias? Eum saepe aut distinctio recusandae. quibusdam perferendis a vero? ipsum dolor sit amet consectetur adipisicing elit. Tenetur optio odio explicabo non qui, porro corporis sed dolorem alias mollitia temporibus perspiciatis voluptatibus dolore deserunt unde voluptatum laboriosam voluptas impedit.</p>
                                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, tenetur! Cumque facere architecto odit iste dolorum, non, voluptate quibusdam praesentium recusandae esse corrupti eum officia placeat sed soluta. Enim, mollitia.</p>
                                   </div>
                                  <hr />

                                  <div className="interactions">
                                        <div className="likes">
                                            <div className='icon'> <FontAwesomeIcon icon={faEllipsis}/> </div> 
                                            <div>
                                                <p>Likes</p>
                                                <h4 className='numLikes'>150 K</h4>
                                            </div>
                                        </div>
                                        <div className="dislikes">
                                             <div className='icon'> <FontAwesomeIcon icon={faEllipsis}/> </div> 
                                             <div>
                                                <p>Dislike</p>
                                                <h4 className='numLikes'>12</h4>
                                             </div>
                                        </div>
                                        <div className="comments">
                                             <div className='icon'> <FontAwesomeIcon icon={faEllipsis}/> </div> 
                                            <div>
                                                <p>Comment</p>
                                                <h4 className='numLikes'>245</h4>
                                            </div>
                                        </div>
                                        <div className="shares">
                                            <div className='icon'> <FontAwesomeIcon icon={faEllipsis}/> </div> 
                                            <div>
                                                <p>Share</p>
                                                <h4 className='numLikes'>78</h4>
                                            </div>
                                        </div>
                                  </div>
                           </div>
                    </div>

           </div>

        </div>
    )
}

export default Column2;