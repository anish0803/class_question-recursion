// -------Given a number n, print numbers from 1 to n using recursion.------

function range (a,b){
   
    console.log(a);
    while(a<b){
        return range (a+1,b);
    }
}
range (1,10);