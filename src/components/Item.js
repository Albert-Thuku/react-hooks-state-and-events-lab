import React from "react";
import { useState } from "react";

function Item({ name, category }) {

  const [addItem, setaddItem] = useState(false)

  function addToCart(e){
    e.preventDefault();
    setaddItem(!addItem)

  }

  return (
    <li className={addItem? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className="add">{addItem? 'Remove From Cart':'Add to Cart'}</button>
    </li>
  );
}

export default Item;
