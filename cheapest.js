const phones=[
    {Brand: 'Realme',camera:64, srorage:'128gb',color:'Gray',price: 34000},
    {Brand: 'Samsund',camera:48, srorage:'128gb',color:'Mare',price: 27000},
    {Brand: 'Xaomi',camera:128, srorage:'128gb',color:'White',price: 29000},
    {Brand: 'Oppo',camera:22, srorage:'64gb',color:'Black',price: 31000},
];

// function cheapestPhone(phones){
//     let cheapest= phones[0];
//     for(let i=0; i<phones.length;i++){
//         let phone= phones[i];
//         if(phone.price < cheapest.price ){
//             cheapest = phone;
//         }
//     }
//     return cheapest;
// }
// const selection=cheapestPhone(phones)
// console.log(selection);

function highCamera(phones){
    let cameras=phones[0]
    for(i=0;i<phones.length;i++){
        let phone=phones[i];
        if(phone.camera < cameras.camera){
            cameras=phone;
        }
    }
    return cameras;

}
let chosseCamera=highCamera(phones);
console.log(chosseCamera);