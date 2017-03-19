document.querySelector('.divError').classList.add('ocultar');
document.querySelector('#btnRegistrarPersona').addEventListener('click',
registrar);
mostrarDatos();

function registrar(){

  var bExisteError = validar(),
      aNuevaPersona = [],
      sCedula = '',
      sNombre = '';
      if(bExisteError == false){
        sCedula = document.querySelector('#txtCedula').value;
        sNombre = document.querySelector('#txtNombre').value;

        aNuevaPersona.push(sCedula, sNombre);
        registrarPersonaEnSistema(aNuevaPersona);
        mostrarDatos();
      } else {
        document.querySelector('.divError').classList.remove('ocultar');
        document.querySelector('.divError').classList.add('mostrar');
      }

}

function mostrarDatos(){
  var personas = getListaPersonas(),
      tbody    = document.querySelector('#tblPersonas tbody');

  tbody.innerHTML = '';

  for(var i = 0; i < personas.length;i++) {
    var fila        = document.createElement('tr'),
        celdaCedula = document.createElement('td'),
        celdaNombre = document.createElement('td');

    celdaCedula.innerHTML = personas[i][0];
    celdaNombre.innerHTML = personas[i][1];

    fila.appendChild(celdaCedula);
    fila.appendChild(celdaNombre);

    tbody.append(fila);
  }
}

function validar(){
  var bError = false,
      inputsTexto = document.querySelectorAll('input[type=text]');

  for(var i = 0; i < inputsTexto.length;i++) {
    if(inputsTexto[i].required == true && inputsTexto[i].value.length === 0) {
      inputsTexto[i].classList.add('error');
      bError = true;
    } else {
      inputsTexto[i].classList.remove('error');
    }
  }
  return bError;
}
