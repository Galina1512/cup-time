// import { useState } from 'react';
import { useState } from 'react';
import { API_URL } from '../const';
import { useCart } from '../contex/CartContext';

export const CartItem = ({data, quantity}) => {
    const [itemQuantity, setItemQuantity] = useState(data.quantity);
    const {updateQuantity} = useCart();

    const handleDecrease = () => {
        const newQuantity = itemQuantity - 1;
        if (quantity > 1) {
            setItemQuantity(newQuantity);
            updateQuantity(data.id, newQuantity)
        } else {
            updateQuantity(data.id, 0);
            setItemQuantity(newQuantity);
            updateQuantity(data.id, newQuantity)
        }        
    };

    const handleIncrease = () => {
        const newQuantity = itemQuantity + 1;
        setItemQuantity(newQuantity);
        updateQuantity(data.id, newQuantity)
    };



    return (
        <li className='cart-item'>
            <img className='cart-item__image' src={`${API_URL}${data.img}`} alt={data.title} />
            <div className='cart-item__info'>
                <h3 className='cart-item__title'>{data.title}</h3>
                <div className='cart-item__quantity'>
                    <button onClick={handleDecrease} className='cart-item__quantity-button cart-item__quantity-button_minus'> - </button>
                        <input className='cart-item__quantity-input' type='number' value={data.quantity} readOnly/> 
                    <button onClick={handleIncrease} className='cart-item__quantity-button cart-item__quantity-button_plas'> + </button>
                </div>
                <p className='cart-item__price'>{data.price * data.quantity}&nbsp;₽</p>
            </div>
        </li>
    )
}