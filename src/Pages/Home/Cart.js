import React from 'react';

const Cart = ({ cart }) => {
    console.log(cart.length);
    return (
        <div>
            <h3>Order Summery</h3>
            <p>Selected Items:</p>
            <p>Totall Amount:</p>
        </div>
    );
};

export default Cart;