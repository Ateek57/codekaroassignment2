//question 1
function number(n){
    if(n>0){
        console.log("number is positive")//condition to check number is positive
    }
    else if(n<0){
        console.log("number is negative")//condition to check number is negative
    }
    else if(n==0){
        console.log("number is zero")//condition to check number is zer0
    }
}
number(2)
number(-2)
number(0)


//question 2
function factorial(n){
    let fact = 1;
    for(let i=n; i>=1;i--){
        fact = fact*i;//calculating the factorial after every iteration
    }
    console.log('factorial of number',fact)
}
factorial(5)
factorial(4)

// question 3

function greaternum(a,b){
    if(a>b){ //condition to check number is greater 
        console.log("a is greater",a)
    }
    else{
        console.log("b is greater",b)
    }
}
greaternum(4,6)

//question 4

function pallindrome(myString){
    let num = myString;
    let rev = "";
    for(var i = myString.length-1; i>=0; i--){
        rev= rev+myString[i];// access every element of the string and stored in rev variable
    }
    if(num === rev){// checking the condition for pallindrome
        console.log("string is pallindrome")
    }
    

}
pallindrome("kanak")

//question 5
function isPrime(num) {
    if (num <= 1) { // if no is less than of eual to 1 it is not considered as a prime number in such case
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function printPrimesInRange(start, end) {
    for (var i = start; i <= end; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

// Prime numbers between 1 and 50
printPrimesInRange(1, 10);

// question6

function calculator(num1,num2,operator){
    if(operator == '+'){
        console.log(num1+num2)
    }
    else if(operator == '-'){
        console.log(num1-num2)
    }
    else if( operator == '*'){
        console.log(num1*num2)
    }
    else if(operator == '/'){
        if (num2%2==0){
            console.log(num1/num2)
        }
        else{
            console.log("not divisoble by num2")
        }

    }

    else {
        console.log("invalid operator")
    }
}

calculator(16,4,'+')
calculator(6,4,'-')
calculator(2,3,'*')
calculator(15,5,'/')
calculator(4,2,'%')

// question7 

function vowelscount(mystring){
    var count = 0
    for(let i=0;i<=mystring.length; i++){
        if(mystring[i]=='a'||mystring[i]=='e'||mystring[i]=='i'||mystring[i]=='o'||mystring[i]=='u'){
            count+=1
        }
        
    }
    console.log("count of vowels",count)
}
vowelscount("aeroplane")

//question 8

function perfectnumber(n){
    var temp = n;
    sum=0
    for(let i=1; i<n;i++){
        if(n%i==0){
            sum+=i

        }

    }
    if(temp==sum){
        console.log("number is perfect number",sum)
    }
}
perfectnumber(28)

//question 9
function fibonaci(n){
    if(n<=0){
        console.log("please provide a positive number")
    }
    var fibseries = [0,1];
    for(var i = 2;fibseries[i-1]+fibseries[i-2]<=n;i++){
        fibseries[i]=fibseries[i-1]+fibseries[i-2]
    }

    console.log("fibonacci series upto n",fibseries.join(","))
}
fibonaci(10)

//question 10
function multiplication(n){
    for(var j =1;j<=n;j++){
        for(let i=1;i<=10;i++){
            var num=j*i
            console.log("multiplication of num is :",num)
        }
    }
}
multiplication(2)






