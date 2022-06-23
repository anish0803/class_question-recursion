// -------------------Print factorial of a number using recursion.--------------



function y (num,fact){
    if (num > 0){
        fact *= num;
        // console.log(num);
        return y (num - 1,fact);
        }
    return fact ;
    }
console.log(y(5,1));