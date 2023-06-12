const containerClientes = document.getElementById('dropdown-menu');
let consultas = [];

//---------------------------------a tgraves de este renderizado se cargan los clientes en el menu desplegable--------------------------
function renderizarClientes () {
clientes.forEach((cliente) => {
    const divCard =document.createElement('li');
    divCard.classList.add('dropdown-item');
    divCard.innerHTML=cliente.nombre;
    divCard.setAttribute('onclick', `funcioncliente(${cliente.id})`);
    divCard.setAttribute('target',"_blank");
    
    containerClientes.appendChild(divCard);   //agrego los elementos divCard dentro de containerProducts
})
}

//-------------------------------funcion para mostrar la informacion del cliente--------------------------------------------------------
function funcioncliente (id) {
    const infoCliente = document.getElementById('infocliente');
    infoCliente.innerHTML ='';
    // console.log(infoCliente)
    // console.log(`prueba ${id}`); 
    
    const cliente =clientes.find((cliente) => cliente.id === id);
    console.log(cliente); 

    infoCliente.style.display='block';
    infoCliente.innerHTML +=`
       <h2>${cliente.nombre}</h2>
       <p>${cliente.descripcion}</p
       `;
}

 //-----------------------------constructor para generar array de objeto literales-------------------------------------- 

//  class Consultas {
//     constructor (nombre, email, consulta){
//         this.nombre= nombre;
//         this.email =email;
//         this.consulta = consulta;
//     }}


//-----------------------------funcion para cargar consultas----------------------------------------------------------------

    document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita que el formulario se envíe
  
    var formData = new FormData(event.target);  // Crea un objeto FormData con los datos del formulario
    
    // Accede a los valores de los campos del formulario
    var nombre = formData.get('nombre');
    var email = formData.get('email');
    var consulta = formData.get('consulta');
    var seleccion = formData.get('gridRadios');

    consulta = {nombre: nombre,
                email: email,
                consulta: consulta, 
                seleccion:seleccion}

    console.log(consulta)  
        
       
    consultas.push(consulta);    // agrego un elemnto al final del array
    localStorage.setItem('consultas', JSON.stringify(consultas));  //almaceno en localstorage las consultas
    
    event.target.reset();  // Limpia el formulario
  });

 