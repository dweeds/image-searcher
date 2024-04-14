import { useState } from "react";
import './SearchBar.css';

function SearchBar ({ onSubmit }) {
    const [ term, getTerm ] = useState ('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(term);
    };

    const handleChange = (event) => {
        getTerm(event.target.value);
    };

    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Image Searcher Online</label>
                <input onChange={handleChange} placeholder="Search For Images" />
                <button value={term} onClick={handleFormSubmit}>Search</button> 
            </form>
       
        </div>
    );
}

export default SearchBar;