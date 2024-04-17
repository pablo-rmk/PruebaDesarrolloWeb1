let enviar = document.getElementById('enviar');
enviar.addEventListener('click', () => {

    let titulo = document.getElementById('tituloInput').value;
    let email = document.getElementById('emailInput').value;
    let texto = document.getElementById('textArea1').value;

    if (titulo == '' || email == '' || texto == '') {
        alert('Por favor complete todos los campos antes de enviar.')
    } else {
        alert('¡Formulario enviado exitosamente!');

    }



});