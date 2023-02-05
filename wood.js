/* 
fixed: per item wood requirements 
1. chair --> 3 cft
2. table --> 10 cft
3. bed --> 50 cft
vary: quantity
*/

function woodQuntity(chairQuntity, tableQuntity, bedQuntity) {
  const chairWood = 3;
  const tableWood = 10;
  const bedWood = 50;

  let totalChairWood = chairQuntity * chairWood;
  let totalTableWood = tableQuntity * tableWood;
  let totalBedWood = bedQuntity * bedWood;
  console.log("Total Chair Wood : ", totalChairWood);
  console.log("Total Table Wood : ", totalTableWood);
  console.log("Total Bed Wood : ", totalBedWood);

  let totalWood = totalChairWood + totalBedWood + totalTableWood;

  return totalWood;
}

const totalWood = woodQuntity(5, 13, 17);
console.log('Total Wood: ',totalWood);
