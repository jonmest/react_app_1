import React   from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Navbar = ({icon, title}) => {
        return (

            <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
        <span className="title">GitHubHub</span>
    </a>

  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <Link to='/' className="navbar-item   has-text-black">
        Home
      </Link>

      <Link to='/about' className="navbar-item  has-text-black">
        About
      </Link>

        </div>
      </div>
      <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a href="https://www.linkedin.com/in/jon-mester/" className="button is-primary">
            <strong>Hire me while I'm available!</strong>
          </a>
          <a href="https://github.com/jonmest" className="button is-light">
            Visit My GitHub
          </a>
        </div>
      </div>
    </div>
</nav>            
        )

}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
