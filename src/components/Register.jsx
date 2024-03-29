import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [clave, setClave] = useState('');
  const [email, setEmail] = useState('');

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleApellidoChange = (e) => {
    setApellido(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleClaveChange = (e) => {
    setClave(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/usuarios/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nombre, apellido, clave, email })
    });
    if (response.ok) {
      alert('Cuenta creada!');
      navigate('/login');
    } else {
      alert('Error al crear la cuenta');
    }
  };

  return (
    <div className="container text-white border-0 rounded align-content-lg-center justify-content-center p-5 ">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group-row">
          <div className="form-group col-md-6">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" className="form-control" id="nombre" name="nombre" value={nombre} onChange={handleNombreChange} placeholder="Ana" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="apellido">Apellido:</label>
            <input type="text" className="form-control" id="apellido" name="apellido" value={apellido} onChange={handleApellidoChange} placeholder="Suarez" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="email">Email:</label>
            <input type="text" className="form-control" id="email" name="email" value={email} onChange={handleEmailChange} placeholder="ejemplo@ejemplo.com" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="clave">Clave:</label>
            <input type="password" className="form-control" id="clave" name="clave" value={clave} onChange={handleClaveChange} placeholder="Ingresa tu contraseña" />
          </div>
        </div>
        <button type="submit" className="btn">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
