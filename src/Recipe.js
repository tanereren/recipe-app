import React from 'react';
import './App.css';

const Recipe = ({title, calories, image, recipe, source}) => {
    return(
        <div className="recipe">
            <h1>{title}</h1>
            <img src={image} alt=""/>
            <p>{calories}</p>
            <p>Full Recipe: <a href={recipe}>{source}</a></p>
        </div>
    )
}

export default Recipe;