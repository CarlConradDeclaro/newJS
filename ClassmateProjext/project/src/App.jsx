 import React from 'react'

 import Column1 from './Column1.jsx'
 import Column2 from './Column2.jsx'
 import Column3 from './Column3.jsx'
 import './App.css'

function App() {
   
   return(
      <div className='columns'>
      <div className='item'> <Column1/> </div>
      <div className='item'> <Column2/> </div>
      <div className='item'> <Column3/> </div> 
      </div>
     
   )
}

export default App
