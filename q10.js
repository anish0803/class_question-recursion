






// Given a number n, print all the even numbers from 1 to n using recursion.



function even (a,b){
   
  if (a<=b) {
      if (a%2!==1){
      console.log(a);
      return even (a+1,b);
  }
  return even (a+1,b);
}
}

even(1,10);







// function Even(a, b){
//      if (b < a){
    
// return ;
//     }
//      if (b % 2 == 0 ) {
   
//     Even(a, b - 2);
//     }else {
//      Even(a, b - 1);
//     }
//      if (b % 2 == 0) {
   
//        console.log(b);
//     }
// }
// Even(1,20);