import React,{useState} from 'react'
import { DashboardMenu,DashboardPanel,PanelConfig,PanelCredencial, PanelListas, PanelMensajeria } from '../../Components/Admin'
import './Admin.css'
import { Footer } from '../../Components/Public';

export default function IndexAdmin() {
  const [currentPanel, setCurrentPanel] = useState('dashboard'); // Estado para controlar el panel actual
  const handleButtonClick = (panel) => {
    setCurrentPanel(panel);
  };

  return (
    <div >
      <div className='container-Admin'>
        <DashboardMenu onButtonClick={handleButtonClick}/>
        {currentPanel === 'dashboard' && <DashboardPanel />}
        {currentPanel === 'Credencial' && <PanelCredencial />}
        {currentPanel === 'Listas' && <PanelListas />}
        {currentPanel === 'Mensajeria' && <PanelMensajeria />}
        {currentPanel === 'Configuracion' && <PanelConfig />}
      </div>
      <Footer/>
    </div>
  )
}
