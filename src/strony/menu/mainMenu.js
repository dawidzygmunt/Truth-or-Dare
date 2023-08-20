import './menu.css'


function MainMenu () {
  return (
    <div className="container">
      <div id='menu-header'>
        <h1>PRIMO</h1>
        <h3>PRAWDA CHODZI BOSO</h3>
      </div>
      <div id='main-menu'>
        <ul>
          <li><a href="/newGame"><button>Nowa gra</button></a></li>
          <li><a href="/continue"><button>Kontynuj</button></a></li>
          <li><a href="/settings"><button>Ustawienia</button></a></li>
          <li><a href="/credits"><button>Credits</button></a></li>
        </ul>
      </div>
    </div>
  )
}

export default MainMenu