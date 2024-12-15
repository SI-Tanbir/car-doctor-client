import React, { useEffect, useState } from 'react';
import productsData from './products.json'; // Import JSON directly

const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(productsData); // Set data from the imported JSON
    }, []);

    return (
        <div>
            <h1>Products List</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px',justifyContent:'center' }}>
                {data.map((product, index) => (
                  <div key={index}  className="card card-compact bg-base-100 w-96 shadow-xl">
                  <figure>
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <h2 className="card-title">{product.price}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <p >{product.rating}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Products;

