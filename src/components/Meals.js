import { useState, useEffect } from "react";
import MealItem from "./MealItem";
import '../index.css'

const Meals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/meals')
            .then(response => response.json())
            .then(data => {
                setMeals(data); 
            });
    }, []);

    return (
        <ul id="meals">
            {meals.map((item) => (
                <MealItem 
                    key={item.id} 
                    meal={item} 
                />
            ))}
        </ul>
    );
}

export default Meals;