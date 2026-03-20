import { useContext, useReducer } from 'react';
import '../index.css'
import Button from './UI/Button';
import { CartContext } from '../store/CartContext';

function cartReducerFn(state, action) {
    if (action.type === 'UPDATE_CART') {
        const [,, setCart] = state;
        setCart(action.payload);
        return [action.payload, state[1], setCart];
    }
    return state;
}

const MealItem = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const [reducerState, dispatch] = useReducer(cartReducerFn, [cart, props.meal, setCart]);

    function onClick() {
        const existingMealIndex = cart.meals.findIndex(item => item.name === props.meal.name);
        let updatedMeals = [...cart.meals];

        if (existingMealIndex > -1) {
            const updatedItem = {
                ...updatedMeals[existingMealIndex],
                quantity: updatedMeals[existingMealIndex].quantity + 1
            };
            updatedMeals[existingMealIndex] = updatedItem;
        } else {
            updatedMeals.push({ ...props.meal, quantity: 1 });
        }

        const newCart = { ...cart, meals: updatedMeals };
        
        dispatch({ type: 'UPDATE_CART', payload: newCart });
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