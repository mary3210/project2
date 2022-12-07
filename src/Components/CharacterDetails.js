import React from "react";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
            <p>{character.name}</p>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <p>{character.origin?.name}</p>
        </div>
    )

}