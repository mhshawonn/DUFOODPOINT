import React, { useContext, useState } from 'react'
import './FoodItem.css'
import {assets} from '../../assets/food/assets/frontend_assets/assets'
import { StoreContext } from '../../context/storeContext'

function FoodItem({ id, name, price, description, image }) {

  const [count,setCount] = useState(0)
  const {cartItem, addTocart, removeFromCart } = useContext(StoreContext)


  return (
    <div className="food-item">
      <div className="food-item-image">
        <img src={image} alt={name} />
             
      </div>
      <div className="food-item-info">
        <h3 className="food-item-name">{name}</h3>
        <img className="food-item-rating" src={assets.rating_starts} alt="Rating" />
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
        <div>
          {!cartItem[id] ? (
        <button className="add-to-cart-btn" onClick={()=> addTocart(id)}>Add to Cart</button>
         ):(
          <div className="quantity-controls">
                    <button className="quantity-btn" onClick={() => addTocart(id)}>
                      <img src={assets.add_icon_green} alt="Increase" />
                    </button>
                    <p className="quantity-count">{count}</p>
                    <button className="quantity-btn" onClick={() => removeFromCart(id)}>
                      <img src={assets.remove_icon_red} alt="Decrease" />
                    </button>
                  </div>
         )
         }
        </div>
      </div>
    </div>
  );
}


export default FoodItem
