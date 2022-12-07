import './App.css';
import React from "react";
import CharacterImages from './Components/CharacterImages';
import CharacterDetails from './Components/CharacterDetails';
import CharacterFooter from './Components/CharacterFooter';
import CharacterNavbar from './Components/CharacterNavbar'
import CharacterSearch from './Components/CharacterSearch'
import {Route, Routes} from "react-router-dom";
import ReactDom from 'react-dom'

function App() {
  return (
    <>
    <div className="App">
      <header>
        <CharacterSearch />
        <CharacterNavbar />
      {/* <h1>Rick and Morty App</h1> */}
      </header>
    <main>
      <Routes>
        <Route path="/" element= {<CharacterImages />}/>
        <Route path="/details/:id" element= {<CharacterDetails />}/>
      </Routes>
      
    </main>
    <footer>
    
    </footer>

    </div>
    </>
  );
}

export default App;
