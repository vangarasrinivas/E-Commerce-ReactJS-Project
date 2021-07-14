import React from 'react';
import './style.css'
export default function HeadComponent(props){
    const {countCartItems}=props;
    return(
        <header className="row block center">
            <div>
                <a href="#/">
                    <h2>Small ShoppingCart</h2>
                </a>
            </div>
            <div>
                <a href="#/cart">
                    cart {' '}
                    {
                        countCartItems ? (
                            <button className="badge">{countCartItems}</button>
                        ):('')
                    }
                </a>
                <a href="#/signin">SignIn</a>
            </div>
        </header>
    )
}