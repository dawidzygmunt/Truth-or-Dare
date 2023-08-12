import { Button, Navbar } from 'react-bootstrap';

function NavbarMine (){
  return(
    <Navbar expand='lg'>
      <h4>Ashley</h4>
      {/* <Navbar.Brand>Ashley</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"> */}
        <ul>
          <li><a href="/#">Strona Główna</a></li>
          <li><a href="/#">Ustawienia</a></li>
          <li><a href="/#">Panel Administratora</a></li>
          <li><a href="/#">Więcej</a></li>
        </ul>
        <a href="/#" className='cta'><button>Kontakt</button></a>
      {/* </Navbar.Collapse> */}
    </Navbar>
  )
}

export default NavbarMine;