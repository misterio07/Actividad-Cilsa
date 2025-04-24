/*Validacion de formulario Actividad N°5*/
document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();

    let esValido = true;
    const mensajeExito = document.getElementById("mensajeExito");
    mensajeExito.style.display = "none";

    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const email = document.getElementById('email');
    const fecha = document.getElementById('fechaNacimiento');
    const pais = document.getElementById('paisResidencia');

    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{4,}$/;
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validarCampo(campo, condicion) {
      if (!condicion) {
        campo.classList.add('tiene-error');
        esValido = false;
      } else {
        campo.classList.remove('tiene-error');
      }
    }

    validarCampo(nombre, soloLetras.test(nombre.value));
    validarCampo(apellido, soloLetras.test(apellido.value));
    validarCampo(email, emailValido.test(email.value));

    const hoy = new Date();
    const fechaNacimiento = new Date(fecha.value);
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const cumpleEsteAño = new Date(hoy.getFullYear(), fechaNacimiento.getMonth(), fechaNacimiento.getDate());
    if (cumpleEsteAño > hoy) edad--;

    validarCampo(fecha, fecha.value && edad >= 18);
    validarCampo(pais, pais.value);

    if (esValido) {
      mensajeExito.style.display = "block";
      nombre.value = '';
      apellido.value = '';
      email.value = '';
      fecha.value = '';
      pais.value = '';
    }
  });
      // Función para activar el estilo de alto contraste

  function activarEstilo(tipo) {
      const body = document.body;
      if (tipo === 'oscuro') {
        body.classList.add('high-contrast');
      } else {
        body.classList.remove('high-contrast');
      }
    }
/* validacion de formulario N°4 */
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".formulario-4 form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        // Validar campos
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const email = document.getElementById("email").value;
        const fechaNacimiento = document.getElementById("fecha-nacimiento").value;
        const paisResidencia = document.getElementById("pais-residencia").value;

        if (nombre === "" || apellido === "" || email === "" || fechaNacimiento === "" || paisResidencia === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        
        alert("Formulario enviado con éxito!");
    });
});
/* cambio de estilo de botones 1 y 2 */
document.getElementById("estilo-1").addEventListener("click", function() {
    const formulario = document.querySelector(".formulario-4");
    formulario.style.backgroundColor = "#f0f0f0";
    formulario.style.color = "#fffff";
    
    formulario.style.border = "1px solid #000000";
    
    const h1 = formulario.querySelector("h1");
    h1.style.color = "#ad6a6a";
});
document.getElementById("estilo-2").addEventListener("click", function() {
    const formulario = document.querySelector(".formulario-4");
    formulario.style.backgroundColor = "#111111";
    formulario.style.color = "#ad6a6a";
});

