import { useNavigate } from 'react-router-dom'
import './menu.css'


function MainMenu() {
  const navigate = useNavigate()


  return (
    <div className="container-main-menu">
      <div id='menu-header'>
        <h1>PRIMO</h1>
        <h3>PRAWDA CHODZI BOSO</h3>
      </div>
      <div id='main-menu'>
        <ul>
          <li><button onClick={() => navigate('/newGame')}>Nowa gra</button></li>
          <li><button onClick={() => navigate('/main')}>Kontynuj</button></li>
          <li><button onClick={()=> navigate('/settings')}>Ustawienia</button></li>
          <li><button>Credits</button></li>
        </ul>
      </div>
    </div>
  )
}

export default MainMenu