//
let user = JSON.parse(localStorage.getItem('login_success')) || false


//
if(!user)
    {
        Swal.fire({
            icon: 'info',
            title: 'Iniciar Sesion',
            text: 'Debes iniciar sesion para acceder a esta pagina',
            confirmButtonText: 'Ir a iniciar Sesion',
            showCancelButton: false,
            allowOutsideClick: false
        }).then((result) => {
            if(result.isConfirmed){
                window.location.href = 'login.html';
            }
        });
    }

    let logout = document.querySelector('.logout')

    logout.addEventListener('click' , () =>{
        Swal.fire({
            icon: 'info',
            title: 'Cerrar Sesion',
            text: '¿Estas seguro de que quieres cerrar sesion?',
            showCancelButton: true,
            confirmButtonText: 'Si, cerra sesion',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if(result.isConfirmed){
                localStorage.removeItem('login_success');
                Swal.fire({
                    icon:'success',
                    title: 'Sesion cerrada',
                    text:'Tu sesion ha sido cerrada correctamente.',
                    confirmButtonText: 'ok'
                }).then(() => {
                    window.location.href = 'login.html';
                });
            }
        });
    });
