import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return <header className={classes.header}>
    <nav>
      <ul>
        <li id="welcome">
          <NavLink activeClassName={classes.active} to="/welcome">Welcome</NavLink>
        </li>
        <li id="products">
          <NavLink activeClassName={classes.active} to="/products">Products</NavLink>
        </li>
      </ul>
    </nav>
  </header>
};

export default MainHeader;