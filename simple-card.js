
function shopping(shoppingCart){
    let sum=0;
    for(let i =0; i<shoppingCart.length;i++){
        let element=shoppingCart[i];
        sum+=element.price;
        
    }
    console.log('Total cost: ',sum);
}
const shoppingCart = [
    { name: 'shoe', price: 1200 },
    { name: 'shirt', price: 2200 },
    { name: 'pant', price: 3700 },
    { name: 'belt', price: 600 }
];
let totalPrice=shopping(shoppingCart);
// console.log(totalPrice);

