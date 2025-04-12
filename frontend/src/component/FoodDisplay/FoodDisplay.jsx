import React, { useContext } from 'react'
import './FoodDisplay.css'
import { food_list } from '../../assets/food/assets/frontend_assets/assets'
import { StoreContext } from '../../context/storeContext'
import FoodItem from '../FoodItem/FoodItem'



function FoodDisplay() {
    const { food_list } = useContext(StoreContext);

    return (
      <div className="food-display">
        <h2>Top Dishes Near You</h2>
        <div className="food-display-grid">
          {food_list.map((item, index) => (
            <FoodItem 
              key={index} 
              id={item._id} 
              name={item.name} 
              price={item.price} 
              description={item.description} 
              image={item.image} 
            />
          ))}
        </div>
      </div>
    );
  }
  export default FoodDisplay

