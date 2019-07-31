function factorialOfRecursive(number){
    if(number ===1)
    return 1;
    else{
        return number*factorialOfRecursive(number-1);
    }
    //The above code can be refactord as below: (trekhleb's solution)
    //return number > 1 ? number * factorialRecursive(number - 1) : 1;
}

console.log(factorialOfRecursive(12))


