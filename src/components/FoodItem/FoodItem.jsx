import React, { useContext, useEffect, useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';


const FoodItem = ( {id , name ,image, price, description, calory}) => {

    const {addTocart,removeItem, cartItems}  =useContext(StoreContext);
    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])
  return (
    <div className='foodItem'>
        <div className="fooditemImg">
                 <img src={image} alt="" className='fooditemImgimg' />

                 {!cartItems[id] ? <img onClick={()=>addTocart(id)} className='AddItem' src={assets.add_icon_white} />:
                 <div className='AddremoveItem'> 
                    <img onClick={()=>removeItem(id)} src={assets.remove_icon_red} className='removeitem' alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addTocart(id)}  className='AddItem2' src={assets.add_icon_green} />
                 </div>
                 }
        </div>

        <div className="fooditemINFO">
            <div className="fooditemRating">
                <p className='foodname'>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="description">{description}</p>
            <div className="priceAndcolori">
                <p className='foodprice'> ${price} Tk </p>
                <p>{calory} KC</p>
            </div>
        </div>
    </div>
  )
}
  
export default FoodItem
