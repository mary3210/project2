import './App.css';
import React from "react";
import CharacterImages from './Components/CharacterImages';
import CharacterDetails from './Components/CharacterDetails';
import CharacterFooter from './Components/CharacterFooter'
import {Route, Routes} from "react-router-dom";
import ReactDom from 'react-dom'

function App() {
  return (
    <>
    <div className="App">
      <header>
      <h1>Rick and Morty App</h1>
      </header>
    <main>
      <CharacterImages />
      <CharacterDetails />
      <CharacterFooter />
    </main>

    </div>
    </>
  );
}

export default App;
