import React from "react";

const Navbar = () => {
  return (
    <header className="app-header">
      <p className="nombre-usuario">
        Hello, <span>Ramiro</span>
      </p>
      <nav className="nav-principal">
        <a href="/">Logout</a>
      </nav>
    </header>
  );
};

export default Navbar;
