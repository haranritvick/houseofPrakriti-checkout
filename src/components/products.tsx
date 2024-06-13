"use client"

import React, { useState, useEffect } from 'react'
const axios = require('axios').default

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                const data = response.data;
                console.log(data);
                setProducts(data);
            } catch (error) {
                console.log(error);         
            }            
        };
    fetchData()
    },[])


    return (
        <div>
            <h2>No. of products: {products.length}</h2>
            {products?.map((product: any)=> (
                <div key={product.id}>
                    <h4>{product.title}</h4>
                </div>
            ))}
        </div>
    );
}



export default Products