//array methodsv

// map filter foreach  



//Objects
// let details={
//     name:"manivardhan",
//     age:25,
//     lang:["eng","tel","hin"],
// }

// console.log(details["name"]);
// console.log(details["age"])
// console.log(details["lang"])
// console.log(details["language"])
// details.name="mani"
// details.city="hyd"
// console.log(details.name);
// console.log(details);



// Object.keys()
// Object.values()
// Object.entries()
// Object.seal()
// Object.freeze()
// Object.assign()



// str.slice()



// console.log(Object.keys(obj))

// console.log(Object.keys(obj).includes("age"));


// let vals=Object.values(obj)

// console.log(vals)


// let ent=Object.entries(obj)
// console.log(ent);



// Object.seal(obj)
// // obj.city="hyd"
// obj.age=60

// console.log(obj)


// Object.freeze(obj)
// Object.seal(obj)
// // obj.city="bnglr"

// obj.name="rajkumar"
// console.log(obj)

// console.log(Object.isFrozen(obj))
// console.log(Object.isSealed(obj))


// Object.assign()


// str.concat()   //// string concatination 
//arr.concat(arr2) ////  

// let obj1={
//     student:"raju",
//     id:1,
//     section:"A",
//     age:50,
//     subjects:["soc","sci","mat","tel","sanskrit","eng"]
// }


// let obj2={
//     city:"chennai",
//     address:{
//         drno:76,
//         area:"thambaram"
//     }
// }

// // console.log(obj+obj2);

// // Object.assign(obj,obj2)
// Object.assign(obj2,obj1)
// // console.log(obj1);
// console.log(obj2);



//Object.keys()
//values 
//entries
//seal
//freeze 
// isfrozen 
// isSealed
// assign   



// mob=mob.toString()
// // console.log(mob.reverse());

// // console.log(mob.length)

// // console.log(mob.toString()[mob.toString().length-1]);
// let rev=""
// for (let i=mob.length-1;i>=0;i--){
    //     rev=rev+mob[i]
    // }
    // console.log(rev===mob);
// let mob=321  ///1   32   3  0
// let last_digit= mob%10
// console.log(last_digit)

//sum=6 

// let sum=0
// while (mob>0){ ///321  32 3 0
//     let last=mob%10 //1  2 3
//     sum+=last //0+1  1 +2  3+3 
//     mob=Math.floor(mob/10)  //32.1 32 3.2 3 0.3 0
// }
// console.log(sum)


// let grade=8.9 
// console.log(Math.ceil(grade))


// let bill=100.5
// console.log(Math.floor(bill));




let mob=9848022338
let mob2=mob

let count=0

while (mob>0){
    count++
    mob=Math.floor(mob/10)
}
if (count==10){
    console.log( mob2,"valid")
}else{
    console.log(mob2,"invalid"); 
}
