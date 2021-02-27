import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

          <div className="container">
            <Link to="/" className="navbar-brand text-uppercase">Super Store</Link>
            <button className="navbar-toggler" type="button">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            
              <div className="navbar-nav ml-auto">
                <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>
                <NavLink to="/deals" activeClassName="active" className="nav-link">Deals</NavLink>
                <NavLink to="/cart" activeClassName="active" className="nav-link">Cart</NavLink>
              </div>
            
            </div>
          </div>

        </nav>        
    )
}

export default Nav
