import React from "react";
import { useState, useEffect } from 'react'

export default function CharacterSearch(){
    const [searchBar, setSearchBar] = useState("")
    const Characters = "https://rickandmortyapi.com/api/character/"

    const handleChange = (e) => {
        e.preventDefault();
        setSearchBar(e.target.value);
    }
    if (searchBar.length > 0){
        searchBar.filter((characters) => {
            return characters.id.match(searchBar)
        })
    }
    <input
   type="text"
   placeholder="Search Character here"
   onChange={handleChange}
   value={searchBar} />
    return (
        <div>
            
        </div>
    )
}