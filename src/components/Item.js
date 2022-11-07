import React, { useState } from "react";

function Item({ name, category }) {
 const [inCart, setInCart] = useState(false)
 const liClassName = inCart ? "in-cart" : ""
 const cartButtonText = !inCart ? "Add to Cart" : "Remove from Cart"
  function addHandler() {
    setInCart(!inCart)
    console.log("clicked")

  }
  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addHandler}>{cartButtonText}</button>
    </li>
  );
}

export default Item;
