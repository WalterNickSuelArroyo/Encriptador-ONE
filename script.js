const textArea = document.querySelector(".text-area-izquierda");
const mensaje = document.querySelector(".text-area-derecha");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnDesencriptar() {
    const textoAdesencriptar = textArea.value;
    const textoDesencriptado = desencriptar(textoAdesencriptar);
    mensaje.value = textoDesencriptado;
    textArea.value="";
}

function btnCopiar() {
    const textoCopiado = mensaje.value;
    textArea.value = textoCopiado;
    mensaje.value = "";
}


function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}






const bdark = document.querySelector('#bdark');
const dmBody = document.querySelector('body')
const dmAtenuar = document.querySelector('#atenuar');
const dmtextAreaIzq = document.querySelector('.text-area-izquierda');
const dmtextAreaDer = document.querySelector('.text-area-derecha');
const dmTextoFooter = document.querySelector('.div-texto-footer');
const dmBotonEncriptar = document.querySelector('.boton-encriptar');
const dmBotonCopiar = document.querySelector('.boton-copiar');
const dmLogo = document.querySelector('.img-logo');
const dmTema = document.querySelector('.img-tema')

bdark.addEventListener('click', e => {
    dmAtenuar.classList.toggle('encima-imagen');
    dmBody.classList.toggle('dmBody');
    dmtextAreaIzq.classList.toggle('dmTextareaIzq');
    dmtextAreaDer.classList.toggle('dmTextareaDer');
    dmBotonEncriptar.style.removeProperty('background');
    dmBotonEncriptar.classList.toggle('encript');
    dmBotonCopiar.classList.toggle('copy');
    dmLogo.classList.toggle('dmLogo');
    dmTema.classList.toggle('dmTema');
    dmTextoFooter.classList.toggle('dmTextoFooter');
    
    /*dmbtnEncriptar.classList.toggle('dmbtn-encriptar')
    dminformacion.classList.toggle('dminformacion')
    dmmensaje.classList.toggle('dmmensaje')*/
})






document.getElementById('hablar').addEventListener("click",()=>{
    decir(document.getElementById("texto").value);
});
function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}