import React from "react";
import CharacterDetails from "./Components/CharacterDetails";
import CharacterNavbar from "./Components/CharacterNavbar";
import CharacterSearch from "./Components/CharacterSearch";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App" >
        <header>
          <CharacterNavbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<CharacterSearch />} />
            <Route path="/details/:id" element={<CharacterDetails />} />
          </Routes>
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
