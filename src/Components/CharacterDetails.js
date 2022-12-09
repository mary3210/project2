import React from "react";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CharacterFooter from "./CharacterFooter";

export default function CharacterDetails(){
    const {id} = useParams()
    const url =`https://rickandmortyapi.com/api/character/${id}`
    const [character, setCharacter] = useState({})
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((json) => {
            setCharacter(json);
        })
        .catch(console.err);
    },[]);
    
    return (
        <div className="detailsContainer">
            <img src={character.image} alt={character.name}/>
            <p>Hello, my name is {character.name}. I am currenltly {character.status}. I am a {character.gender} {character.species}. I am from planet {character.origin?.name}.</p>
            <footer>
            <CharacterFooter />
            </footer>
        </div>
    )

}