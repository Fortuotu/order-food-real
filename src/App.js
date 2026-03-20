import { useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContext } from "./store/CartContext";

const App = () => {
  const [cart, setCart] = useState({meals: []});
  
  return (
    <CartContext.Provider value={[cart, setCart]}>
      <Header></Header>
      <Meals></Meals>
    </CartContext.Provider>
  )
}

export default App;
