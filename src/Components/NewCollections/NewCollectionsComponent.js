import React from 'react'
import './NewCollectionsStyles.css'
import new_collections from '../Assets/new_collections'
import ItemComponent from '../Item/ItemComponent'; 
const NewCollectionsComponent =()=>{
    return(
        <div className="newCollections">
            <h1>NEW COLLECTIONS</h1>
            <hr/>
            <div className="collections">
                {new_collections.map((item,i)=>(
                     <ItemComponent
                     key={i} 
                     id={item.id}
                     name={item.name}
                     image={item.image}
                     new_price={item.new_price}  
                     old_price={item.old_price} 
                 />
                ))}
            </div>
        </div>
    )
}
export default NewCollectionsComponent;