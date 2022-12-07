import React from "react";
import { useState, useEffect } from 'react'
import { useParams } from "react-router";

export default function CharacterSearch(){
    const [searchBar, setSearchBar] = useState([])
    const {id} = useParams()
    const Characters = `https://rickandmortyapi.com/api/character/`
    console.log(typeof(Characters))
    console.log(Characters)
    const handleChange = (e) => {
        e.preventDefault();
        setSearchBar(e.target.value);
    }
    
    if (searchBar.length > 0){
        searchBar.filter((Characters) => {
            return Characters.id.match(searchBar)
        })
    }
  
    return (
        <div>
              <input
   type="text"
   placeholder="Search Character here"
   onChange={handleChange}
   value={searchBar} />
        </div>
    )
}