/* 
1. if ticket numbers is less than 100, per ticket price: 100
2. if ticket numbers is more than 100, but less than 200. First 100 tickets will be 100/ticket. 
rest tickets will be 90 taka per piece
    first 100 ---->100tk
    rest ----> 90tk
3. if you purchase more than 200 tickets
    first 100 ---> 100tk
    101-200 ---> 90tk
    200+ ----> 70tk
*/

function ticketPrice(ticketQuntity){
    const first100ticket=100;
    const second100ticket=90;
    const restticket=70;

    if(ticketQuntity <= 100){
        const price=ticketQuntity * first100ticket;
        return price;
    }
    else if(ticketQuntity <= 200 ){
        const first100= first100ticket*ticketQuntity;
        const restPrice= second100ticket* ticketQuntity;
        const total=first100+restPrice;
        return total;
    }
    else{
        const first100= first100ticket*ticketQuntity;
        const second100=second100ticket*ticketQuntity;
        const restPrice= restticket* ticketQuntity;
        const total=first100+second100+restPrice;
        return total;
    }
    
}
const totalPrice=ticketPrice(220)
console.log(totalPrice);

let arr=[23,54,67]
arr[arr.length-1]=5;
console.log(arr);