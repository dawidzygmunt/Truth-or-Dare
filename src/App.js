// import './App.css';
// import './index.css';
// import LoginPage from './loginPage';
import MainMenu from './strony/menu/mainMenu';
import AddCardPanel from './component/addCardPanel/settings';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewGame from './component/newGame/newGame';
import MainGame from './component/gameMain/main';

import AdminPanel from './component/adminPanel/homePage/adminPanel';
import { Users } from './component/adminPanel/users/users';
import { Analyse } from './component/adminPanel/analyse/analyse';
import SearchAllCards from './component/adminPanel/AllCards/allCard';
import AdminSingleCard from './component/adminPanel/AllCards/adminSignleCard';
import AdminNewCard from './component/adminPanel/newCard/newCard';
import { Messages } from './component/adminPanel/messages/messages';
import { Tickets } from './component/adminPanel/tickets/tickets';
import { Settings } from './component/adminPanel/settings/settings';

import UrlConfig from './config/config';

function App() {

  const path1 = UrlConfig.basePath;
  return (
    <div className='App'>
      <Router basename='cards'>
        <Routes>
          <Route path='/' element={<MainMenu />}></Route>
          <Route path='/newGame' element={<NewGame />}></Route>
          <Route path='/main' element={<MainGame />}></Route>
          <Route path='/settings' element={<AdminPanel />}></Route>
          <Route path='/settings/panel' element={<AddCardPanel />}></Route>
          <Route path='/admin/users' element={<Users />}></Route>
          <Route path='/admin/analyse' element={<Analyse />}></Route>
          <Route path='/admin/all-cards' element={<SearchAllCards />}></Route>
          <Route path='/admin/edit-single/:info' element={<AdminSingleCard />}></Route>
          <Route path='/admin/new-card' element={<AdminNewCard />}></Route>
          <Route path='/admin/messages' element={<Messages />}></Route>
          <Route path='/admin/tickets' element={<Tickets />}></Route>
          <Route path='/admin/settings' element={<Settings />}></Route>
          <Route path='/admin/logout' element={<MainMenu />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
