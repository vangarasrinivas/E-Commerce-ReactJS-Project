import React from 'react';


import HeadComponent from './HeadComp'
import MainComponent from './MainComp'
import BasketComponent from './BasketComp'
import './style.css'
import Data from './Data'


function SmallCartIndex(){
    const {products}=Data;
    const [cartItem, SetcartItem]=React.useState([]);

    const onAdd=(product) => {
        const exist=cartItem.find((x) => x.id === product.id);
        if(exist){
            SetcartItem(
                cartItem.map((x) =>
                x.id === product.id ? {...exist, qty:exist.qty + 1}: x)
            )
            
        }

        else{
            SetcartItem([...cartItem, {...product, qty:1}]);
        }

    }

    const onRemove=(product) =>{
        const exist=cartItem.find((x) => x.id===product.id);
        if(exist.qty===1){
            SetcartItem(cartItem.filter((x)=>x.id !== product.id))
        }
        else{

            SetcartItem(
                cartItem.map((x) =>
                x.id === product.id ? {...exist, qty:exist.qty - 1}: x)
            )

        }
    }

    return(
        <div>
            <HeadComponent countCartItems={cartItem.length} />
            <div className="row">
            <MainComponent onAdd={onAdd} products={products } />
            <BasketComponent onAdd={onAdd} onRemove={onRemove} cartItem={cartItem} />
            </div>
        </div>
    )
}

export default SmallCartIndex





