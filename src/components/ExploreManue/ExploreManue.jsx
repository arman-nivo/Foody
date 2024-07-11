import React from 'react';
import './ExploreManue.css';
import { menu_list } from '../../assets/assets';

const ExploreManue = ({  catagory, setCatagory}) => {
  return (
    <div className='exploremenu' id='exploremenu'>
        <h1>Explore Our Menu</h1>
        <p className='exploremenutext'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quos esse voluptatibus? Unde, illo corrupti?
        </p>
        <div className='explore_menu_list'>
            {
               menu_list.map((item, index)=>{
                return(
                      <div onClick={()=> setCatagory(prev => prev === item.menu_name ?"All" : item.menu_name)} key={index} className='explore_manu_items'>
                        <img  src={item.menu_image} alt="" />
                        <p className={catagory===item.menu_name ? "active":""}>{item.menu_name}</p>
                      </div>
                )
               })
            }
        </div>
      
    </div>
  )
}

export default ExploreManue
