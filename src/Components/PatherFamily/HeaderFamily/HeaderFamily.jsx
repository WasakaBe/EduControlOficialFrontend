// HeaderFamily.jsx

import React, { useState, useEffect } from 'react';
import './HeaderFamily.css';
import { Link } from 'react-router-dom';
import { exampleG2 } from '../../../Image';
import axios from 'axios';
import { Api } from '../../../Constants';

const HeaderFamily = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    axios.get(`${Api}users/view`)
      .then(response => {
        setUsers(response.data.users);
        setFilteredUsers(response.data.users); // Inicializa los resultados filtrados con todos los usuarios
      })
      .catch(error => {
        console.error('Error al obtener los usuarios:', error);
      });
  }, []);

  useEffect(() => {
    const filteredResults = users.filter(user =>
      user.name_users.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
    setFilteredUsers(filteredResults);
  }, [searchTerm, users]);

  return (
    <div className='container'>
      <button className='add-student-button'>Agregar Nuevo Alumno</button>

      <div className='search-container'>
        <input
          type='text'
          placeholder='Ingrese solo el nombre que desea buscar... ejemplo : Carlos'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      
      </div>

      <div className='carousel-container'>
        <div className='image-container'>
          {filteredUsers.map(user => (
            <div
              key={user.id_users}
              className='family-img'
              onMouseEnter={() => setShowDetails(true)}
              onMouseLeave={() => setShowDetails(false)}
            >
              <img src={exampleG2} alt='imagen' />
              <div className={`image-details ${showDetails ? 'visible' : ''}`}>
                <div className='details-content'>
                  <h3>Nombre:</h3>
                  <span>{user.name_users}</span>
                  <h3>Apellidos:</h3>
                  <span>{`${user.app_users} ${user.apm_users}`}</span>
                  <Link to='/DatesAlumn'>
                    <button className='view-more-button'>Ver más</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderFamily;
