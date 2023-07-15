import React, { useState } from 'react';


function Recipe({recipe, deleteRecipe}) {
  const url=recipe.photo;
  

    return (
   
    <tr>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td><img src={url}/></td>
        <td>{recipe.ingredients}</td>
        <td>{recipe.preparation}</td>
        <td><button name="delete" onClick={deleteRecipe}>Delete</button></td>
        </tr>
        );
  }


export default Recipe;