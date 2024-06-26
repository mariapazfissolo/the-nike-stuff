import './navbar.css'
import CartWidget from '../cartWidget/CartWidget';
import {NavLink} from 'react-router-dom';

function Navbar () {
    return(
        <nav className='navContainer'>
            <NavLink className='logo' to='/'>The Nike Stuff</NavLink>
            <div className='linksContainer'>
                <NavLink className='link' to='/categories/Hombre'>Hombre </NavLink>
                <NavLink className='link' to='/categories/Mujer'>Mujer </NavLink>
                <NavLink className='link' to='/categories/Oportunidades'>Oportunidades</NavLink>
            </div>
            <NavLink to='/cart' >
                 <CartWidget counter={15}/>
            </NavLink>
         
        </nav>  
    )
}

export default Navbar;