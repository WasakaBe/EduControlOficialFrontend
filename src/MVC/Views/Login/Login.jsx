// eslint-disable-next-line 
import React, { useState } from 'react';
import './Login.css';
import { Footer, Navbar2 } from '../../../Components/Public';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Breadcrumbs,Api } from '../../../Constants';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [loadingEmail, setLoadingEmail] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [loadingPassword, setLoadingPassword] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(true);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [loginError, setLoginError] = useState('');
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const history = useNavigate();

  const handlePwd = () => {
    history('/ForgoutPassword');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value);
    setValidEmail(isValid);
  };

  const handleNextClick = () => {
    if (email.trim() === '' || !validEmail) {
      toast.error('Llene el campo requerido de manera correcta.');
    } else {
      setLoadingEmail(true);

      // Verifica primero si el correo está disponible (registrado)
      axios.post(`${Api}check-email`, {
        correo_users: email,
      })
        .then(response => {
          setLoadingEmail(false);
          if (response.data.exists) {
            // Si el correo existe, muestra el mensaje y activa el formulario de contraseña
            toast.success('Correo disponible. Puede continuar con el proceso de inicio de sesión.');
            setShowPasswordForm(true);
          } else {
            // Si el correo no existe, muestra un mensaje indicándolo
            toast.error('El correo proporcionado no está registrado. Por favor, regístrese primero.');
          }
        })
        .catch(error => {
          setLoadingEmail(false);
          if (error.response) {
            // Si hay una respuesta del servidor, pero no es 200, mostramos el mensaje de error del servidor
            toast.error(`Error en la verificación de correo. ${error.response.data.error}`);
          } else if (error.request) {
            // Si no se pudo realizar la solicitud, mostramos un mensaje de error genérico
            toast.error('Error al intentar verificar el correo. Inténtelo de nuevo.');
          } else {
            // Si ocurrió un error durante la configuración de la solicitud, mostramos el mensaje de error del error
            toast.error(`Error en la configuración de la solicitud. ${error.message}`);
          }
          console.error('Error en la verificación de correo:', error);
        });
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    const isValidPassword = /^(?=.*[A-Za-z0-9\d@$!%*?&]).{8,}$/.test(event.target.value);
    setValidPassword(isValidPassword);
  };

  const handleSignInClick = () => {
    if (password.trim() === '') {
      alert('Por favor, rellene el campo de contraseña correctamente.');
    } else if (validPassword) {
      // Realiza la solicitud de inicio de sesión a la API
      setLoadingPassword(true);
      axios.post(`${Api}login`, {
        correo_users: email,
        pwd_users: password,
      })
        .then(response => {
          setLoadingPassword(false);
  
          // Obtén el nombre del usuario desde la respuesta
          const userName = response.data.tbl_users.name_users;
          const userRoleId = response.data.tbl_users.idRol;
  
          // Redirige según el tipo de rol
          switch (userRoleId) {
            case 1: // ID para 'ADMINISTRADOR'
              history('/IndexAdmin');
              break;
            case 2: // ID para 'ALUMNO'
              history('/IndexAlumn');
              break;
            case 3: // ID para 'DOCENTE'
              history('/IndexDocent');
              break;
            case 4: // ID para 'DOCENTE CE'
            history('/IndexCE');
              break;
            case 5: // ID para 'FAMILIAR'
              history('/IndexFamily');
              break;
            default:
              history('/Login');
              break;
          }
  
          toast.success(`Inicio de sesión exitoso. ¡Bienvenido  ${userName}!`);
        })
        .catch(error => {
          setLoadingPassword(false);
          setLoginAttempts(loginAttempts + 1);
  
          if (loginAttempts >= 3) {
            setLoginError('Ha excedido el límite de intentos. Haga clic en "Olvidaste tu contraseña".');
          } else {
            setLoginError('Credenciales incorrectas. Inténtelo de nuevo.');
          }
          if (error.response && error.response.status === 500) {
            history('/Error500');
          } else if (error.response && error.response.status === 400) {
            history('/Error400');
          } else if (error.response && error.response.status === 404) {
            history('/Error404');
          } else {toast.error('Error en la solicitud de inicio de sesión:', error);}
        });
    } else {
      toast.error('Llene el campo de contraseña correctamente.');
    }
  };
  
  

  return (
    <div>
      <Navbar2 />
      <div className='flex container mx-auto justify-center'>
        <Breadcrumbs path={'Iniciar Sesión'} />
      </div>
      <div className='container-login'>
        {loadingEmail ? (
          <div className='loading-container'>
            <div className='loading-text'>Cargando....</div>
            <div className='loading-bar-container'>
              <div className='loading-bar'></div>
            </div>
          </div>
        ) : (
          <div className='form-container'>
            <div className='form-title'>Iniciar Sesión</div>
            {showPasswordForm ? (
              <>
                <div className={`input-container ${validPassword ? '' : 'invalid'}`}>
                  <label htmlFor="password" className='input-label'>Ingrese su contraseña</label>
                  <input
                    type={mostrarContrasena ? "password" : "text"}
                    className={`input-field ${validPassword ? 'valid' : 'invalid'}`}
                    value={password}
                    onChange={handlePasswordChange}
                    id='password'
                  />
                   {mostrarContrasena ? (
                      <p 
                        style={{
                          textAlign: "right",
                          margin: "0",
                          cursor: "pointer",
                          fontSize:'30px',
                         color:'green'
                        }}
                        onClick={() => setMostrarContrasena(false)}
                      >
                  
                        <ion-icon name="eye-off-outline"></ion-icon>
                      </p>
                    ) : (
                      <p
                        style={{
                          textAlign: "right",
                          margin: "0",
                          cursor: "pointer",
                          fontSize:'20px',
                        }}
                        onClick={() => setMostrarContrasena(true)}
                      >
                        <ion-icon name="eye-outline"></ion-icon>
                      </p>
                    )}
                  {!validPassword && (
                    <div className='error-message'>
                      La contraseña debe contener al menos 8 caracteres
                    </div>
                  )}
                </div>
                <button className='button3' style={{ marginRight: '20px' }} onClick={handlePwd}>
                  Olvidaste tu contraseña
                </button>
                <button className='button3' onClick={handleSignInClick}>
                  Iniciar Sesión
                </button>
              </>
            ) : (
              <div className={`input-container ${validEmail ? '' : 'invalid'}`}>
                <label className='input-label'>Ingrese su correo electrónico</label>
                <input
                  type='text'
                  className={`input-field ${validEmail ? 'valid' : 'invalid'}`}
                  value={email}
                  onChange={handleEmailChange}
                />
                {!validEmail && (
                  <div className='error-message'>Por favor, ingrese un correo electrónico válido.</div>
                )}
                <button className='button3' onClick={handleNextClick}>
                  Siguiente
                </button>
                <button className='button3' style={{ marginLeft: '20px' }} onClick={handlePwd}>
                  Olvidaste tu contraseña
                </button>
              </div>
            )}
            {loginError && <div className='error-message'>{loginError}</div>}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
