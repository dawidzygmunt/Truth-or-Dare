import AsideSingleItem from './asideComponent'
import { LuLayoutDashboard, LuUser, LuLogOut, LuSettings } from 'react-icons/lu'
import { MdReportGmailerrorred } from 'react-icons/md'
import { AiOutlineMail, AiOutlinePlus } from 'react-icons/ai'
import { IoAnalyticsOutline } from 'react-icons/io5'
import { CgCardHearts } from 'react-icons/cg'

function SideNavbar() {  
  return (
    <aside>
    <div className="toogle">
      <div className="logo">
        <img src="" alt="" />
        <h2>Karty<span className="danger">Party</span></h2>
      </div>
      <div className="sidebar">
        <AsideSingleItem icon={<LuLayoutDashboard />} title='Strona główna' path='/admin/dashboard' />
        <AsideSingleItem icon={<LuUser />} title='Użytkownicy' path='/admin/users' />
        <AsideSingleItem icon={<IoAnalyticsOutline />} title='Statystyki' path='/settings' />
        <AsideSingleItem icon={<CgCardHearts />} title='Przeglądaj' path='/admin/all-cards' />
        <AsideSingleItem icon={<AiOutlinePlus />} title='Dodaj nowe' path='/admin/new-cards' />
        <AsideSingleItem icon={<AiOutlineMail />} title='Wiadomości' path='/admin/messages' />
        <AsideSingleItem icon={<MdReportGmailerrorred />} title='Zgłoszenia' path='/admin/tickets' />
        <AsideSingleItem icon={<LuSettings />} title='Ustawienia' path='/admin/settings' />
        <AsideSingleItem icon={<LuLogOut />} title='Wyloguj się' path='/admin/logout' />
      </div>
    </div>
  </aside>
  )
}

export default SideNavbar