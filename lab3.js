let cartQuantity =0;
let h2 = document.getElementById('quantity');

function show_quantity(){
    h2.textContent = cartQuantity;
}

function addtocart(){
    cartQuantity++;
}

function addtwo(){
    cartQuantity += 2;
}

function addthree(){
    cartQuantity += 3;
}

function resetcart(){
    cartQuantity = 0;
}