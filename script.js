/* ================================
   CONFIGURACIÓN — tu enlace oficial
================================ */

const ENLACE = "https://yorbax.segurosvida.site/";


/* ================================
   PASO 1 — COPIAR EL ENLACE
================================ */

const enlaceInput = document.getElementById("enlaceInput");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeCopiado = document.getElementById("mensajeCopiado");
const tildePaso1 = document.getElementById("tildePaso1");

enlaceInput.value = ENLACE;

function copiado() {
    mensajeCopiado.classList.add("mostrar");
    tildePaso1.hidden = false;
    botonCopiar.textContent = "✓ ¡Enlace copiado!";

    setTimeout(function () {
        mensajeCopiado.classList.remove("mostrar");
        botonCopiar.textContent = "Copiar enlace ahora";
    }, 2800);
}

function copiarConSeleccion() {
    enlaceInput.select();
    enlaceInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    copiado();
}

botonCopiar.addEventListener("click", function () {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(ENLACE).then(copiado, copiarConSeleccion);
    } else {
        copiarConSeleccion();
    }
});


/* ================================
   PASO 2 — TUTORIAL AMPLIABLE
================================ */

const tutorial = document.getElementById("tutorial");
const mediaVacia = document.getElementById("mediaVacia");
const abrirTutorial = document.getElementById("abrirTutorial");
const cerrarTutorial = document.getElementById("cerrarTutorial");
const visor = document.getElementById("visor");

function mostrarTutorial() {
    tutorial.classList.add("visible");
    mediaVacia.hidden = true;
}

tutorial.addEventListener("load", mostrarTutorial);

if (tutorial.complete && tutorial.naturalWidth > 0) {
    mostrarTutorial();
}

abrirTutorial.addEventListener("click", function () {
    if (!tutorial.classList.contains("visible")) return;
    visor.hidden = false;
    cerrarTutorial.focus();
});

function cerrarVisor() {
    visor.hidden = true;
    abrirTutorial.focus();
}

cerrarTutorial.addEventListener("click", cerrarVisor);

visor.addEventListener("click", function (evento) {
    if (evento.target === visor) cerrarVisor();
});

document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape" && !visor.hidden) cerrarVisor();
});