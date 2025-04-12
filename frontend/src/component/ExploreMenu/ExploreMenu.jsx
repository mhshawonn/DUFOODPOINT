import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/food/assets/frontend_assets/assets'

function ExploreMenu({category,setCategory}) {
    return (
      <div className='explore-menu'>
          <h1>Explore Our Menu</h1>
          <p>Choose your favourite items from a variety of delicious options</p>
          <div className="explore-menu-list">
              {menu_list.map((item, index) => (
                  <div key={index} className="explore-menu-list-item"
                  onClick={() => setCategory(prev => prev === item.menu_name ? 'ALL' : item.menu_name)}
                  
                  
                  >
                      <img className={category==item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name} />
                      <p>{item.menu_name}</p>
                  </div>
              ))}
          </div>
      </div>
    );
  }
  
  export default ExploreMenu;
