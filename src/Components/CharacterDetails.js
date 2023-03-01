import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CharacterFooter from "./CharacterFooter";
import "./CharacterDetails.css";

export default function CharacterDetails() {
  const { id } = useParams();
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const [character, setCharacter] = useState({});
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setCharacter(json);
      })
      .catch(console.err);
  }, []);

  return (
    <div className="detailsContainer">
      <img className="image1" src={character.image} alt={character.name} />
      <p className="detailsParagraph">
        Hello, my name is {character.name}.{" "}
        <p>I am currently {character.status}.</p>
        <p>
          I am a {character.gender} {character.species}.
        </p>{" "}
        I am from planet {character.origin?.name}.
      </p>
      <footer className="characterFooter">
        <CharacterFooter />
      </footer>
    </div>
  );
}
