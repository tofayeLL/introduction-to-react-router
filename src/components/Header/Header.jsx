
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
         
            <nav>
               {/*  <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a> */}
               <h1>My website</h1>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to={'/contact'}>Contact</Link>
              <Link to={'/users'}>Users</Link>

            </nav>
            
        </div>
    );
};

export default Header;