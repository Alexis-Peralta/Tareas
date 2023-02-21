const tabla = document.querySelector('#table-home tbody');
let nuevoArray = [ ]
// function datatable() {
//     fetch('ordenes.json')
//         .then(respuesta => respuesta.json())
//         //Incicamos el formato en el que desea obtener la informacion
//         .then(ordenes => {
//             const row = document.createElement('tr');
//             row.innerHTML += `
//             <td>${ordenes.orden1.id}</td>
//             <td>${ordenes.razon_social}</td>
//             <td>${ordenes.buying_state}</td>
//             <td>${ordenes.total_price}</td>
//             <td>${ordenes.comments}</td>
//             `;
            
//             tabla.appendChild(row);
//         })  //Mostramos la informacion
// }

async function datatable2 () {
    const datos = await fetch('ordenes.json')
    const newObject = await datos.json()
    const newArray = Object.entries(newObject)
    
    return newArray
}
const respuesta = datatable2()

respuesta.then(respuesta => respuesta.map((i)=> {
    const row = document.createElement('tr')
    row.innerHTML += `
            <td>${i[1].id}</td>
            <td>${i[1].razon_social}</td>
            <td>${i[1].buying_state}</td>
            <td>${i[1].total_price}</td>
            <td>${i[1].comments}</td>
            `;
            
            tabla.appendChild(row);
}))

// const array = [1,2,3,4,5,6,7,8]
// console.log(array)
// array.forEach((i)=>{
//     i=i+2
// })
// console.log(array)
// const datos2 = array.map((i)=>{
//     console.log(i)
//     return i
// })
// console.log(datos2)

// const ejemplo = {
//     uno : 'ejemplo1',
//     dos : 'ejemplo2',
//     tres : 'ejemplo3'
// }

// const {uno,dos,tres} = ejemplo
// console.log(ejemplo.uno)
// console.log(ejemplo['uno'])
// console.log(uno)