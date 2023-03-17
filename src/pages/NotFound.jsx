import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="text-center mt-5">
        <h2>404 La ruta no existe</h2>
        <Link className="link" to="/">
          Volver a home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
