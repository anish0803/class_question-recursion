function Even(a, b){
     if (b < a){
    
return ;
    }
     if (b % 2 == 0 ) {
   
    Even(a, b - 2);
    }else {
     Even(a, b - 1);
    }
     if (b % 2 == 0) {
   
       console.log(b);
    }
}
Even(1,20);