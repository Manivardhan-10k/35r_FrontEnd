// Loops:


// for 
// while 
// do-while 

// control statements :
// they control the execution of loop 


//break

// let val=55
// for (let i=1;i<=100;i++){
//     if (i===val){
//         break
//     }
//     console.log(i);  
// }


// let arr=["apple","ball","cat","dog","mat","rat","bat"]

// let word="cat"


// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
//     if(arr[i]===word){
//         break;
//     }  
// }

// 1 X 1 = 1

// for (let i=1;i<=5;i++){ //1

//     for (let j=1;j<=10;j++){ // 1 - 10
//         console.log( `${i}  X  ${j} = ${i*j}`); 
//         if(j==2){
//             break
//         }
//     }

// }


//continue

// for (let i=1;i<=20;i++){
//     console.log(i)
//     if(i==14){
//         continue
//     }
// }




// 2.3 --> Math.floor()
// 2.1 --> Math.ceil()



// console.log(Math.PI);


// let num=2.4   //0-4  lowest >=5 highest
// console.log(Math.abs(num))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))
// console.log(Math.round(num))



// console.log(Math.max(10,100,1000,1001,5000))
// console.log(Math.min(10,100,1000,1001,5000))


// console.log(Math.max("hi","you"));


// console.log(2**2)
// console.log(Math.pow(2,3))
// console.log(Math.sqrt(30))


//random




// console.log(Math.floor(num))
// 4523

// let otp=""
// for (let i=0;i<6;i++){
//     let num=Math.random()*10
//     num=Math.floor(num)
//     otp+= num
//     if(otp.length===3){
//         otp+="-"
//     }
// }
// console.log(otp);



// console.log(Math.sin(5));




// let num=123  //3      32  321 

// let rev=0
// while (num!=0){//  123 12 1 0 
//     let digit=num%10 //3  2   1
//     rev= rev*10+digit // 0*10+3 3 3*10+2 32  32*10+1 321
//     num=Math.floor(num/10)  //123/10 12.3 12  12/10 1.2 1 1/10 0.1  0
// }
// console.log(rev)


//ARMSTRONG NUMBER 
let num=153      //1**3 + 5**3+3**3     1+125+27    153
let temp=num
let temp2=num
//sum of each digit to the power of length of num   and if it is equal to the number itself
let len=0
while (num>0){//153  15 1 0
    len++  //1 2 3
    num=Math.floor(num/10)    //15.3  15  1.5 1 0.1 0
}
console.log(len,temp)
let sum=0 
while(temp>0){//153  15 1 0
    let digit=temp%10 // 3 5 1
    sum+= Math.pow(digit,len) // 3**3   27 5**3   27+125  152+1 153
    temp=Math.floor(temp/10)// 15.3 15 1.5 1 0.1 0
}
console.log(sum,temp2)
if (sum===temp2){
    console.log(`${temp2} is a armstrong number`);
}else{
    console.log(`${temp2} is not a armstrong number`);

}




