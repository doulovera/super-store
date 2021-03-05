import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'
import logo from '../assets/SuperStore.png'

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

          <div className="container">
            <Link to="/" className="navbar-brand text-uppercase"><img src={logo} width="auto" height="30" alt=""/></Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            
              <div className="navbar-nav ml-auto">
                <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>
                <NavLink to="/deals" activeClassName="active" className="nav-link">Deals</NavLink>
                <NavLink to="/cart" activeClassName="active" className="nav-link">Cart<FaShoppingCart /></NavLink>
              </div>
            
            </div>
          </div>

        </nav>        
    )
}

export default Nav
