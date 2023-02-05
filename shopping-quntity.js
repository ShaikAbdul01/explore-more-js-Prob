function shopping(shoppingCart){
    let sum=0;
    for(let i =0; i<shoppingCart.length;i++){
        let element=shoppingCart[i];
        let totalQuantity=element.price*element.quantity;
        sum=sum+totalQuantity;      
    }
    console.log('Total cost: ',sum);
}
const shoppingCart = [
    { name: 'shoe', price: 1200, quantity: 2 },
    { name: 'shirt', price: 2200, quantity: 5 },
    { name: 'pant', price: 3700, quantity: 4 },
    { name: 'belt', price: 600, quantity: 3 },
];
let totalPrice=shopping(shoppingCart);
console.log(totalPrice);
