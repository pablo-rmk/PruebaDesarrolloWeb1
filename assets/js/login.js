function obtenerDatos() {

    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;

    if (user == '' || pass == '') {

        alert('Los campos Correo Electrónico y Contraseña no pueden estar vacíos.');

    } else {
        const usuario = {
            user: user,
            pass: pass
        }

        console.log(usuario)
        console.log(usuario.user);
        console.log(usuario.pass);

        alert(`¡Bienvenido ${usuario.user}!`)
    }


}