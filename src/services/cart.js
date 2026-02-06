// quais ações meu carrinho pode fazer

//casos de uso
// => adicionar item no carrinho
async function addItem(userCart, item){
userCart.push(item);
}
// => calcular o total do carrinho
async function calculateTotal(userCart){
console.log("\nShope Cart TOTAL IS:");

const result = userCart.reduce((total, item)=> total + item.subtotal(),0);
console.log(`\n 📦️Total: ${result}`);

}
// => deletar item do carrinho 
async function deleteItem(userCart, name){
const index = userCart.findIndex((item) => item.name === name);
if(index !== -1){
    userCart.splice(index, 1);
}
}

// => remover um item - diminui um item
async function removeItem(userCart, item){
//encontra o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name)


//caso nao encontre o item
if (indexFound == -1) {
    console.log("item não encontrado!");
    return;
}
// item > 1 subtrair um item
if(userCart[indexFound].quantity > 1){
    userCart[indexFound].quantity -= 1
return;
}

//caso item = 1 deletar o item

if(userCart[indexFound].quantity == 1){
    userCart.splice(indexFound, 1);
return;
}
// transforma o indice visual do usuario, para o indice do backend
    const deleteIndex = index -1;


//é maior do que zero e se é menor do que o tamanho do carrinho
   if(index >= 0 && index < userCart.length){
        userCart.splice(deleteIndex, 1);
}



}
async function displaycart(userCart){
console.log("\nShope Cart List:");
userCart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - R$ ${item.price} |${item.quantity} x| Subtotal ${item.subtotal()}`)
})
}
//lista de desejos
async function displaywish(userCart){
    console.log("\nShope Wish List:");
userCart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.notification}`)
})
}


export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displaycart,
    displaywish
}
