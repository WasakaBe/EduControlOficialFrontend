import { useNombreValidation,useApellidoPaternoValidation,useApellidoMaternoValidation,useEdadValidation,useCorreoValidation,useContrasenaValidation,useNumeroControlValidation,useTelefonoValidation,useSeguroSocialValidation,useCurpValidation,useAceptaTerminosValidation } from '../../../../Validation';
import './RegisterAdmin.css'
import React, { useState, useEffect } from 'react';
import { Footer, Navbar } from '../../../../Components/Public';
import { useNavigate } from 'react-router-dom';
import { Breadcrumbs, Api } from '../../../../Constants';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterAdmin2() {
  const nav = useNavigate();
 const { nombre, nombreValido, handleNombreChange } = useNombreValidation();
  const {apellidoPaterno, apellidoPaternoValido,handleApellidoPaternoChange} = useApellidoPaternoValidation();
  const {apellidoMaterno, apellidoMaternoValido,handleApellidoMaternoChange} = useApellidoMaternoValidation();
  const {edad,edadValida,handleEdadChange}=useEdadValidation();
  const {correo,correoValido,handleCorreoChange}=useCorreoValidation();
  const {contrasena,contrasenaValida,handleContrasenaChange,}=useContrasenaValidation();
  const {numeroControl,numeroControlValido,handleNumeroControlChange,}=useNumeroControlValidation();
  const {telefono, telefonoValido,handleTelefonoChange,}=useTelefonoValidation();
  const {seguroSocial,seguroSocialValido,handleSeguroSocialChange,}=useSeguroSocialValidation();
  const {curp,curpValido,handleCurpChange,}=useCurpValidation();
  const { aceptaTerminos, handleAceptaTerminosChange } = useAceptaTerminosValidation();
  const [sexos, setSexos] = useState([]);
  const [sexo, setSexo] = useState('');
  const [seccionActual, setSeccionActual] = useState(1);

  const manejarSiguienteSeccion = () => {
    if (seccionActual < 4) {
      setSeccionActual(seccionActual + 1);
    }
  };

  const manejarSeccionAnterior = () => {
    if (seccionActual > 1) {
      setSeccionActual(seccionActual - 1);
    }
  };

  useEffect(() => {
    fetch(`${Api}sexs`)
      .then(response => response.json())
      .then(data => {
        setSexos(data.sexs);
        if (data.sexs.length > 0) {
          setSexo(data.sexs[0].id_sexs.toString());
        }
      })
      .catch(error => toast.error('Error fetching sexs:', error));
  }, []);

  const generateToken = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

    const getRandomChar = (source) => source.charAt(Math.floor(Math.random() * source.length));

    const generatedToken =
      getRandomChar(letters) +
      getRandomChar(letters) +
      getRandomChar(letters) +
      getRandomChar(numbers) +
      getRandomChar(numbers) +
      getRandomChar(numbers) +
      getRandomChar(letters) +
      getRandomChar(numbers) +
      getRandomChar(letters) +
      getRandomChar(letters) +
      getRandomChar(letters) +
      getRandomChar(numbers) +
      getRandomChar(letters) +
      getRandomChar(letters) +
      getRandomChar(letters) +
      getRandomChar(letters) +
      getRandomChar(letters) +
      getRandomChar(numbers) +
      getRandomChar(letters) +
      getRandomChar(numbers);

    return generatedToken;
  };
  const handleSiguienteSeccionClick = () => {
    // Verificar si los campos obligatorios están vacíos
    if (nombre.trim() === '' && apellidoPaterno.trim() === ''&& apellidoMaterno.trim() === ''&& edad.trim() === '') {
      toast.error('Complete todos los campos correctamente antes de pasar a la siguiente sección.');
      return false;
    } else if (nombre.trim() === '' ) {
      toast.error('Complete el campo de nombre.');
      return false; 
    }
    else if (apellidoPaterno.trim() === '') {
      toast.error('Complete el campo de apellido paterno.');
      return false; 
    }
    else if (apellidoMaterno.trim() === '') {
      toast.error('Complete el campo de apellido materno.');
      return false; 
    }
    else if ( edad.trim() === '') {
      toast.error('Complete el campo de edad.');
      return false; 
    }else if (
      nombreValido &&
      apellidoPaternoValido &&
      apellidoMaternoValido &&
      edadValida
      // Agrega más condiciones según tus campos adicionales
    ) {
      manejarSiguienteSeccion();
    }  else  {
      toast.error('Complete todos los campos correctamente antes de pasar a la siguiente sección.');
    }
  
  };

  const checkExistingEmail = async () => {
    try {
      if (correo.trim() === '') {
        toast.error('Rellene el campo de correo, por favor.');
        return false; 
      }
      else if (contrasena.trim() === '') {
        toast.error('Rellene el campo de contrasena, por favor.');
        return false; 
      }
      const response = await fetch(`${Api}check-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo_users: correo }),
      });
      if (response.ok) {
        const data = await response.json();
        if (data.exists) {
          toast.error('El correo ya está registrado. Por favor, utiliza otro correo.');
          return true;
        } else {
          manejarSiguienteSeccion();
          return false;
        }
      } else {
        toast.error('Error al verificar la existencia del correo. Inténtelo de nuevo.');
      }
    } catch (error) {
      toast.error('Error al conectar con la API. Inténtelo nuevamente.');
    }
    return false; 
  };

  const checkExistingNoControl = async () => {
    try {
      if (numeroControl.trim() === '') {
        toast.error('Rellene el campo de número de control, por favor.');
        return false;
      }
  
      const response = await fetch(`${Api}users/check-no-control`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ no_control_users: numeroControl }),
      });
  
      if (response.ok) {
        const data = await response.json();
        if (data.exists) {
          toast.error('El número de control ya está registrado. Por favor, utiliza otro número de control.');
          return true; // Indica que el número de control ya existe
        } else {
          toast.success('Número de control disponible');
          return false; // Indica que el número de control no existe
        }
      } else {
        toast.error('Error al verificar la existencia del número de control. Inténtelo de nuevo.');
      }
    } catch (error) {
      toast.error('Error al conectar con la API. Inténtelo nuevamente.');
    }
  
    return false; // Manejo de errores generales
  };
  
  const checkExistingSeguroSocial = async () => {
    try {
      // Verificar si los campos obligatorios están vacíos
      if (seguroSocial.trim() === '') {
        toast.error('Rellene el campo de número de seguro social, por favor.');
        return false;
      }

      const response = await fetch(`${Api}users/check-seguro-social`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ seguro_social_users:seguroSocial }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.exists) {
          toast.error('El número de seguro social ya está registrado. Por favor, utiliza otro número de seguro social.');
          return true; // Indica que el número de seguro social ya existe
        }else {
          
          return false; // Indica que el número de control no existe
        }
      } else {
        toast.error('Error al verificar la existencia del número de seguro social. Inténtelo de nuevo.');
      }
    } catch (error) {
      toast.error('Error al conectar con la API. Inténtelo nuevamente.');
    }

    return false; // Indica que el número de seguro social no existe
  };
  const checkExistingCurp = async () => {
    try {
      // Verificar si los campos obligatorios están vacíos
      if (curp.trim() === '') {
        toast.error('Rellene el campo de CURP, por favor.');
        return false;
      }
  
      const response = await fetch(`${Api}users/check-curp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ curp }),
      });
  
      if (response.ok) {
        const data = await response.json();
        if (data.exists) {
          toast.error('La CURP ya está registrada. Por favor, utiliza otra CURP.');
          return true; // Indica que la CURP ya existe
        }
      } else {
        toast.error('Error al verificar la existencia de la CURP. Inténtelo de nuevo.');
      }
    } catch (error) {
      toast.error('Error al conectar con la API. Inténtelo nuevamente.');
    }
  
    return false; // Indica que la CURP no existe
  };

  const handleSiguienteSeccionClick2 = async() => {
    // Verificar si los campos obligatorios están vacíos o no son válidos
    if (numeroControl.trim() === '' &&  telefono.trim() === '' ) {
      toast.error('Complete todos los campos correctamente antes de pasar a la siguiente sección.');
      return false; 
    }else if (numeroControl.trim() === '' ) {
      toast.error('Complete el campo de numero de control.');
      return false; 
    }else if (telefono.trim() === '' ) {
      toast.error('Complete el campo de telefono.');
      return false; 
    }else if (numeroControlValido && telefonoValido) {
          checkExistingNoControl().then((noControlExists) => {
            if (!noControlExists) {
              manejarSiguienteSeccion();
            }
          });
    };
  }

  const handleRegistro = async () => {
    try {
      if (
        nombreValido &&
        apellidoPaternoValido &&
        apellidoMaternoValido &&
        edadValida &&
        correoValido &&
        contrasenaValida &&
        numeroControlValido &&
        telefonoValido &&
        seguroSocialValido &&
        curpValido &&
        aceptaTerminos
      ) {
        const generatedToken = generateToken();
        const datosRegistro = {
          name_users: nombre,
          app_users: apellidoPaterno,
          apm_users: apellidoMaterno,
          age_users: edad,
          token_users: generatedToken,
          correo_users: correo,
          pwd_users: contrasena,
          no_control_users: numeroControl,
          phone_users: telefono,
          seguro_social_users: seguroSocial,
          curp_users: curp,
          idRol: 1,
          idSexo: parseInt(sexo),
          idParental: 1,
        };
  
        const response = await fetch(`${Api}users/insert`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(datosRegistro),
        });
  
        if (response.ok) {
          toast.success('Registro de Usuario exitoso');
          nav('/Login');
        } else {
          toast.error('No se pudo completar el registro. Inténtelo nuevamente.');
        }
      } else {
        toast.error('Por favor, complete los campos de manera correcta.');
      }
  
    } catch (error) {
      toast.error('Error al conectar con la API. Inténtelo nuevamente.');
    }
  };
  const handleRegistroClick3 = async () => {
    try {
      // Validar campos obligatorios
      if(seguroSocial.trim() === '' ) {
        toast.error('Complete  el campo de seguro social.');
        return;
      }else if ( curp.trim() === '') {
        toast.error('Complete el campo de la curp.');
        return;
      }else if ( !aceptaTerminos) {
        toast.error('Acepte El Terminos Y Condiciones.');
        return;
      }
  
      // Verificar la existencia del número de seguro social
      const seguroSocialExists = await checkExistingSeguroSocial();
      if (seguroSocialExists) {
        toast.error('El número de seguro social ya está registrado. Utiliza otro número de seguro social.');
        return;
      } else {
        toast.success('Seguro Social Disponible');
      }
  
      // Verificar la existencia de la CURP
      const curpExists = await checkExistingCurp();
      if (curpExists) {
        toast.error('La CURP ya está registrada. Utiliza otra CURP.');
        return;
      } else {
        toast.success('CURP disponible');
      }
   // Ahora llamamos a la función de registro
        await handleRegistro();
    } catch (error) {
      toast.error('Error al conectar con la API. Inténtelo nuevamente.');
    }
  };
  
  return (
    <div>
       <Navbar />
      <div className='flex container mx-auto justify-center'>
        <Breadcrumbs path={'Registro de Adminstrador'} />
      </div>
       <div className="container-registers">
      <h2>Registro de Administrador 22</h2>
        <h6>Por favor rellene los campos necesarios</h6>
        <div className='form-register'>
          <form>
          {seccionActual === 1 && (
              <>
                <label>Nombre</label>
                <input
                  type="text"
                  placeholder="Ingrese su nombre"
                  value={nombre}
                  onChange={handleNombreChange}
                />
              {!nombreValido && <p style={{ color: 'red' }}>Ingrese un nombre válido.</p>}

              <label>Apellido Paterno</label>
                <input
                  type="text"
                  placeholder="Ingrese su Apellido Paterno"
                  value={apellidoPaterno}
                  onChange={handleApellidoPaternoChange}
                />
              {!apellidoPaternoValido && <p style={{ color: 'red' }}>Ingrese un apellido válido.</p>}
            
              <label>Apellido Materno</label>
                <input
                  type="text"
                  placeholder="Ingrese su Apellido Materno"
                  value={apellidoMaterno}
                  onChange={handleApellidoMaternoChange}
                />
              {!apellidoMaternoValido && <p style={{ color: 'red' }}>Ingrese un apellido válido.</p>}
              <label>Edad</label>
                <input
                  type="text"
                  placeholder="Ingrese su edad"
                 value={edad}
                 onChange={handleEdadChange}
                />
            {!edadValida && <p style={{ color: 'red' }}>Ingrese una edad válida (entre 15 y 80 años).</p>}
                  <label>Sexo</label>
                  <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
                    {sexos.map((sex) => (
                      <option key={sex.id_sexs} value={sex.id_sexs.toString()}>
                        {sex.name_sexs}
                      </option>
                    ))}
                  </select>
                  <button type="button" onClick={handleSiguienteSeccionClick}>
                  Siguiente
                </button>
              </>
            )}

{seccionActual === 2 && (
              <>
                  <label>Correo</label>
                    <input
                      type="text"
                      placeholder="Ingrese su correo@correo.com"
                      value={correo}
                      onChange={handleCorreoChange}
                    />
                    {!correoValido && <p style={{ color: 'red' }}>Ingrese un correo válido.</p>}

                    <label>Contraseña</label>
                    <input
                        type="password"
                        placeholder="Ingrese su contraseña"
                        value={contrasena}
                        onChange={handleContrasenaChange} autoComplete="current-password"
                      />
                      {!contrasenaValida && <p style={{ color: 'red' }}>Ingrese una contraseña válida.</p>}

                      <div className='div-button'>
                  <button type="button" onClick={manejarSeccionAnterior}>
                    Anterior
                  </button>
                  <button type="button" onClick={checkExistingEmail}>
                    Siguiente
                  </button>
                </div>
              </>
            )}


{seccionActual === 3 && (
              <>
                      <label>Número de Control</label>
                          <input
                            type="text"
                            placeholder="Ingrese su número de control 1234567890123456"
                            value={numeroControl}
                            onChange={handleNumeroControlChange}
                          />
                          {!numeroControlValido && <p style={{ color: 'red' }}>Son 16 digitos. Ingrese un número de control válido.</p>}
                      <label>Teléfono</label>
                            <input
                              type="text"
                              placeholder="Ingrese su teléfono: 1111111111"
                              value={telefono}
                              onChange={handleTelefonoChange}
                            />
                            {!telefonoValido && <p style={{ color: 'red' }}>Ingrese un teléfono válido.</p>}
    
                          
      <div className='div-button'>
                  <button type="button" onClick={manejarSeccionAnterior}>
                    Anterior
                  </button>
                  <button type="button" onClick={handleSiguienteSeccionClick2}>
                    Siguiente
                  </button>
                </div>
              </>
            )}

{seccionActual === 4 && (
              <>   
                <label>Número de Seguro Social</label>
      <input
        type="text"
        placeholder="Ingrese su número de seguro social: 12345678901"
        value={seguroSocial}
        onChange={handleSeguroSocialChange}
      />
      {!seguroSocialValido && <p style={{ color: 'red' }}>Son 11 digitos. Ingrese un número de seguro social válido.</p>}

      <label>CURP</label>
      <input
        type="text"
        placeholder="Ingrese su CURP"
        value={curp}
        onChange={handleCurpChange}
      />
      {!curpValido && <p style={{ color: 'red' }}>Ingrese un CURP válido con exactamente 18 caracteres y que cumpla con las reglas específicas.</p>}
    
    <div className="terms-checkbox">
      <label>Acepto los términos y condiciones
        <input
          type="checkbox"
          checked={aceptaTerminos}
          onChange={handleAceptaTerminosChange}
        />
        
      </label>
    </div>
      
    <div className='div-button'>
                  <button type="button" onClick={manejarSeccionAnterior}>
                    Anterior
                  </button>
                  <button type="button" onClick={handleRegistroClick3}>
                    Registrar
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
    
    </div>
    <Footer />
    </div>
   
  );
}
