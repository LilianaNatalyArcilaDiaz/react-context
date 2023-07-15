import React from "react";
/*name: es una propiedad*/
const user = { name: "Liliana " };
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark mb-4">
        <span className="navbar-brand">
          <h2> {user ? `Hola ${user.name}` : "Bienvenido"}</h2>
        </span>
        <button>Cerrar sesión</button>
      </nav>
    </div>
  );
};
