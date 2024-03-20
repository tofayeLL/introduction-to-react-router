
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
         
            <nav>
               {/*  <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a> */}
               <h1>My website</h1>
               <NavLink to={'/'}>Home</NavLink>
              <Link to='/about'>About</Link>
              <NavLink to={'/contact'}>Contact</NavLink>
               <NavLink to={'/users'}>Users</NavLink>
              <NavLink to={'/posts'}>Posts</NavLink>
             

            </nav>
            
        </div>
    );
};

export default Header;