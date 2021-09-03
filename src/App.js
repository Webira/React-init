import eclair from './cafe.jpg';
import Presentation from './composant/Presentation/Presentation';
import Recette from './composant/Recette/Recette';
import Carte from './composant/Carte/Carte';
import NavBar from './composant/NavBar/NavBar';
import Footer from './composant/Footer/Footer';
import React , {useState} from 'react' 
import { Link,Switch,Route} from 'react-router-dom';
import About from './composant/About/About';
import Home from './composant/Home/Home';
import ContactList from './composant/ContactList/ContactList';
import Error from './composant/Error/Error';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Info from './composant/Info/Info';

function App() {
  
  const [filtre, setFiltre] = useState("");
  const handleres = (val)=>{setFiltre(val)}
  //console.log(filtre)

  return (
    <div className="container">
        {/* <Presentation/>
        <Recette/>  */}

        <NavBar rech={handleres}/>
        <Switch>
          <Route exact path="/" component = {Home}/>
          <Route path="/About" component = {About}/>
          <Route path="/Info:OneContact" component = {Info}/>
          <Route path="/Contact" component = {()=><ContactList filtre={filtre}/>}/>
          <Route path="/*" component = {Error}/>
          </Switch>
          
           
           
        <Footer/>
    </div>
  );
}

export default App;
