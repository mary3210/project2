import React from "react";
import {useState, useEffect} from "react";


export default function CharacterImages(){
    const [characterImages, setCharacterImages] = useState([]);
    useEffect(() => {
        fetch("https://rickandmortyapi.com/character")
        .then((res) => res.json())
        .then((json) => {
            setCharacterImages(json);
            console.log(setCharacterImages(json))
        })
        .catch(console.error)
    }, [])
    return (
        <section className="container">
            <p>whoo i show up!</p>

        </section>
    )
    
}