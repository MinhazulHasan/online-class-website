import React from 'react';

const Cart = (props) => {
    const { name, price } = props.item;
    const removeToCart = props.removeToCart;
    return (
        <div>
            <li className="selected-list list-group-item d-flex my-1 shadow justify-content-between">
                <span style={{ marginLeft: '6px' }}>{name}</span> <span> ${price}</span>
                <button onClick={() => removeToCart(props.item)} className='delete-btn'> X </button>
            </li>
        </div>
    );
};

export default Cart;