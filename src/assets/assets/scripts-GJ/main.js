//utilizamos la libreria de scrollreveal.js
window.sr = ScrollReveal();

sr.reveal('#ul-menu', {
    duration: 2500,
    origin: 'bottom',
    distance: '-100px'

})

sr.reveal('.main', {
    duration: 3000,
    origin: 'rigth',
    distance: '-300px'
})

sr.reveal('#Seccion-Habilidades', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
})

sr.reveal('#Seccion-Proyectos', {
    duration: 2000,
    origin: 'bottom',
    distance: '-100px'
})


sr.reveal('#Seccion-Contacto', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
})


//---------Termino el scroll reveal--------------

//--Para deplegar o no el menu
function desplegar_plegarMenu() {
    const menu = document.getElementById("menu-sandwich");
    menuVisible = false;

    menu.addEventListener("click", (e) => {


        const menu = document.getElementById("ul-menu");
        if (menuVisible == true) {
            menu.style.height = "0%";
            menuVisible = false;
        }
        else {
            menu.style.height = "50%";
            menuVisible = true;
        }

    });
}
desplegar_plegarMenu();

//---------------------------------

//--Para plegar el menu cuando selecciono una opcion
const ulMenu = document.getElementById("ul-menu");
ulMenu.addEventListener("click", (e) => {
    ulMenu.style.height = "0%";
});
//---------------------------------
const btnSubmit = document.getElementById("submit");
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    const email=document.getElementById('email');
    const textArea= document.getElementById('text-area');

    // Esto manda el Correo
    fetch("https://formsubmit.co/ajax/gaspygj@gmail.com", {
            method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            Email: `${email.value}`,
            Mensaje: `${textArea.value}`
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));


    swal({
        title: 'Exito',
        text: 'Correo enviado correctamente',
        icon: 'success'
    });

    email.value='';
    textArea.value='';

});




//---------Apretar el boton submit--------------




