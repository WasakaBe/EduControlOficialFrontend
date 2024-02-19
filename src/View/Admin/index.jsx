import React,{useState} from 'react'
import { DashboardMenu,DashboardPanel,PanelConfig,PanelCredencial, PanelListas, PanelMensajeria } from '../../Components/Admin'
import './Admin.css'

export default function IndexAdmin() {
  const [currentPanel, setCurrentPanel] = useState('dashboard'); // Estado para controlar el panel actual
  const handleButtonClick = (panel) => {
    setCurrentPanel(panel);
  };

  return (
    <div className='container-Admin'>
      <DashboardMenu onButtonClick={handleButtonClick}/>
      <div>
        {currentPanel === 'dashboard' && <DashboardPanel />}
        {currentPanel === 'Credencial' && <PanelCredencial />}
        {currentPanel === 'Listas' && <PanelListas />}
        {currentPanel === 'Mensajeria' && <PanelMensajeria />}
        {currentPanel === 'Configuracion' && <PanelConfig />}
      </div>
    </div>
  )
}
