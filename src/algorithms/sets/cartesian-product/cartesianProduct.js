function cartestianProduct(setA,setB){
    let productArray=[];
    for(var indexA=0;indexA<setA.length;indexA++){
        for(var indexB=0;indexB<setB.length;indexB++){
            productArray.push([setA[indexA],setB[indexB]]);
        }
    }
    return productArray;
}
let setA= [1,2,3];
let setB= ['x','y','z'];
console.log(cartestianProduct(setA,setB));

//Write a pretty print method.