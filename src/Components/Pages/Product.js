import React,{useContext} from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCrumsComponent from '../BreadCrums/BreadCrumsComponent';
import ProductDisplayComponent from '../ProductDisplay/ProductDisplayComponent';
import RelatedProductsComponent from '../RelatedProducts/RelatedProductsComponent';


const Product =()=>{
    const{all_product}= useContext(ShopContext);
    const{productId}=useParams();
    const product= all_product.find((e)=>e.id===Number(productId))
    return(
        <div>
            <BreadCrumsComponent product={product}/>
            <ProductDisplayComponent product={product}/>
            <RelatedProductsComponent/>
            
        </div>
    )
}
export default Product;