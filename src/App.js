import eclair from './cafe.jpg';
import './App.css';
import Presentation from './composant/Presentation/Presentation';
import Recette from './composant/Recette/Recette';


function App() {
  return (
    <div className="container">
        <Presentation/>
        <Recette/>
        
      
    </div>
  );
}

export default App;
