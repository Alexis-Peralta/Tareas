const datos = { //OBJETOS
    rfc: ''
}

// const datos3 = {
//     regimen : {
//         fisica : "RESICO",
//         moral : "Ley general de personal morales"
//     }
// }

// console.log(datos3.regimen.fisica)
// console.log(datos3['regimen'].fisica)
// const {regimen} = datos3
// console.log(regimen['fisica'])


//EVENTOS
const rfc = document.querySelector('#rfc')
const formulario = document.querySelector('.formulario')


rfc.addEventListener('input', LeerTexto)
formulario.addEventListener('submit', Evento);

//EVENTO SUBMIT

function LeerTexto(e){

    datos[e.target.id] = e.target.value

}

function Evento(evento){
        evento.preventDefault()
        //VALIDACION
        const {rfc} = datos
        // const datos1 = datos.rfc
        // const datos2 = datos['rfc']
        if (datos === '') {
            MostrarError('Esta vacio')
        }

        console.log('Se enviara tú nueva contraseña a: ' + rfc)
}

function MostrarError(mensaje){
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error')

    formulario.appendChild(error);
}


// function MostrarEnvio(alerta){
//     const envio = document.createElement('P');
//     error.textContent = alerta;
//     error.classList.add('envio')

//     formulario.appendChild(envio);
// }
