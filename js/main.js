var email = document.getElementById("inputEmail");
var contrasena = document.getElementById("inputPassword");
var botonEntrar = document.getElementsByClassName('btn')[0];

function traducir(){
  var encabezado = document.getElementById("form-signin-heading");
  var casillaRecordar = document.getElementsByTagName('span')[0];

  encabezado.innerHTML = "Inicio de Sesión";
  email.placeholder = "Correo Electrónico";
  contrasena.placeholder = "Contraseña";
  casillaRecordar.innerHTML = "Recordarme";
  botonEntrar.innerHTML = "Entrar";
}
traducir();

document.addEventListener("click", mostrar);

function mostrar(){
  var encabezado3 = document.getElementById("datosForm");
  var parrafo = document.getElementById("impDatos");
  encabezado3.innerHTML = "Datos del Formulario";
  parrafo.innerHTML = "El correo ingresado es:" + "<br>" + email.value + "</br>" +
  "<br> La clave ingresada es: </br>" + "<br>" + contrasena.value + "</br>";
};
mostrar();
