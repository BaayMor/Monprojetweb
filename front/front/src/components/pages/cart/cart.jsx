import React, { useContext } from 'react'; // <-- Correction: "use" -> "useContext"
import './cart.css';
import { StoreContext } from '../../../context/StoreContext';
import { useNavigate } from 'react-router-dom'; // <-- Ajout de useNavigate

const Cart = () => {
    const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
    const navigate = useNavigate();
    
    return (
        <div className='cart'>
            <div className='cart-items'>
                <div className='cart-items-title'>
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr />
                
                {/* Vérification si food_list existe */}
                {food_list && food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                          <div key={index}> {/* <-- Ajout de key */}
                            <div className='cart-items-title cart-items-item'>
                                <img src={item.image} alt={item.name} />
                                <p>{item.name}</p>
                                <p>${item.price}</p>
                                <p>{cartItems[item._id]}</p>
                                <p>${item.price * cartItems[item._id]}</p>
                                <button className='cross' onClick={() => removeFromCart(item._id)}>X</button>
                            </div>
                            <hr />
                          </div>
                        );
                    }
                    return null;
                })}
                
                {/* Message si panier vide */}
                {(!food_list || Object.keys(cartItems).length === 0) && (
                  <p className='empty-cart'>Your cart is empty</p>
                )}
            </div>
            
            <div className="cart-bottom">
              <div className='cart-total'>
                <h2>Cart Totals</h2>
                <div>
                  <div className='cart-total-details'>
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount ? getTotalCartAmount() : 0}</p> {/* <-- Protection */}
                  </div>
                  <hr />
                  <div className='cart-total-details'>
                    <p>Delivery Fee</p>
                    <p>${getTotalCartAmount()===0 ? 0 : 2}</p>
                  </div>
                  <hr />
                  <div className='cart-total-details'>
                    <b>Total</b>
                    <b>${(getTotalCartAmount ? getTotalCartAmount() : 0) + (getTotalCartAmount()===0 ? 0 : 2)}</b>
                  </div>
                </div>
                <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
              </div>
              
              <div className="cart-promocode">
                <div>
                  <p>If you have a promo code, enter it here</p>
                  <div className="cart-promocode-input">
                    <input type="text" placeholder='Enter promo code' />
                    <button>APPLY</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Cart;