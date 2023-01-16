import React, { useState } from 'react';
import './style.css';
import Menu from './menuApi';
import MenuCard from './MenuCard';

const uniqueList = [ ...new Set(Menu.map((currElem) => { return currElem.category; })) , "All" ] ;

console.log(uniqueList);

const Restaurant = () => {

     // UseState Hook --> This particular state is basically used for holding the data or basically used for managing the data (used for managing the data )
     // menuData is the initial data (current state)
     // setMenuData is the updated data
     // Menu data is the initial data that we pass for doing our respective actions(It has it's importance in the first pass for getting and holding    the        data and then this same data gets coppied in the variable with name menuData)
     // const [menuData, setMenuData] = React.useState(Menu);

     const [menuData, setMenuData] = useState(Menu);

     const filterItem = (category) => {
          const upDatedList = Menu.filter((currElem) => {
               return currElem.category === category;
          })
          setMenuData(upDatedList);
     }

     return (
          <>
               <nav className='navbar'>
                    <div className='btn-group'>
                         <button className='btn-group__item' onClick={() => filterItem("breakfast")}>Breakfast</button>
                         <button className='btn-group__item' onClick={() => filterItem("lunch")}>Lunch</button>
                         <button className='btn-group__item' onClick={() => filterItem("evening")}>Evening</button>
                         <button className='btn-group__item' onClick={() => filterItem("dinner")}>Dinner</button>
                         <button className='btn-group__item' onClick={() => setMenuData(Menu)}>All</button>
                    </div>
               </nav>
               <MenuCard menuData={menuData} />
          </>
     )
}

export default Restaurant;
