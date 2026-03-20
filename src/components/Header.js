import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import { useContext } from 'react';
import { CartContext } from '../store/CartContext';

const Header = () => {
    let [cart, setCart] = useContext(CartContext);

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <Button onClick={() => console.log("cart click")} textOnly={true} text={`Cart ${cart.meals.length}`}></Button>
            </nav>
        </header>
    )
}

export default Header