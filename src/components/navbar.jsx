import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar(){
    return(
        <div className='navbar'>
            <div className='links'>
                <Link to="/">Shop</Link>
                <Link to="/card"><FaShoppingCart size={32} /> </Link>
            </div>
         </div>
    );
}
 
export default Navbar;
