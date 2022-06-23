// ------Write a Javascript program to count the number of digits a given number has using recursion.---------



function countofDigit(num,count){
    if(num > 0){
        count ++ ;
        num = Math.floor(num/10);
        return countofDigit(num,count);
    }
    console.log(count);
}
countofDigit(123456,0);