import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
const [isDark, setIsDark] = useState(false)
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = !isDark ? "App light" : "App dark"
function buttonHandler() {
  setIsDark(!isDark)
}
function darkMode() {
  if(isDark){
    console.log("is Light")
  return ("Light Mode")
}
else {
  console.log("is Dark")
return ("Dark mode")
}
}
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={buttonHandler}>{`${darkMode()}`}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
