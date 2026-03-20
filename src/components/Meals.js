import MealItem from "./MealItem"

const Meals = () => {
    fetch('http://localhost:3001/meals')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
    
    return (
        <ul id="meals">
            { 
                <MealItem meal={{ name: "taco", description: "taco desc", image: "images/beef-tacos.jpg", price: 123}} />
            }
        </ul>
    )
}

export default Meals