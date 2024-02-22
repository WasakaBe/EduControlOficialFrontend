import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '../View/Public';
import IndexAlumn from '../View/Alumns'
import IndexFamily from '../View/PatherFamily';
import IndexCE from '../View/Teacher_CE/IndexCE';
import IndexAdmin from '../View/Admin';
import Error400 from '../View/Error/error400';
import Error404 from '../View/Error/404';
import Error500 from '../View/Error/error500';
import RegisterAdmin2 from '../MVC/Views/RegisterTypes/RegisterAdmin/RegisterAdmin2';
import RegisterAlumn2 from '../MVC/Views/RegisterTypes/RegisterAlumn/RegisterAlumn2';
import { Login,RegisterSelection,RegisterAdmin,RegisterAlumn,RegisterDocent,RegisterDocentCE,RegisterFamily,ForgoutPassword,ForgoutToken,ForgoutUpdate } from '../MVC';
import { CulturalArte,CulturalAtletismo, CulturalBasketball,CulturalCanto,CulturalChess,CulturalDance,CulturalSoccer,CulturalVoleibol } from '../Sections';

export default function AppRoutes(){
  return(
    <div>
      <Router>
        <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/IndexAlumn" element={<IndexAlumn/>} />
            <Route path="/IndexFamily" element={<IndexFamily/>} />
            <Route path="/IndexCE" element={<IndexCE/>} />
            <Route path="/IndexAdmin" element={<IndexAdmin/>} />
            <Route path="/Login" element={<Login/>} />
          
            <Route path="/RegisterSelection" element={<RegisterSelection/>} />
            <Route path="/RegisterAdmin" element={<RegisterAdmin/>} />
            <Route path="/RegisterAdmin2" element={<RegisterAdmin2/>} />
            <Route path="/RegisterAlumn" element={<RegisterAlumn/>} />
            <Route path="/RegisterAlumn2" element={<RegisterAlumn2/>} />
            <Route path="/RegisterDocent" element={<RegisterDocent/>} />
            <Route path="/RegisterDocentCE" element={<RegisterDocentCE/>} />
            <Route path="/RegisterFamily" element={<RegisterFamily/>} />

            <Route path="/ForgoutPassword" element={<ForgoutPassword/>} />
            <Route path="/ForgoutToken/:correo" element={<ForgoutToken/>} />
            <Route path="/ForgoutUpdate/:correo" element={<ForgoutUpdate/>} />

            <Route path="/Arte" element={<CulturalArte/>} />
            <Route path="/Atletismo" element={<CulturalAtletismo/>} />
            <Route path="/Basquetbol" element={<CulturalBasketball/>} />
            <Route path="/Canto" element={<CulturalCanto/>} />
            <Route path="/Ajedrez" element={<CulturalChess/>} />
            <Route path="/Danza" element={<CulturalDance/>} />
            <Route path="/Futbol" element={<CulturalSoccer/>} />
            <Route path="/Voleibol" element={<CulturalVoleibol/>} />

            <Route path="/Error500" element={<Error500/>} />
            <Route path="/Error400" element={<Error400/>} />
            <Route path="/Error404" element={<Error404/>} />

            <Route path="*" element={<Error404 />} />
           
        </Routes>
      </Router>
    </div>
  )
}