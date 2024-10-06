// Navigation.js
import { Link } from 'react-router-dom';
import './Navigation.css'; // Importă fișierul CSS

function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/">Profile</Link>
      <Link to="/statistics">Statistics</Link>
      <Link to="/friends">Friends</Link>
      <Link to="/transactions">Transactions</Link>
    </nav>
  );
}

export default Navigation;
