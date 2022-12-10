import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import './CharacterSearch.css'

export default function CharacterSearch() {
  const [searchBarInput, setSearchBarInput] = useState([]);
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((res) => res.json())
      .then((json) => {
        setData(json.results);
      })
      .catch(console.error);
  }, []);
  const handleChange = (e) => {
    setSearchBarInput(e.target.value);
  };

  return (
    <div className="container">

      <div className="searchBar">
      <input className="text"
        type="text"
        placeholder="Search Character Here"
        onChange={handleChange}
        value={searchBarInput}
      />
      </div>
    <div className="testDiv"> 
      {data
        .filter((value) => {
          if (searchBarInput === "") {
            return value;
          } else if (value.name.includes(searchBarInput)) {
            return value;
          }
        })
        .map((value, index) => {
          return (
            <Link to={`/details/${value.id}`} key={value.id}>
              
               <div className="characterName" > <p>{value.name}</p></div> 
                <div className="cardClass">
                <div id="imageClass">
                <img src={value.image} />
                </div>
              </div>
       
            </Link>
          );
        })}</div>
    </div>
  );
}
