import React from "react";
import { useState, useEffect } from 'react'
import { useParams } from "react-router";

export default function CharacterSearch(){
    const [searchBarInput, setSearchBarInput] = useState([])
    const [data, setData] = useState([])
    const {id} = useParams()
    useEffect(() => {
        
        fetch("https://rickandmortyapi.com/api/character/")
        .then((res) => res.json())
        .then((json) => {
            setData(json.results);
            
        })
        .catch(console.error)
    }, []);
    
    
    const handleChange = (e) => {
        e.preventDefault();
        setSearchBarInput(e.target.value);
    }
    
    // if (searchBarInput.length > 0){
    //     data.filter((Character) => {
    //         return data.name.match(searchBarInput)
    //     })
    // }
    
        data.filter(post => {
          if (searchBarInput === '') {
            return post;
          } else if (post.name.includes(data)) {
            return post;
          }
        }).map((post, index) => (
          <div className="box" key={index}>
            <p>{post.name}</p>
            <p>{post.image}</p>
          </div>
        ))
      

    return (

        <div>



              <input
   type="text"
   placeholder="Search Character here"
   onChange={handleChange}
   value={searchBarInput} />
        </div>
    )
}