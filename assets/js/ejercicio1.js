let borde = document.querySelector(".imagen")

function cambiarBorde () {
    if(!borde.classList.contains('borde')){
        borde.classList.add('borde');
    }
    else{
        borde.classList.remove('borde');
    }
}
borde.addEventListener("click", cambiarBorde);