import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to={'/root'}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              HomePage
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/root/products'}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
