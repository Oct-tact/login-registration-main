/*function getNameLength(name:string): number {
    return name.length;
}
const Name = "ANUSHKA MATHUR";
const Length = getNameLength(Name);
console.log('the length of name is'+Length)*/


/*function addSpaceAfterSh(name:string) : string {
    const index = name.indexOf("sh");
    if (index ! == -1 && index+2 <name.length) {
        const modifiedName = name.slice(0,index+4) +" " + name.slice(index+4);
        return modifiedName; 
} else {
    return name;
}
}
const originalName = "Anushka";
const modifiedName= addSpaceAfterSh(originalName);
console.log (+modifiedName);*/

/*function getSubstringWithoutSh(name:string) : string {
    const index = name.indexOf("sh");
    if (index ! == -1) {
        const substring = name.substring(0,index);
        return substring; 
} else {
    return name;
}
}
const originalName = "Anushka";
const result= getSubstringWithoutSh(originalName);
console.log('result:' +result);*/

function getSubstringUpToPosition(name: string, position:number): string {
    if (position >= 0 && position< name.length){
    const substring = name.slice(0,position);
    return substring;

    
    } else {
        return name;
    }
}

const originalName = "Anushka";
const result1 = getSubstringUpToPosition(originalName,5);
const result2 = originalName.slice(-2);
const finalResult = result1 +" "+result2;
console.log('result:' +finalResult);

































