import { createContext } from "react";

const CartContext = createContext({
    meals: [],
});

function addMeal(cart, meal) {
    return { meals: [ ...cart.meals, meal ] };
}

export { CartContext, addMeal };