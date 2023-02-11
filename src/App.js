import './App.css'
import React from "react";
// import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx';
// import SearchBar from './components/SearchBar.jsx'
import Nav from './components/Nav';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import { Routes , Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function App () {
  const [characters, setCharacters] = React.useState({
    characters: []
  });
const navigate = useNavigate();
  

  function onSearch(text){
    let repe = false;
    characters.characters.forEach(element => {
      if (element.id.toString() === text) repe = true;
    });
    if(!repe){
      fetch(`https://rickandmortyapi.com/api/character/${text}`)
      .then((response) => response.json())
      .then((data) => {
        navigate("/home");
         if (data.name) {
            setCharacters({characters: [...characters.characters, data]})
         } else {
            window.alert('No hay personajes con ese ID');
         }})} else return window.alert("Ya agregaste este personaje");
    } 
    
 
  function onClose(key){
    var cambio = characters.characters.filter(num => num.id !== key);
    setCharacters({
      characters: cambio
    })

  }
  
  function onRandom(){
   const num = Math.floor(Math.random() * 827);
   navigate("/home");
    onSearch(num);
  }
 
  return (
    <div className='App' >
      <div>
      <Nav onSearch = {onSearch} onRandom={onRandom} ></Nav>
      </div>
      <hr />
      <Routes>
        <Route path="/home" element={<Cards characters={characters.characters} onClose = {onClose} />} />
        <Route path="/" element={<Cards characters={characters.characters} onClose = {onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>  
    </div>
  )
}

export default App

