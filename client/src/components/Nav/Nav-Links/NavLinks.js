import { Link } from 'react-router-dom';
import './NavLinks.css'

const NavLinks = () => {
    return ( 
            <nav className="nav__bottom__container">
                <div className="bottom__container">
                    <ul className="nav">
                        <li className='nav-link'><Link to="/">Home</Link></li> 
                        <li className='nav-link'><Link to="/shop">Shop</Link> </li>
                        <li className='nav-link'><Link to="/category/men">Menswear</Link></li> 
                        <li className='nav-link'><Link to="/category/women">Womenswear</Link></li> 
                        <li className='nav-link'><Link to="/category/kids">Kidswear</Link></li>
                    </ul>
                </div>
            </nav>
     );
}
 
export default NavLinks;