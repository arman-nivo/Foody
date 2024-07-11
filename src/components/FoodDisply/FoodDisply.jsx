import React, { useContext } from 'react';
import './FoodDisply.css';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisply = ({catagory}) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div className='foodDisplay' id="foodDisplay">
            <h1 className='filterFood'>To Dishes for You <span className={catagory!=="All"? "catagorycolor" : ""}>{catagory}</span></h1>
            <div className="foodDisplay_list">
                {
                
                    food_list.map((item, index) => {
                            if (catagory === "All" || catagory === item.category){
                             return <FoodItem
                            key={index}
                            id={item._id}
                            name={item.name}
                            image={item.image}
                            price={item.price}
                            description={item.description}calory={item.calory} />
                            }

                        } 
                    )

                }
            </div>
        </div>
    );
};

export default FoodDisply;
