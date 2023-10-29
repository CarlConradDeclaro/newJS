import { BiMenu } from 'react-icons/bi';
import {AiOutlineSearch} from 'react-icons/ai'
import {FiSearch} from 'react-icons/fi'
import {BiArrowBack} from 'react-icons/bi'
import { useState } from 'react';
import './Navbar.css'

const Navbar = () => {

  const [showSearch, setshowSearch] = useState(false);

  const toggle = () => {
    const side = document.querySelector('.sidebar')
    const backdrop = document.querySelector('.backdrop')
    side.classList.toggle('show')
    backdrop.classList.toggle('darken')
  }  

  return (
    <header className="navbar container">


      {showSearch && 
        <div className="clicked-search">
          <div className="back-container" onClick={() => setshowSearch(false)}>
            <BiArrowBack className='back'></BiArrowBack>
          </div>
          <form action="">
            <input type="text" placeholder='Search'/>
          </form>
        </div>
      }

        <BiMenu className="toggle-icon" onClick={toggle} />
        <h1 className="logo">LOGO</h1>
        <form className="input-section">
          <input type="text" placeholder='Search'/>
          <div className="search-container" onClick={() => setshowSearch(true)}>
            <FiSearch className='search-icon' ></FiSearch>
          </div>
        </form>

         <BiMenu className="toggle-icon" onClick={toggle} />
        <h1 className="logo">Navbar Test</h1>
    </header>
  )
}

export default Navbar