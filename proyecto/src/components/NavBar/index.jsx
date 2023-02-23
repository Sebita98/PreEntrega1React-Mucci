import React from 'react'
import CartWidget from '../CartWIdget'

const NavBar = () => {
    return (
        <div className='container'>
            <nav className='nav'>
                <ul className='nav_list'>
                    <li>
                        <a className='nav_link' href=""></a>
                    </li>
                    <li>
                        <a className='nav_link' href=""></a>
                    </li>
                    <li>
                        <a className='nav_link' href="">
                            <CartWidget />
                        </a>
                    </li>
                </ul>

            </nav>
        </div>
    )
}

export default NavBar