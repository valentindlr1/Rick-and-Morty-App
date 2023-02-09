import './App.css'
import React from "react";
// import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx';
// import SearchBar from './components/SearchBar.jsx'
import Nav from './components/Nav';


function App () {
  const [characters, setCharacters] = React.useState({
    characters: []
  });

  

  function onSearch(text){
    let repe = false;
    characters.characters.forEach(element => {
      if (element.id.toString() === text) repe = true;
    });
    if(!repe){
      fetch(`https://rickandmortyapi.com/api/character/${text}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters({characters: [...characters.characters, data]})
         } else {
            window.alert('No hay personajes con ese ID');
         }})} else return alert("Ya agregaste este personaje");
    } 
    
 
  function onClose(key){
    var cambio = characters.characters.filter(num => num.id !== key);
    setCharacters({
      characters: cambio
    })

  }
  
  function onRandom(){
   const num = Math.floor(Math.random() * 827);
    onSearch(num)
  }

  return (
    <div className='App' >
      <div>
      <Nav onSearch = {onSearch} onRandom={onRandom}></Nav>
      </div>
      <hr />
      <div >
        <Cards characters={characters.characters} onClose = {onClose} />
      </div>
      <hr />
      
    </div>
  )
}

export default App

