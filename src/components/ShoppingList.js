import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")
   function handleSelect(e) {
    console.log("handleSelect")
    setSelectedCategory(e.target.value)

   }
  //   //const newArray = selectedCategory.filter((category) => {
  //     console.log(category)
  //   }
    //console.log("select changed")
    // //console.log(e.target.value)
    // if (e.target.value === "All"){
    //   setSelectedCategory("All")
    //   console.log(selectedCategory)
    // }
    // else if (e.target.value === "Produce") {
    //   setSelectedCategory((prevCat) => {prevCat = "Produce"
    // console.log(`${prevCat} prevCaT YOUR PRODUCT`)})
    //   console.log("Produce world")
    // }  
    // else if (e.target.value === "Dairy") {
    //   setSelectedCategory((prevCat) => {prevCat = "Dairy"
    // console.log(`${prevCat} prevCaT YOUR PRODUCT`)})
    //   console.log("Dairy world")
    // } 
    // else if (e.target.value === "Dessert") {
    //   setSelectedCategory((prevCat) => {prevCat = "Dessert"
    // console.log(`${prevCat} prevCaT YOUR PRODUCT`)})
    //   console.log("Dessert world")
    // } 
  //}
   const itemList = items.filter((item) => {
     if (selectedCategory === "All") return true
     return item.category === selectedCategory
     } )
    
  // )}}
 {
  return (
  
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleSelect} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
    {itemList.map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
      ))}
    </ul>
    </div>
  );
      }
}

export default ShoppingList;
