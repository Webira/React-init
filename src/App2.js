import './App.css';



function App() {
    const contactList= [
        { nom:"Irina", prenom:"Guery", age:18},{ nom:"Maelle", prenom:"Donn", age:18}
    ]
  return (
    <div className="container">
       // <Carte x={contactList[0]}/>
       {contactList.map(el=><Carte x={el}/>)}
        
      
    </div>
  );
}

export default App;
