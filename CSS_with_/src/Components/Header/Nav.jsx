import React from 'react'
import style from './Nav.module.css'

const Nav = () => {
  return (
    <div className={style.nav_container}>
        
            <h1>Logo</h1>
       

        <div className={style.icon}>
            <h3 className="item1">Home</h3>
        <h3 className="item2">About</h3>
        <h3 className="item3">Services</h3>
        <h3 className="item4">Contact</h3>
        <h3 className="item5">Login</h3>
        </div>
        
    </div>
  )
}

export default Nav