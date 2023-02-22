import CardWidget from "../components/CardWidgets/CardWidget";
 import React from 'react'
 
 const NavBar = () => {
   return (
     <div className="container">
        <ul>
            <li>
                <a className="nav_link"><CardWidget /></a>
            </li>
        </ul>
     </div>
   )
 }
 
 export default NavBar