// import './App.css';
// import './index.css';
// import LoginPage from './loginPage';
import MainMenu from './strony/menu/mainMenu';
import AddCardPanel from './component/addCardPanel/settings';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewGame from './component/newGame/newGame';
import MainGame from './component/gameMain/main';
import AdminPanel from './component/adminPanel/adminPanel';
import SearchAllCards from './component/adminPanel/AllCards/allCard';
import AdminSingleCard from './component/adminPanel/AllCards/adminSignleCard';
import AdminNewCard from './component/adminPanel/newCard/newCard';

function App() {
  return (
    // <NewGame />
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<MainMenu />}></Route>
          <Route path='/newGame' element={<NewGame />}></Route>
          <Route path='/main' element={<MainGame />}></Route>
          <Route path='/settings' element={<AdminPanel />}></Route>
          <Route path='/settings/panel' element={<AddCardPanel />}></Route>
          <Route path='/admin/all-cards' element={<SearchAllCards />}></Route>
          <Route path='/admin/edit-single/:info' element={<AdminSingleCard />}></Route>
          <Route path='/admin/new-card' element={<AdminNewCard />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
