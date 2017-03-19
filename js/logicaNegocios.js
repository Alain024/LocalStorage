var listaPersonas =
[
  ['145030579', 'Francisco Pacheco'],
  ['123456789', 'Rolando Morera'],
  ['123890096', 'Charlie Perla'],
  ['874156982', 'Franky!'],
];

function registrarPersonaEnSistema(pNuevoUsuario){

  listaPersonas = getListaPersonas();
  listaPersonas.push(pNuevoUsuario);

  localStorage.setItem('listaPersonasLS',JSON.stringify(listaPersonas));

}

function getListaPersonas(){
  var listaPersonasLocal = JSON.parse(localStorage.getItem('listaPersonasLS'));
  if(listaPersonasLocal == null){
    listaPersonasLocal = listaPersonas;
  }
  return listaPersonasLocal;
}
