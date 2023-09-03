import { Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NavbarMine() {
  const navigate = useNavigate()

  return (
    <Navbar expand='lg'>
      <h4 onClick={() => navigate('/')}>Ashley</h4>
      <ul>
        <li onClick={() => navigate('/')}>Strona Główna</li>
        <li onClick={() => navigate('/settings')}>Ustawienia</li>
        <li onClick={() => navigate('')}>Panel Administratora</li>
        <li><a href="/#">Więcej</a></li>
      </ul>
      <a href="/#" className='cta'><button>Kontakt</button></a>
      {/* </Navbar.Collapse> */}
    </Navbar>
  )
}

export default NavbarMine;