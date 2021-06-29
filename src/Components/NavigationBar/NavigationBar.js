import './NavigationBar.css';
import { Link } from 'react-router-dom';

export const NavigationBar = () => {
  return (
    <>
      <header className="header">
        <h2 className="home-text">
          <Link className="link" to="/">
            Teodor Jonsson
          </Link>
        </h2>
        <ul className="nav-list">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};
