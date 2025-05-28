//functions

// it is a reusable block of code  

// 4 types 
// default/named function 

// function func_name(..parameters){

//     code block
// }
// func_name(..arguments)

// 2.arrow function 

// const name= (params)=>{code block}
// name(args)

// // 3. anonymous 

// const name=function(params){
// code
// }
// name(args)


// 4.IIFE
// (function(params){code})(args)




//callback 

// function two(){
//     console.log("f2");
    
// }

// function one(){
//     console.log("f1"); 
//     if (1==2){
//         two() 
//     }
// }
// one()


//Higher Order Function
//a function which takes another funciton or returns a function as output

// function login(u,p,func){
//     if (u && p){
//         func()
//     }else{
//         console.log("enter credentials");    
//     }
// }

// function show_data(){
//     console.log("data");
// }
// login("user","pass",show_data)


// setTimeout( ()=>{
//     console.log("times up!!");
// },1000);


// setInterval(()=>{

//     console.log("drink water");
    
// },1000*60*15)

//iteration methods
// Map
// filter 
// forEach
// reduce


// let array=[1,2,3,4,5,6,7,8]

// let new_array=array.map((value,index,array)=>{
//     return  (value%2==0 &&  value<5)
// })
// console.log(new_array)

// let filtered_array=array.filter((val,ind,arr)=>{
//     return (val%2==0 &&  val<5)
// })

// console.log(filtered_array);

// console.log(array);


//they both are used for iteration 
//they dont modify the original array 
//map returns  boolean based on condition 
//filter returns values that satisfies the condition




// let arr1=[1,2,3,4,5,6,7]
// arr1.forEach((v,i,a)=>{
//    console.log(v*3)
// })
// console.log(arr1);


// reduce 

// let arr=[1,2,3,4,5,6,7,8,9,10]

// arr.reduce((pre,cur,ind,arr)=>{
//     return pre+cur
// },0)

// console.log(arr.reduce((pre,cur,ind,arr)=>{
//     return pre+cur
// },0));


// console.log(arr.reduceRight((pre,cur)=>{
//  console.log(pre+cur)
//  return pre+cur
// },0))



// let arr=[{price:100},{price:250},{price:300},{price:175}]
// let final_price=arr.reduceRight((prev,curr)=>{
//     return prev+curr.price
// },0)
// console.log(final_price)

//truthsy values
// not 0, non emtpy string , true, [],{}


//falsy values
// 0, "", false,NaN,null,undefined

// let username= []
// if(username){
//     console.log("true")
// }else{
//     console.log("false");    
// }
// console.log("ba"+ +"."+"a")

// global scope 
// local scope /block scope 
// script scope

// debugger;

// a=10
// console.log(a)
// var a
// let b
// b=20
// console.log(b)



// debugger
// for (var a=0;a<5;a++){
//     console.log(a)
// }
