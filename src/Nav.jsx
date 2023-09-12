import {} from 'react'
import { NavLink } from 'react-router-dom'
import './App.css';

function Nav() {
  return (
    <nav className="nav">
      <NavLink className="nav-link" to="/">Home</NavLink>
      <NavLink className="nav-link" to="/Produtos">Produtos</NavLink>
      <NavLink className="nav-link" to="/Sobre">Sobre</NavLink>
    </nav>
  );
}

export default Nav;
