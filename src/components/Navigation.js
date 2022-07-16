import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';

function Navigation() {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <div className={classes.logo}>Bookstore CMS</div>
        <nav>
          <ul className={classes.ulContainer}>
            <li>
              <Link className={classes.lists} to="/">
                Books
              </Link>
            </li>
            <li>
              <Link className={classes.lists} to="/categories">
                Categories
              </Link>
            </li>
          </ul>
        </nav>
        <button className={classes.iconButton} type="button">
          <span className={classes.span}>👤</span>
        </button>
      </header>
    </div>
  );
}

export default Navigation;
