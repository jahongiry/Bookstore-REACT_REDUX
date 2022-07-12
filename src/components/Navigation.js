import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <header>
      <div>Logo</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
