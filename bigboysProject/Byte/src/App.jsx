 import React from 'react'

import './App.css'
import Column1 from './Column1.jsx'
import Column2 from './Column2.jsx'
import Column3 from './Column3.jsx'
function App() {
   

  return (
    <>
       <div className='container'>
           <div><Column1/></div>
           <div><Column2/></div>
           <div><Column3/></div>
       </div>      
    </>
  )
}

export default App
