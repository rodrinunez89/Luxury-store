import React from 'react';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <div
      
    >
      <img
        src="https://img.freepik.com/vector-gratis/fondo-error-404-diseno-divertido_1167-219.jpg?w=2000"
        alt="error"
        style={{ width: '100%', marginBottom: 0 ,zIndex: 1}}
      />
      <Link type="button" className="btn btn-warning" to={'/'}>
        VOLVER AL HOME
      </Link>
    </div>
  );
};

export default ErrorPage;