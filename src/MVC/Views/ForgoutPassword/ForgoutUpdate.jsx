import React, { useState } from 'react';
import { Footer, Navbar } from '../../../Components/Public';
import { useNavigate, useParams } from 'react-router-dom';
import { Breadcrumbs,Api } from '../../../Constants';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ForgoutUpdate() {
  const { correo } = useParams();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [validPassword, setValidPassword] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
    const isValidPassword = /^(?=.*[A-Za-z0-9\d@$!%*?&]).{8,}$/.test(event.target.value);
    setValidPassword(isValidPassword);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleUpdatePassword = async () => {
    if (!correo) {
      toast.error('Correo no definido. Verifica la proporción de correo.');
      return;
    }

    if (newPassword === confirmPassword && validPassword) {
      try {
        const response = await fetch(`${Api}updates-password`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ correo_users: correo, new_password: newPassword }),
        });

        if (response.ok) {
          toast.success('Contraseña actualizada con éxito.');
          setTimeout(() => {
            setError('');
            navigate('/Login');
          }, 800);
        } else {
          const data = await response.json();
          toast.error(data.message || 'Error al actualizar la contraseña.');
          setSuccessMessage('');
        }
      } catch (error) {
        toast.error('Error de red. Inténtelo nuevamente.');
        setSuccessMessage('');
        setTimeout(() => {
          toast.error('Error de red. Inténtelo nuevamente.');
          navigate('/Error500'); 
        }, 800);
        
      }
    } else {
      toast.error('Las contraseñas no coinciden o no cumplen con los requisitos. Inténtelo nuevamente.');
      setSuccessMessage('');
    }
  };
  return (
    <div>
      <Navbar />
      <div className='flex container mx-auto justify-center'>
        <Breadcrumbs path={'Actualizar Contrasena'} />
      </div>
      <div className='container-forgout'>
        <div className='forgout-form'>
          <h2>Actualizar Contraseña</h2>
          <label>Nueva Contraseña:</label>
          <div className='password-input'>
            <input
              type={showPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={handlePasswordChange}
              style={{ border: validPassword ? '2px solid green' : '2px solid red' }}
            />
            <span
              className='password-icon'
              onClick={togglePasswordVisibility}
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>
          {!validPassword && <p style={{ color: 'red' }}>La contraseña debe tener al menos 8 caracteres y contener letras, números y al menos un carácter especial.</p>}
          <br></br>
          <label>Confirmar Contraseña:</label>
          <div className='password-input'>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span
              className='password-icon'
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? '🙈' : '👁️'}
            </span>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
          <button onClick={handleUpdatePassword}>Actualizar Contraseña</button>
        </div>
      </div>
   
      <Footer />
    </div>
  );
}
