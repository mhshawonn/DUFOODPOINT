import React, { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import Header from './component/Header/Header'
import ExploreMenu from './component/ExploreMenu/ExploreMenu'
import FoodDisplay from './component/FoodDisplay/FoodDisplay'

function Home() {
    const [category, setCategory] = useState('ALL')
  return (

    <div className='app'> 
     
     
     
    
      <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
      <FoodDisplay category={category}>  </FoodDisplay>
      

    </div>
  )
}

export default Home
