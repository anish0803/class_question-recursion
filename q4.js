// ---------Print ‘n’ numbers of Fibonacci series using recursion.-----

// ---------fibonachi series print 10th number-----------


function fibo (first,second,counter){
    if(counter<10){
        
        let c =first + second;
        return fibo (second,c,counter +1);
    }
    console.log(first);
}
fibo(1,1,1);



// ---------fibonachi series print 11th number-----------


// function fibo (first,second,counter){
//     if(counter<=10){
        
//         let c =first + second;
//         return fibo (second,c,counter +1);
//     }
//     console.log(first);
// }
// fibo(1,1,1);
