import React, { useContext } from 'react'; // <-- Ajout de useState
import './fooditem.css';
import { assets } from '../../assets/frontend_assets/assets'; // <-- Correction des parenthèses
import {StoreContext} from '../../context/StoreContext'; // <-- Import de StoreContext
const FoodItem = ({ id, name, price, description, image }) => { // <-- Correction des paramètres
    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext); // <-- Ajout de useContext et StoreContext
    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={image} alt={name} />
                {!cartItems[id] ? 
                    <img 
                        className='add' 
                        onClick={() => addToCart(id)} // <-- Correction de la syntaxe
                        src={assets.add_icon_white} 
                        alt='' 
                    /> 
                    : 
                    <div className='food-item-counter'>
                        <img 
                            onClick={() => removeFromCart(id)} 
                            src={assets.remove_icon_red} 
                            alt='' 
                        />
                        <p>{cartItems[id]}</p>
                        <img 
                            onClick={() => addToCart(id)} 
                            src={assets.add_icon_green} 
                            alt='' 
                        />
                    </div>
                }
            </div>
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className='food-item-description'>{description}</p>
                <p className='food-item-price'>${price}</p> {/* <-- Correction du prix */}
            </div>
        </div>
    );
}

export default FoodItem; // <-- N'oubliez pas d'exporter