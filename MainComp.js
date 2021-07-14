import React from 'react';
import './style.css'
import Product from './product'



export default function MainComponent(props){

    const {products, onAdd}=props;
    return(<main className="block col-2">
            <h2>Products</h2>
                <div className="row">
                    {products.map((product) => {
                        
                        return <Product key={product.id} product={product} onAdd={onAdd} />

                    })}

                </div>    

            </main>

    )
}









