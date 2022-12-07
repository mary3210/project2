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
            <p>Character details works!</p>
            <img src={character.image} alt={character.name}/>
            <p>Name: {character.name}</p>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin?.name}</p>
            <footer>
            <CharacterFooter />
            </footer>
        </div>
    )

}