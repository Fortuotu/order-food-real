import { useContext, useReducer } from 'react';
import '../index.css'
import Button from './UI/Button';
import { CartContext } from '../store/CartContext';

function cartReducerFn(state, action) {
    const [cart, meal, setCart] = state;

    if (action.type === 'increment') {
        const updatedMeals = [...cart.meals];
        const mealIndex = updatedMeals.findIndex(item => item.name === meal.name);
        
        const updatedMeal = { 
            ...updatedMeals[mealIndex], 
            quantity: updatedMeals[mealIndex].quantity + 1 
        };
        updatedMeals[mealIndex] = updatedMeal;

        const newCart = { ...cart, meals: updatedMeals };

        setCart(newCart); 
        return [newCart, meal, setCart];

    } else if (action.type === 'add_to_cart') {
        const newCart = { 
            ...cart, 
            meals: [...cart.meals, { ...meal, quantity: 1 }] 
        };
        
        setCart(newCart);
        return [newCart, meal, setCart];
    }

    return state;
}

const MealItem = (props) => {
    const [cart, setCart] = useContext(CartContext);

    const [reducerState, dispatch] = useReducer(cartReducerFn, [cart, props.meal, setCart]);

    function onClick() {
        const existingItem = cart.meals.find(value => props.meal.name === value.name);
        
        if (existingItem) {
            dispatch({ type: 'increment' });
        } else {
            dispatch({ type: 'add_to_cart' });
        }
    }

    return (
        <li className="meal-item">
            <article>
                <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name} />
                <div>
                    <h3>{props.meal.name}</h3>
                    <p className="meal-item-price">
                        {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(props.meal.price)}
                    </p>
                    <p className="meal-item-description">{props.meal.description}</p>
                    <Button onClick={onClick} textOnly={false} text="Add to Cart" />
                </div>
            </article>
        </li>
    );
}

export default MealItem;