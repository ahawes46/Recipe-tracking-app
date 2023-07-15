import React, { useState } from "react";

function RecipeCreate({addRecipes}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  
  const initForm={
    name:"",
    cuisine: "" ,
    photo:"",
    ingredients:"",
    preparation:""
  };
  
  const [formData,setFormData]=useState(initForm);
  
  const handleChange=({target})=>{
    setFormData({
      ...formData,
      [target.name]:target.value,
    });
  };
  
  const handleSubmit=(event)=>{
    event.preventDefault();
    addRecipes(formData);
    setFormData(initForm);
  };
  
  
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            
            <td>
        <input type="text" name="name" onChange={handleChange} value={formData.name}/>
      </td>
         
              <td>
        <input type="text" name="cuisine" onChange={handleChange} value={formData.cuisine}/>
      </td>
            
            <td>
        <input type="url" name="photo" onChange={handleChange} value={formData.photo} />
      </td>
            
             <td>
        <textarea name="ingredients" onChange={handleChange} value={formData.ingredients}/>
      </td>
            
             <td>
        <textarea name="preparation" onChange={handleChange} value={formData.preparation}/>
      </td>
     
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
