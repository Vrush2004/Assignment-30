const quantityEle = document.getElementById("quantity")

function inc(){
    let quantity  = parseInt(quantityEle.innerText)
    quantityEle.innerText = ++quantity;
}
function dec(){
    let quantity  = parseInt(quantityEle.innerText)
    if(quantity > 1){
        quantityEle.innerText = --quantity;
    }
}