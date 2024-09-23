import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const SuperCoin = () => {

    const [superCoins, SetSuperCoins] = useState(0);
    const cartItems  = useSelector(state => state.cart.cartItems);
    const totalAmount = cartItems.reduce((total, item) => total + item.price*item.quantity, 0);

    useEffect(() => {
        switch(true) {
            case (totalAmount < 100):
                SetSuperCoins(0);
                break;
            case (totalAmount < 200):
                SetSuperCoins(10);
                break;
            case (totalAmount < 300):
                SetSuperCoins(20);
                break;
            case (totalAmount >= 300):
                SetSuperCoins(30);
                break;
            default:
                SetSuperCoins(0);

        }
    }, [totalAmount]);

    return (
        <>
            <div className="super-coins" style={{textAlign:'center'}}>
                <h2 className="super-coins-title">Super Coins</h2>
                <p className="super-coins-info">You will earn {superCoins} super coins with this purchase.</p>
            </div>
        </>
    );

};

export default SuperCoin;