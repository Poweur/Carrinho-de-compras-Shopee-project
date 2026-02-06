//CASOS DE USO DOS ITENS

//=> criar item com subtotal certo
async function createItem(name, price, quantity){
    return{
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    }
}
//=> item em falta
async function stockItem(name,price ,notification){
return{
    name,
    price,
    notification,

}
}


export {createItem,
    stockItem}