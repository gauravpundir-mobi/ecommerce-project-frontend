import React, { useContext, useState } from 'react';
import './Dashboard.css';
import { Context } from '../App';


function Dashboard() {

    const [quantity, setQuantity] = useContext(Context);

    function quantityIncrease(){
        setQuantity(quantity+1);
    }

    function quantityDecrease(){
        if(quantity>1){
            setQuantity(quantity-1);
        }
    }

    function addToCart(){
        setQuantity(quantity+1);
    }

    const data = [
        {
            id:"first",
            name: 'Product 1',
            description: "This is a product for winter season. It is very comfortable and comes with an excellent design in different sizes",
            image:"winter.jpg"
        },
        {
            id:"second",
            name: 'Product 2',
            description: 'This is a product for summmer season. It is has latest design and trending these days. Get many offers on this product',
            image:"summer.jpg"
        }
    ];

    return (
        <>
            <div className="container-xxl">
                {
                    data.map(data => {
                        return (
                            <div className="card">
                                <img className="card-img-top" src={data.image} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{data.name}</h5>
                                    <p className="card-text">{data.description}</p>
                                    <div className="quantity-div">
                                        <input type="button" id = {data.id+"minus"} className="quantity btn-primary" value="-" onClick={quantityDecrease}/>
                                        <input type="button" id = {data.id} className="quantity" value={quantity}/>
                                        <input type="button" id = {data.id+"plus"} className="quantity btn-primary" value="+" onClick={quantityIncrease}/>
                                    </div>
                                    <div className='rupees'>
                                        <h5>Price</h5><span><h5><i>&#8377;</i>1000/-</h5></span>
                                    </div>
                                    <div>
                                        <button className="add-to-cart btn btn-primary" onClick={addToCart}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Dashboard;