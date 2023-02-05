const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul',
 'babul', 'abul', 'kabul', 'gabul', "cabul", 'babul', 'abul', 'abul'];
 
 function duplicat(names){
    let unique=[];
    for(let i=0;i<names.length;i++){
        let name=names[i]
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
 }
 let uniqueName=duplicat(names);
 console.log(uniqueName)