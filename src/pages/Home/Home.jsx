import React, { useState } from 'react'
import "./Home.css";
import Header from '../../components/Header/Header';
import ExploreManue from '../../components/ExploreManue/ExploreManue';
import FoodDisply from '../../components/FoodDisply/FoodDisply';

const Home = () => {
    const [catagory, setCatagory] = useState("All");

  return (
    <div>
      <Header></Header>
      <ExploreManue catagory={catagory} setCatagory={setCatagory}></ExploreManue>
 
      <FoodDisply catagory={catagory}  ></FoodDisply>

    </div>
  )
}

export default Home
