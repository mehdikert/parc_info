import Login from "./Pages/Login"
import { Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Pages/Home";
import Materiel from "./Pages/Materiel";
import Be from "./Pages/Be";
import Bs from "./Pages/Bs";
import Bl from "./Pages/Bl";
import Decharge from "./Pages/Decharge";
import DemandeRef from "./Pages/DemandeRef";
import Equipement from "./Pages/Equipement";
import FicheAffec from "./Pages/FicheAffec";
import Fournisseur from "./Pages/Fournisseur";
import Inventaire from "./Pages/Inventaire";
import Marque from "./Pages/Marque";
import Modele from "./Pages/Modele";
import Piece from "./Pages/Piece";
import PvReforme from "./Pages/PvReforme";
import User from "./Pages/User";
import Reparation from "./Pages/Reparation";

function App() {

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/bon/bon-entree' element={<Be />} />
        <Route path='/bon/bon-sortie' element={<Bs />} />
        <Route path='/bon/bon-livraison' element={<Bl />} />
        <Route path='/decharge' element={<Decharge />} />
        <Route path='/demande-reforme' element={<DemandeRef />} />
        <Route path='/equipement' element={<Equipement />} />
        <Route path='/fiche-affectation' element={<FicheAffec />} />
        <Route path='/fournisseur' element={<Fournisseur />} />
        <Route path='/inventaire' element={<Inventaire />} />
        <Route path='/marque' element={<Marque />} />
        <Route path='/materiel' element={<Materiel />} />
        <Route path='/modele' element={<Modele />} />
        <Route path='/piece' element={<Piece />} />
        <Route path='/pv-reforme' element={<PvReforme />} />
        <Route path='/reparation' element={<Reparation />} />
        <Route path='/utilisateur' element={<User />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
