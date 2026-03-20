import { useContext } from 'react';
import '../index.css'
import Button from './UI/Button';
import { CartContext, addMeal } from '../store/CartContext';

const MealItem = (props) => {
    let [cart, setCart] = useContext(CartContext);

    return (
        <li className="meal-item">
            <article>
            <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name} />
            <div>
                <h3>{props.meal.name}</h3>
                <p className="meal-item-price">{new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(props.meal.price)}</p>
                <p className="meal-item-description">{props.meal.description}</p>
                <Button onClick={() => setCart(addMeal(cart, props.meal))} textOnly={false} text="Add to Cart"></Button>
            </div>
            </article>
        </li>
    );
}

export default MealItem