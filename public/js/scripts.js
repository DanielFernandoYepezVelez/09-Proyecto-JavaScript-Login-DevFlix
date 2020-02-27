/* VALIDAR LOS FORMULARIOS DEL LOGIN DEVFLIX */

/* Validar El Formulario */
const inputs = document.querySelectorAll('form .campo input');
// console.log(inputs);

/* Agregar un Listener a los inputs */
inputs.forEach(input => {
    input.addEventListener('blur', validarInput);
});

inputs.forEach(input => {
    input.addEventListener('input', validarInput);
});

function validarInput(e) {
    // console.log(e.target.value);
    const estado = ['valido', 'no-valido'];
    let clase;

    if (e.target.value.length === 0) {
        clase = estado[1];
    } else {
        clase = estado[0]
    }
    // console.log(clase);
    e.target.classList.remove(...estado);
    e.target.nextElementSibling.classList.remove(...estado);

    e.target.classList.add(clase);
    e.target.nextElementSibling.classList.add(clase);

    /* Inyectar el div con el error */
    if (clase === 'no-valido') {

        /* Construir Un Mensaje De Error */
        if (e.target.parentElement.nextElementSibling.classList[0] !== 'alerta') {
            const errorDiv = document.createElement('div');
            errorDiv.appendChild(document.createTextNode('Este Campo Es Obligatorio'));
            errorDiv.classList.add('alerta');

            /* Insertar El Error */
            // console.log(e.target);
            e.target.parentElement.parentElement.insertBefore(errorDiv,
                e.target.parentElement.nextElementSibling);
        }
    } else {
        /* limpiar el mensaje de error si existe */
        if (e.target.parentElement.nextElementSibling.classList[0] === 'alerta') {
            e.target.parentElement.nextElementSibling.remove();
        }
    }
}

/* MOSTRAR Y OCULTAR PASSWORD */
const mostrarPasswordBtn = document.querySelector('form .campo span');
// console.log(mostrarPasswordBtn);

mostrarPasswordBtn.addEventListener('click', e => {
    const passwordInput = document.querySelector('#password');

    if (e.target.classList.contains('mostrar')) {
        /* Mostrar Texto */
        e.target.classList.remove('mostrar');

        /* Cambiar El Texto */
        e.target.textContent = 'ocultar';

        /* Cambiamos a Password */
        passwordInput.type = 'text';

    } else {
        /* Mostrar Password */
        e.target.classList.add('mostrar');

        /* Cambiar El Texto */
        e.target.textContent = 'Mostrar';

        /* Cambiamos a Password */
        passwordInput.type = 'password';
    }
});