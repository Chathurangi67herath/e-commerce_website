import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import SearchBar from '../Searchbar/searchbar';
import ListBar from '../listbar/listbar';


function Navbar(){
    return(
        <>
        <div className='navbar'>

<SearchBar></SearchBar>
            <div className='name'>Chathu Shopping</div>
            <div className='links'>
               
                <Link to="/">Shop</Link>
                <Link to="/card"><FaShoppingCart size={32} /> </Link>
                <Link to="/profile"><BsFillPersonFill  size={32} /></Link>
            </div>
         </div>
         <ListBar></ListBar>
</>
        
    );
}
 
export default Navbar;
