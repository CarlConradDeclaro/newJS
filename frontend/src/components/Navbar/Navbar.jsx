import { BiMenu } from 'react-icons/bi';

const Navbar = () => {

  const toggle = () => {
    const side = document.querySelector('.sidebar')
    const backdrop = document.querySelector('.backdrop')
    side.classList.toggle('show')
    backdrop.classList.toggle('darken')
  }  
  

  return (
    <header className="navbar container">
         <BiMenu className="toggle-icon" onClick={toggle} />
        <h1 className="logo">Navbar</h1>
    </header>
  )
}

export default Navbar