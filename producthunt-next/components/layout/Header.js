import React from "react";
import Buscar from "../ui/Buscar";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <p></p>
          <Buscar />
          {/* nav */}
        </div>
        <div>{/* menu de administracion */}</div>
      </div>
    </header>
  );
};

export default Header;
