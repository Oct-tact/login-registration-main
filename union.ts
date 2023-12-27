function combine(input1:number|string,input2:number|string){
    const result = input1+input2;
    return result;
    
}
const combinedAges = combine(30,26);
console.log(combinedAges);
const combinedNames = combine('MAX','ANA');