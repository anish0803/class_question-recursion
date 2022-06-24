
// Given a number n, print all the odd numbers from 1 to n using recursion.



function odd (a,b){
   
    if (a<=b) {
        if (a%2!==0){
        console.log(a);
        return odd (a+1,b);
    }
    return odd (a+1,b);
}
}

odd(1,9);