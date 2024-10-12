import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Assets/dropdown_icon.png";
import ItemComponent from "../Item/ItemComponent";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  
  
  const filteredProducts = all_product.filter(item => item.category.toLowerCase() === props.category.toLowerCase());

  console.log('All Products:', all_product);
  console.log('Filtered Products:', filteredProducts);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="banner" />

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{filteredProducts.length}</span> out of {all_product.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="Sort Icon" />
        </div>
      </div>

      <div className="shopcategory-products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ItemComponent
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
      <div className="shopcategrory-loadmore">
        Explore more
      </div>
    </div>
  );
};

export default ShopCategory;
