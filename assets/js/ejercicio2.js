let cart1 = document.querySelector(".sticker1");
let cart2 = document.querySelector(".sticker2");
let cart3 = document.querySelector(".sticker3");
let compra = document.querySelector(".resultadoCompra");
cart1.value = "0"
cart2.value = "0"
cart3.value= "0"
let stickerTotal = 0


function comprando (){
    carro = [cart1.value, cart2.value, cart3.value];
    stickerTotal = 0;
    for (let cart of carro) {
        if(!isNaN(parseInt(cart))) {

            stickerTotal = parseInt(cart) + stickerTotal
            compra.innerHTML = ("Llevas "+ stickerTotal + " stickers en tu carrito :)")
        }
        if (stickerTotal >= 11){
            compra.innerHTML = ("Excediste el máximo de stickers :(" )
        }
    }
}

cart1.addEventListener("input", comprando);
cart2.addEventListener("input", comprando);
cart3.addEventListener("input", comprando);