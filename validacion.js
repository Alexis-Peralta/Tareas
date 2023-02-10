const rfc = document.getElementById('rfc')
const button = document.getElementById('password')

button.addEventListener('click', (e) => {
    e.preventDefault()

    const data = {
        rfc: rfc.value
    }
console.log(data);

})