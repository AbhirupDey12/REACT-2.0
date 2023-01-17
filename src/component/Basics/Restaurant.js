import React, { useState } from 'react';
import './style.css';
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [ ...new Set(Menu.map((currElem) => { return currElem.category; })) , 'All' ] ;

const Restaurant = () => {

     // UseState Hook --> This particular state is basically used for holding the data or basically used for managing the data (used for managing the data )
     // menuData is the initial data (current state)
     // setMenuData is the updated data
     // Menu data is the initial data that we pass for doing our respective actions(It has it's importance in the first pass for getting and holding    the        data and then this same data gets coppied in the variable with name menuData)
     // const [menuData, setMenuData] = React.useState(Menu);

     const [menuData, setMenuData] = useState(Menu);
     const [menuList , setMenuList] = useState(uniqueList);

     const filterItem = (category) => {

          if(category === 'All') {
               setMenuData(Menu);
               return ;
          }

          const upDatedList = Menu.filter((currElem) => {
               return currElem.category === category;
          })
          setMenuData(upDatedList);

     }

     return (
          <>
               <Navbar filterItem = {filterItem} menuList = {menuList} />
               <MenuCard menuData={menuData} />
          </>
     )
}

export default Restaurant;
