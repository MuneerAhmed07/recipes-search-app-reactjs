import './App.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

function App() {

  const [recipes, setRecipes] = useState([]);
  console.log(recipes);

  const API_KEY = "7VzG39Iu5X/LZjmVRe/QyA==72Xm699CH9XrYTk2";
  const API_URL = "https://api.api-ninjas.com/v1/recipe";

  const fetchRecipes = async (query) => {
    try{
      const response = await fetch(`${API_URL}?query=${query}`, {
        method: "GET",
        headers: {"X-Api-Key": API_KEY},
        contentType: "application/json",
      })

      if(!response.ok) {
        throw new Error("Failed to fetch Recipes");
      }

      const data = await response.json();
      setRecipes(data);
    }catch(error) {
      console.error("Error fetching recipes:", error);
    }
  }

  return (
    <div className="App">
      <div className="app-container">
        <h1>Search Recipe App</h1>
        <SearchBar onSearch = {fetchRecipes} />
        <RecipeList recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
