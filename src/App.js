import React, {useEffect, useState} from "react";
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = "5c391851";
  const APP_KEY = "a28dbbb6278285247a1784b56a52cd0d";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('vegan');
  
  useEffect(() => {
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then(res => res.json())
      .then(data => setRecipes(data.hits))
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }

  return(
    <div className="App">
      <h1>Recipe Search:</h1>
      
      <form onSubmit={getSearch}className="search-form">
        <input
          placeholder={query}
          className="search-bar" 
          type="text" 
          value={search} 
          onChange={updateSearch} 
        />
        
        <button 
          className="search-button" 
          type="submit">
          Search
        </button>
      </form>
      
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.uri}
            title={recipe.recipe.label}
            calories={"Calories: " + Math.floor(recipe.recipe.calories)} 
            image={recipe.recipe.image}
            recipe={recipe.recipe.url}
            source={recipe.recipe.source}
            />
        ))}
      </div>
    </div>
  );
}

export default App;
