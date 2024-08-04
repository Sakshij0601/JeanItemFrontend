import { DiTravis } from 'react-icons/di';
import './Header.css';
import {Link} from 'react-router-dom';
export default function Header()   {
        

             
        return (
            <nav className="navbar">
            <div className="logo">JeanStation</div>
           
            
            <ul className="nav-items">
            <li className="dropdown">
          <a href="#" className="dropbtn">Search Item</a>
          <div className="dropdown-content">
            <Link to="/search-item/itemcode">By Item Code</Link>
            <Link to="/search-item/itemname">By Item Name</Link>
            <Link to="/search-item/price">By Price</Link>
            <Link to="/search-item/storeid">By Store ID</Link>
          </div>
        </li>
            
                <li><a href='/add-item'>Add Item</a></li>
                <li><a href='/view-item'>View Item</a></li>
                
                <li><a href=''>View Orders</a></li>    
            </ul>

        </nav>
            
            );
    }