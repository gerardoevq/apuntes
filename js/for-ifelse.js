let numeros=[1,2,3,4,5,6,7,8,9]
/*for (let index = 0; index <=5; index++) {
    console.log(index)   
    
}*/
for (let index = 0; index < numeros.length; index++) {
    if (index%2===0) {
        console.log(`${index} es numero par`)
    }
    else {
        console.log(`${index} es numero impar`)
    }
}