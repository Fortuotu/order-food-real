import '../index.css'
import Button from './UI/Button';

const MealItem = (props) => {
    return (
        <li className="meal-item">
            <article>
            <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name} />
            <div>
                <h3>{props.meal.name}</h3>
                <p className="meal-item-price">{new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(props.meal.price)}</p>
                <p className="meal-item-description">{props.meal.description}</p>
                <Button onClick={() => console.log("added to cart")} textOnly={false} text="Add to Cart"></Button>
            </div>
            </article>
        </li>
    );
}

export default MealItem