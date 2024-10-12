import React from 'react';
import './RelatedProductsStyles.css';
import data_product from '../Assets/data'; // Ensure this path is correct
import ItemComponent from '../Item/ItemComponent';

const RelatedProductsComponent = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className='relatedproducts-item'>
        {data_product.map((item,i) => { 
          return (
            <ItemComponent
              key={i} 
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}  
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProductsComponent;
