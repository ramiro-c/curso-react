import React from 'react';
import { string } from 'prop-types';

const Header = ({ titulo }) => (
  <nav>
    <div className="nav-wwrapper light-blue darken-2">
      <a href="#!" className="brand-logo">{titulo}</a>
    </div>
  </nav>
);

Header.propTypes = {
  titulo: string.isRequired
}

export default Header;