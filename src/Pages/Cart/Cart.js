import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const { cart } = props;

    let totalQuantity = 0;
    let total = 0;
    for (const service of cart) {
        if (!service.quantity) {
            service.quantity = 1;
        }
        total = total + service.price * service.quantity;
        totalQuantity = totalQuantity + service.quantity;
    }

    return (
        <div className="pb-4">
            <h3 className="my-5">Orders Summary</h3>
            <h4>Items : {totalQuantity}</h4>
            <hr />
            <h4>Total : {total}$</h4>
            <Link to="/my-order" className="btn btn-success">Review My Orders</Link>
        </div>
    );
};

export default Cart;