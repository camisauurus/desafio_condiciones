let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let num3 = document.querySelector(".num3");
let resultado = document.getElementById("resultado");
let botonVerificar = document.getElementById("verificar");

botonVerificar.addEventListener("click", function () {
    let claveIngresada = num1.value + num2.value + num3.value;

    if (claveIngresada === "911") {
        resultado.innerText = "Password 1 correcta";
        resultado.style.color = "#00ff00";
    } else if (claveIngresada === "714") {
        resultado.innerText = "Password 2 correcta";
        resultado.style.color = "green";
    } else {
        resultado.innerText = "Password incorrecta";
        resultado.style.color = "red";
    }
});