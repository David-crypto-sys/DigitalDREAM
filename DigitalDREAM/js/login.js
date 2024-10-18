//Asignar los datos del formulario a una variable
let loginForm = document.querySelector('#loginForm')

//Asignar un evento para enviar una informacion
loginForm.addEventListener('submit', (evento) => {
    evento.preventDefault()
    //
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    //
    let Users = JSON.parse(localStorage.getItem('users')) || []
    //
    let validUser = Users.find(user => user.email === email && user.password === password)

    if(!validUser){
        Swal.fire({
            icon: 'error',
            title: 'Error de datos',
            text: 'El usuario y/o clave son incorrectos, intentalo de nuevo'
        })
        return
    }

    Swal.fire({
        icon: 'success',
        title: 'Inicio de Sesion Exitoso',
        text: `Bienvenido de nuevo  ${validUser.name}`
    })
    setTimeout(() => {
        //Almacenar el usuario en el localStorage para recordar la sesion
    localStorage.setItem('login_success', JSON.stringify(validUser));
    window.location.href = 'index.html'
    },2000)
    
})