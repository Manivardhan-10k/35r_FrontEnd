// console.log("loops")
//loop
//music 


// they are used to perform the same task multiple times 

// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")
// console.log("js is great")


//50  iteration
repetetions=50 

//for loop --when we know the exact no.of iterations
// while loop -- when we know the condition  , but the repetetetions are uncertain
//do while loop



//500  -for


//out of charge  - while 


// do while 




//for loop --  50 

//for (initialization;condition;increment/decrement){statement}
// great="js is great"
// for(let i=1;i<=50;i++){
//     console.log(i,great)
// }

// let sum=0
// for (let i=1;i<=100;i+=1){
//     sum+=i
//     console.log("hi")
// }
// console.log(sum) 



// for (let i=2;i<=100;i+=2){
//     // if (i%2===0){
//         console.log(i)
//     // }
// }


// for(let i=2;i<=100;){
//     console.log(i)
//     i+=2
// }


// for (var i=100;i>0;){
//     // console.log(i)
//     i-=1
// }
// console.log(i)




//while 

// while (condition){
//     statement
// }

// num=55

// while (num>0){
//     console.log(num)
//     num--
// }




//database 



// let completed=true 

// c=0
// while (completed==true){//false

//     if(c==10){  //1 2 3 4 5 6 7 8 9 10
//         completed=false 
//     }
//    console.log(c)//0 1 .....10
//    c++// 1 2 3 4 5 6 7 8 9 10 11

// }



///do while


// do{
//     statement
// }
// while(condition)


// count=1
// do{
//     console.log(count)
//     count++
// } while(count==1)


// subscriber=false
// count=0
// do{
//     console.log("episode ",count+1)
//     count++

// }while(subscriber==true && count<10)




//while -- finding the prime numbers 

// 100
//1 2 4 5 10 20 25 50 100
// num=10 //11
// fact=0
// for (let i=2;i<=num/2;i++){
//     if(num%i==0){
//         fact++//1 2 3 4 5 6 7
//     }
// }
// if (fact==0){
//     console.log("prime")
// }else{
//     console.log("not prime")
// }

//2 3 5 7 11 13 17 19 23 29 31 37 41 43 53 57 59 

num=10000  //109

prime_not_found=true

while (prime_not_found==true){ 
    num++//109 
    fact=0
    for(let i=2;i<=num/2;i++){
        if(num%i==0){
         fact++//
        }
    }
    if(fact==0){
        console.log(num,"is the next prime")
        prime_not_found=false
    }
}

