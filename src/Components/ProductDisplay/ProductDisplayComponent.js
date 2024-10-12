import React, {useContext} from "react";
import "./ProductDisplayStyles.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../Context/ShopContext";

const ProductDisplayComponent = (props) => {
  const { product } = props;
  const {addToCart}= useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="Product thumbnail" />
          <img src={product.image} alt="Product thumbnail" />
          <img src={product.image} alt="Product thumbnail" />
          <img src={product.image} alt="Product thumbnail" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="Main product" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="display-right-star">
          <img src={star_icon} alt="Star icon" />
          <img src={star_icon} alt="Star icon" />
          <img src={star_icon} alt="Star icon" />
          <img src={star_icon} alt="Star icon" />
          <img src={star_dull_icon} alt="Dull star icon" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
              ${product.new_price}
            </div>
        </div>
        <div className="productdisplay-right-description">
          <p>Discover unparalleled comfort and style with our premium product. Crafted with high-quality materials, this item is designed to elevate your everyday experience. Whether you're dressing up for a special occasion or seeking casual elegance, our versatile design ensures you'll look and feel your best. Perfect for any season, this product is a must-have addition to your wardrobe.</p>
        </div>
        <div className="productdisplay-right-size">
          <h2>Select Size</h2>
          <div className="productdisplay-right-size-options">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-rightcategory">
          <span>Category:</span> Women, T-Shirt, Crop-Top
        </p>
        <p className="productdisplay-rightcategory">
          <span>Tags:</span> Modern, Latest
        </p> 
      </div>
    </div>
  );
};

export default ProductDisplayComponent;
