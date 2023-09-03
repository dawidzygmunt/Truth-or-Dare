import AnalysticTile from "./analystic/analysticComponent"
import SideNavbar from "./aside/sideNavbar"




function AdminPanel() {
  return (
    <div className="admin-panel-container">

      <SideNavbar />


      {/* Main Content */}
      <main>
        <h1>Statystyki</h1>
        <div className="analyse">
          <AnalysticTile title='Wszystkich kart' amount='451' percentage='98' />
          <AnalysticTile title='Wyzwania' amount='184' percentage='57' />
          <AnalysticTile title='Pytania' amount='265' percentage='87' />
        </div>
      </main>



    </div>
  )
}

export default AdminPanel