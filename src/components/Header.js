import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import { useContext } from 'react';
import { CartContext } from '../store/CartContext';

const Header = () => {
    let [cart, setCart] = useContext(CartContext);

    const totalCartItems = cart.meals.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <Button onClick={() => console.log("cart click")} textOnly={true} text={`Cart ${totalCartItems}`}></Button>
            </nav>
        </header>
    )
}

export default Header