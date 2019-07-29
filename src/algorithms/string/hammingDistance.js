function hammingDistance(stringOne,stringTwo){
    if(stringOne.length!==stringTwo.length){
        throw new Error("Please Input two strings of equal length");
    }
    let distance = 0;
    for(var i=0;i<stringOne.length;i++){
        if(stringOne[i]!==stringTwo[i]){
            distance++;
        }
    }
    return distance;
}

console.log(hammingDistance('2173896','2233796'));