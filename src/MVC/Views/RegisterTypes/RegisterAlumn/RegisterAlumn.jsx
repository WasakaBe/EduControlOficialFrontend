import React, { useState, useEffect, useRef } from "react";
import { Footer, Navbar2 } from "../../../../Components/Public";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs, Api } from "../../../../Constants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useNombreValidation,
  useApellidoPaternoValidation,
  useApellidoMaternoValidation,
  useEdadValidation,
  useCorreoValidation,
  useContrasenaValidation,
  useNumeroControlValidation,
  useTelefonoValidation,
  useSeguroSocialValidation,
  useCurpValidation,
  useAceptaTerminosValidation,
  useFechaNacimientoValidation, 
} from "../../../../Validation";
import ReCAPTCHA from "react-google-recaptcha";

function RegisterAlumn() {
  const nav = useNavigate();
  const { nombre, nombreValido, handleNombreChange } = useNombreValidation();
  const {
    apellidoPaterno,
    apellidoPaternoValido,
    handleApellidoPaternoChange,
  } = useApellidoPaternoValidation();
  const {
    apellidoMaterno,
    apellidoMaternoValido,
    handleApellidoMaternoChange,
  } = useApellidoMaternoValidation();
  const { edad, edadValida, handleEdadChange } = useEdadValidation();


  const { correo, correoValido, handleCorreoChange } = useCorreoValidation();
  const { contrasena, contrasenaValida, handleContrasenaChange } =
    useContrasenaValidation();
  const { numeroControl, numeroControlValido, handleNumeroControlChange } =
    useNumeroControlValidation();
  const { telefono, telefonoValido, handleTelefonoChange } =
    useTelefonoValidation();
  const { seguroSocial, seguroSocialValido, handleSeguroSocialChange } =
    useSeguroSocialValidation();
  const { curp, curpValido, handleCurpChange } = useCurpValidation();
  const { aceptaTerminos, handleAceptaTerminosChange } =
    useAceptaTerminosValidation();
  const [sexos, setSexos] = useState([]);
  const [sexo, setSexo] = useState("");
  const [seccionActual, setSeccionActual] = useState(1);
  const [captchaValido, cambiarEstado] = useState(null);
  const captcha = useRef(null);
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const {
    fechaNacimiento,
    fechaNacimientoValida,
    handleFechaNacimientoChange,
  } = useFechaNacimientoValidation();
  
  
  const onChangeCaptcha = () => {
    if (captcha.current.getValue()) {
      console.log("No eres un robot");
      cambiarEstado(true);
    } else {
      console.log("Realiza el captcha correctamente");
      cambiarEstado(false);
    }
  };

  useEffect(() => {
    fetch(`${Api}sexs`)
      .then((response) => response.json())
      .then((data) => {
        setSexos(data.sexs);
        if (data.sexs.length > 0) {
          setSexo(data.sexs[0].id_sexs.toString());
        }
      })
      .catch((error) => toast.error("Error fetching sexs:", error));
  }, []);

  const generateToken = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";

    const getRandomChar = (source) =>
      source.charAt(Math.floor(Math.random() * source.length));

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

  const manejarSiguienteSeccion = () => {
    if (seccionActual < 3) {
      setSeccionActual(seccionActual + 1);
    }
  };

  const manejarSeccionAnterior = () => {
    if (seccionActual > 1) {
      setSeccionActual(seccionActual - 1);
    }
  };

  const validarCampos = () => {
    if (
      nombre.trim() === "" &&
      apellidoPaterno.trim() === "" &&
      apellidoMaterno.trim() === "" 
    ) {
      toast.error(
        "Complete todos los campos correctamente antes de pasar a la siguiente sección."
      );
      return false; // Indica que el correo no está lleno
    } else if (nombre.trim() === "") {
      toast.error("Complete el campo de nombre.");
      return false; // Indica que el correo no está lleno
    } else if (apellidoPaterno.trim() === "") {
      toast.error("Complete el campo de apellido paterno.");
      return false; // Indica que el correo no está lleno
    } else if (apellidoMaterno.trim() === "") {
      toast.error("Complete el campo de apellido materno.");
      return false; // Indica que el correo no está lleno
    } else if (
      nombreValido &&
      apellidoPaternoValido &&
      apellidoMaternoValido &&

      validarFechaNacimiento() 
      // Agrega más condiciones según tus campos adicionales
    ) {
      manejarSiguienteSeccion();
    } else {
      toast.error(
        "Complete todos los campos correctamente antes de pasar a la siguiente sección."
      );
    }
  };

  const checkExistingEmail = async () => {
    try {
      if (correo.trim() === "") {
        toast.error("Rellene el campo de correo, por favor.");
        return false; // Indica que el correo no está lleno
      }
      if (!correoValido) {
        toast.error("Ingrese una dirección de correo electrónico válida.");
        return false; // Indica que el correo no es válido
      } else if (contrasena.trim() === "") {
        toast.error("Rellene el campo de contrasena, por favor.");
        return false; // Indica que el correo no está lleno
      }

      const response = await fetch(`${Api}check-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo_users: correo }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.exists) {
          toast.error(
            "El correo ya está registrado. Por favor, utiliza otro correo."
          );
          return true; // Indica que el correo ya existe
        } else {
          manejarSiguienteSeccion();
          return false; // Indica que el correo no existe
        }
      } else {
        toast.error(
          "Error al verificar la existencia del correo. Inténtelo de nuevo."
        );
      }
    } catch (error) {
      toast.error("Error al conectar con el Servidor. Inténtelo nuevamente.");
    }

    return false; // Indica que hubo un error en la verificación
  };

  const checkExistingNoControl = async () => {
    try {
      // Verificar si los campos obligatorios están vacíos
      if (numeroControl.trim() === "") {
        toast.error("Rellene el campo de número de control, por favor.");
        return true; // Indica que hay un error, pero el número de control no existe
      }
      if (numeroControl.length !== 16) {
        toast.error("Digite los 16 dígitos del número de control.");
        return true; // Indica que hay un error, y el número de control no tiene la longitud correcta
      }
      const response = await fetch(`${Api}users/check-no-control`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ no_control_users: numeroControl }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.exists) {
          toast.error(
            "El número de control ya está registrado. Por favor, utiliza otro número de control."
          );
          return true; // Indica que el número de control ya existe
        }
      } else {
        toast.error(
          "Error al verificar la existencia del número de control. Inténtelo de nuevo."
        );
      }
    } catch (error) {
      toast.error("Error al conectar con la API. Inténtelo nuevamente.");
    }

    return false; // Indica que el número de control no existe
  };

  const checkExistingSeguroSocial = async () => {
    try {
      // Verificar si los campos obligatorios están vacíos
      if (seguroSocial.trim() === "") {
        toast.error("Rellene el campo de número de seguro social, por favor.");
        return false;
      }
      if (seguroSocial.length !== 11) {
        toast.error("Digite los 11 dígitos del SEGURO SOCIAL.");
        return true; // Indica que hay un error, y el número de control no tiene la longitud correcta
      }
      const response = await fetch(`${Api}users/check-seguro-social`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ seguroSocial }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.exists) {
          toast.error(
            "El número de seguro social ya está registrado. Por favor, utiliza otro número de seguro social."
          );
          return true; // Indica que el seguro social ya existe
        }
      } else {
        toast.error(
          "Error al verificar la existencia del número de seguro social. Inténtelo de nuevo."
        );
      }
    } catch (error) {
      toast.error("Error al conectar con la API. Inténtelo nuevamente.");
    }

    return false; // Indica que el número de seguro social no existe
  };

  const checkExistingCurp = async () => {
    try {
      const response = await fetch(`${Api}users/check-curp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ curp }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.exists) {
          toast.error(
            "La CURP ya está registrada. Por favor, utiliza otra CURP."
          );
          return true; // Indica que la CURP ya existe
        }
      } else {
        toast.error(
          "Error al verificar la existencia de la CURP. Inténtelo de nuevo."
        );
      }
    } catch (error) {
      toast.error("Error al conectar con la API. Inténtelo nuevamente.");
    }

    return false; // Indica que la CURP no existe
  };

  const validarFechaNacimiento = () => {
    // Obtener la fecha actual
    const fechaActual = new Date();
    const añoActual = fechaActual.getFullYear();
  
    // Obtener la fecha de nacimiento del estado
    const fechaNacimientoDate = new Date(fechaNacimiento);
  
    // Validar si la fecha de nacimiento es una fecha válida y no está en blanco
    if (isNaN(fechaNacimientoDate.getTime()) || fechaNacimiento.trim() === "") {
      mostrarToastError("Ingresa una fecha de nacimiento válida.");
      return false;
    }
  
    // Validar que el año tenga exactamente 4 dígitos
    const añoNacimiento = fechaNacimientoDate.getFullYear();
    if (!esAñoValido(añoNacimiento)) {
      mostrarToastError("Ingresa un año de nacimiento válido.");
      return false;
    }
  
    // Calcular la diferencia en milisegundos
    const diferenciaEnMilisegundos = fechaActual - fechaNacimientoDate;
  
    // Convertir la diferencia en milisegundos a años
    const milisegundosEnAño = 1000 * 60 * 60 * 24 * 365.25; // Año promedio con 365.25 días
    const edad = diferenciaEnMilisegundos / milisegundosEnAño;
  
    // Validar que la fecha de nacimiento sea menor a la fecha actual
    if (fechaNacimientoDate >= fechaActual) {
      mostrarToastError(`La fecha de nacimiento debe ser diferente o menor a la fecha actual (${añoActual}).`);
      return false;
    } 
     if (fechaNacimientoDate > fechaActual) {
      mostrarToastError("El año es mayor que el año actual.");
      return false;
    }
  
    // Validar que la edad esté entre 15 y 20 años
    if (!esEdadValida(edad)) {
      mostrarToastError(`La edad debe estar entre ${EDAD_MINIMA_PERMITIDA} y ${EDAD_MAXIMA_PERMITIDA} años.`);
      return false;
    }
  
    // Mostrar un toast de éxito si todas las validaciones pasan
    mostrarToastExito("Fecha de nacimiento válida.");
  
    // Si todas las validaciones pasan, la fecha de nacimiento es válida
    return true;
  };
  
  // Función para mostrar un toast de error
  const mostrarToastError = (mensaje) => {
    toast.error(mensaje);
  };
  
  // Función para mostrar un toast de éxito
  const mostrarToastExito = (mensaje) => {
    toast.success(mensaje);
  };
  
  // Función para verificar si el año es válido
  const esAñoValido = (año) => {
    return año.toString().length === 4;
  };
  
  // Función para verificar si la edad es válida
  const esEdadValida = (edad) => {
    return edad > EDAD_MINIMA_PERMITIDA && edad < EDAD_MAXIMA_PERMITIDA;
  };
  
  // Constantes para las edades mínima y máxima permitidas
  const EDAD_MINIMA_PERMITIDA = 15;
  const EDAD_MAXIMA_PERMITIDA = 20;
  

  const handleRegistro = async (event) => {
    event.preventDefault();

    const correoExistente = await checkExistingEmail();
    const noControlExistente = await checkExistingNoControl();
    const seguroSocialExistente = await checkExistingSeguroSocial();
    const curpExistente = await checkExistingCurp();

    if (
      numeroControl.trim() === "" &&
      seguroSocial.trim() === "" &&
      curp.trim() === ""
    ) {
      toast.error(
        "Complete todos los campos correctamente antes de registrarse."
      );
      return false; // Indica que el correo no está lleno
    } else if (numeroControl.trim() === "") {
      toast.error("Complete el campo de numero de control.");
      return false; // Indica que el correo no está lleno
    } else if (seguroSocial.trim() === "") {
      toast.error("Complete el campo de seguro social.");
      return false; // Indica que el correo no está lleno
    } else if (curp.trim() === "") {
      toast.error("Complete el campo de CURP.");
      return false; // Indica que el correo no está lleno
    }
    if (
      correoExistente ||
      noControlExistente ||
      curpExistente ||
      seguroSocialExistente
    ) {
      return;
    }
    if (seguroSocialExistente) {
      toast.success("Seguro Social Disponible");
      return;
    }
    if (!aceptaTerminos) {
      toast.error("Acepte los Terminos y Condiciones.");
      return;
    } else {
      toast.success("Terminos y Condiciones Correctamente");
    }
 

    if (
      nombreValido &&
      apellidoPaternoValido &&
      apellidoMaternoValido &&
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
        age_users: 12,
        token_users: generatedToken,
        correo_users: correo,
        pwd_users: contrasena,
        no_control_users: numeroControl,
        phone_users: telefono,
        seguro_social_users: seguroSocial,
        curp_users: curp,
        idRol: 2,
        idSexo: parseInt(sexo),
        idParental: 1,
      };

      try {
        const response = await fetch(`${Api}users/insert`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(datosRegistro),
        });

        if (response.ok) {
          toast.success("Registro de Usuario exitoso");
          nav("/Login");
        } else {
          toast.error(
            "No se pudo completar el registro. Inténtelo nuevamente."
          );
        }
      } catch (error) {
        toast.error("Error al conectar con la API. Inténtelo nuevamente.");
      }
    } else {
      toast.error("Por favor, complete los campos de manera correcta.");
    }
  };

  return (
    <div>
      <Navbar2 />
      <div className="flex container mx-auto justify-center">
        <Breadcrumbs path={"Registro de Alumno"} />
      </div>

      <div className="container-registers">
        <h2>Registro de Alumno</h2>
        <h6>Por favor rellene los campos necesarios</h6>
        <div className="form-register">
          <form>
            {seccionActual === 1 && (
              <>
                <label>Nombre</label>
                <input
                  type="text"
                  placeholder="Ingrese su nombre"
                  value={nombre}
                  onChange={handleNombreChange}
                  style={{ borderColor: nombreValido ? "green" : "red" }} required
                />
                {!nombreValido && (
                  <p style={{ color: "red" }}>
                    Solo se aceptan caracteres de texto (áéíóú).
                  </p>
                )}
                <label> Apellido Paterno</label>
                <input
                  type="text"
                  placeholder="Ingrese su Apellido Paterno"
                  value={apellidoPaterno}
                  onChange={handleApellidoPaternoChange}
                  style={{
                    borderColor: apellidoPaternoValido ? "green" : "red",
                  }}
                />
                {!apellidoPaternoValido && (
                  <p style={{ color: "red" }}>
                    Solo se aceptan caracteres de texto (áéíóú).
                  </p>
                )}

                <label>Apellido Materno</label>
                <input
                  type="text"
                  placeholder="Ingrese su Apellido Materno"
                  value={apellidoMaterno}
                  onChange={handleApellidoMaternoChange}
                  style={{
                    borderColor: apellidoMaternoValido ? "green" : "red",
                  }}
                />
                {!apellidoMaternoValido && (
                  <p style={{ color: "red" }}>
                    Solo se aceptan caracteres de texto (áéíóú).
                  </p>
                )}

              
<label>Fecha de Nacimiento</label>
                <input
                  type="date"
                  value={fechaNacimiento}
                  onChange={(event) => {
                    handleFechaNacimientoChange(event);
                    validarFechaNacimiento(); // Llama a la validación al cambiar la fecha de nacimiento
                  }}
                  style={{ borderColor: fechaNacimientoValida ? "green" : "red" }}
                />
                {!fechaNacimientoValida && (
                  <p style={{ color: "red" }}>
                    Ingresa una fecha de nacimiento válida.
                  </p>
                )}
                <button type="button" onClick={validarCampos}>
                  Siguiente
                </button>
              </>
            )}

            {seccionActual === 2 && (
              <>
                <label>Correo</label>
                <input
                  type="email"
                  placeholder="correo@correo.com"
                  value={correo}
                  onChange={handleCorreoChange}
                  style={{ borderColor: correoValido ? "green" : "red" }}
                />
                {!correoValido && (
                  <p style={{ color: "red" }}>
                    Ingrese una dirección de correo electrónico válida.
                  </p>
                )}
                <label>Contrasena</label>
               
             
                    <input
                     
                      type={mostrarContrasena ? "password" : "text"}
                      placeholder="Example#123"
                      value={contrasena}
                      onChange={handleContrasenaChange}
                      style={{
                        borderColor: contrasenaValida ? "green" : "red",
                      }}
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

                    {!contrasenaValida && (
                      <p style={{ color: "red" }}>
                        La contraseña debe tener al menos 8 caracteres,
                        incluyendo al menos una mayúscula, una minúscula, un
                        número y un carácter especial.
                      </p>
                    )}
          

                <div className="div-button">
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
                <label>No. Control</label>
                <input
                  type="text"
                  placeholder="1234567890123456"
                  value={numeroControl}
                  onChange={handleNumeroControlChange}
                  style={{ borderColor: numeroControlValido ? "green" : "red" }}
                />
                {!numeroControlValido && (
                  <p style={{ color: "red" }}>
                    Ingrese un número de control válido de 16 dígitos numéricos.
                  </p>
                )}

                <label>Telefono</label>
                <input
                  type="tel"
                  placeholder="+521234567890"
                  value={telefono}
                  onChange={handleTelefonoChange}
                  style={{ borderColor: telefonoValido ? "green" : "red" }}
                />
                {!telefonoValido && (
                  <p style={{ color: "red" }}>
                    Ingrese un número de teléfono válido en el formato
                    +123456789012.
                  </p>
                )}
                <label>Seguro Social</label>
                <input
                  type="text"
                  placeholder="12345678901"
                  value={seguroSocial}
                  onChange={handleSeguroSocialChange}
                  style={{ borderColor: seguroSocialValido ? "green" : "red" }}
                />
                {!seguroSocialValido && (
                  <p style={{ color: "red" }}>
                    Ingrese un número de seguro social válido con exactamente 11
                    dígitos.
                  </p>
                )}
                <label>CURP</label>
                <input
                  type="text"
                  placeholder="AAAA000000AAAAAAA0"
                  value={curp}
                  onChange={handleCurpChange}
                  style={{ borderColor: curpValido ? "green" : "red" }}
                />
                {!curpValido && (
                  <p style={{ color: "red" }}>
                    Ingrese un CURP válido con exactamente 18 caracteres y que
                    cumpla con las reglas específicas.
                  </p>
                )}
                <label>Sexo</label>
                <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
                  {sexos.map((sex) => (
                    <option key={sex.id_sexs} value={sex.id_sexs.toString()}>
                      {sex.name_sexs}
                    </option>
                  ))}
                </select>
                <div className="terms-checkbox">
                  <label>
                    Aceptas Terminos y Condiciones
                    <input
                      type="checkbox"
                      checked={aceptaTerminos}
                      onChange={handleAceptaTerminosChange}
                    />
                  </label>
                </div>
                {!aceptaTerminos && (
                  <p style={{ color: "red", margin: "10px" }}>
                    Debes aceptar los términos y condiciones para continuar.
                  </p>
                )}

                <div className="recaptcha">
                  <ReCAPTCHA
                    ref={captcha}
                    sitekey="6LerLXUpAAAAAP5FW7LQEPCLll9YkY5NqGoOd6a5"
                    onChange={onChangeCaptcha}
                  />
                </div>

                <div className="div-button">
                  <button type="button" onClick={manejarSeccionAnterior}>
                    Anterior
                  </button>
                  <button type="submit" onClick={handleRegistro}>
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

export default RegisterAlumn;
