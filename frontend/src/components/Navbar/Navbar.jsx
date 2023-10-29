import { BiMenu } from 'react-icons/bi';

import {AiOutlineSearch} from 'react-icons/ai'
import {FiSearch} from 'react-icons/fi'
import {BiArrowBack} from 'react-icons/bi'
import { useState } from 'react';
import './Navbar.css'



const Navbar = () => {

  const toggle = () => {
    const side = document.querySelector('.sidebar')
    const backdrop = document.querySelector('.backdrop')
    side.classList.toggle('show')
    backdrop.classList.toggle('darken')

    console.log('click')
  }  
  

  return (
    <header className="navbar container">
         <BiMenu className="toggle-icon" onClick={toggle} />
        <h1 className="logo">Navbar Test</h1>
    </header>
  )
}

export default Navbar