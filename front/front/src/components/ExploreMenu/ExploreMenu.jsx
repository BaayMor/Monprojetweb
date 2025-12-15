import React from 'react'
import './exploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odit aut cupiditate harum dolorum numquam, veritatis nostrum perspiciatis nesciunt cum animi quas voluptatum molestias debitis, adipisci reiciendis qui fuga deleniti!</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index)=>{
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-item">
              <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
              <h3>{item.menu_name}</h3>
              
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
