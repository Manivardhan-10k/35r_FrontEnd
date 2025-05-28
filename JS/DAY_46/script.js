// DATA TYPES: 

//instagram 

//text   -name
//number   age,mob
//true  -- yes no
//


// language=Tel,hin,eng --collection   




// primitive
//string 
//it is a collection of characters enclosed in '' or ""   string literals ``
// eg

// let name='javascript'
// let username="manivardhan"
// console.log(typeof(name))
// console.log(typeof(username))

// let language=`telugu`
// console.log(typeof(language))

// let fact=' java script is one of the "greatest" languages'
// console.log(fact)


// let bio=`this is a biography of  shiva
//          shiva is born`

//immutable 

// let name="apple "
//we can access the string using index 
//index starts from 0
// a-0  p-1  p-2 l-3 e-4
// using []
// console.log(name[0])
// name[0]="A"
// console.log(name[4]) 

// console.log(name.length)

// name="Apple"
// console.log(name)







//number

// console.log(typeof(-5))
// console.log(typeof(-5.0))
// console.log(typeof(5.000000000))

// let mob=9848022338 
// console.log(typeof(mob))
// console.log(mob.length)
// mob=9848122338
//boolean
// true 
// false
// console.log(typeof(true))
// console.log(typeof(false))
//null 
// console.log(typeof(null))
//undefined
// console.log(typeof(undefined))

// non-primitive
// are used to store the collection of data
//array
//represented in [ele1,ele2......elen]

// let lang=["tel","hin","eng"]// homogenous array

// console.log(typeof(lang))
// console.log(lang[3])

// let details=["mani",25,"hyd",true,["tel","hin","eng"]]  ///heterogenous
// //mutable 
// details[0]="manivardhan"
// details[2]="sec"
// console.log(details)

//object
//it is used to store collection data 
// the data stored in key value pairs inside {}


// details={
//     name:"manivardhan",
//     age:25,
//     city:"hyd",
//     address:{
//         drno:76,
//         street:"bank street",
//         location:"hphb"
//     },
//     lang:["tel","hin","eng"],
//     emp:true
// }
// console.log(details.length)

// console.log(details['name'])
// console.log(details['lang'])
// console.log(details.emp)


// details['age']=24 
// console.log(details)
// details['email']="manivardhan@gmail.com" 
// console.log(details)





// let roll_no=[4,5,6,7,8]
// roll_no[0]=1
// roll_no[5]=9
// roll_no[20]=24 
// console.log(roll_no[20])


// 2-types  

// primitive 
//string number boolean null undefined 
//array object





// let num=[1,2,3,4,5,6,7,8,9,10]

// for in loop --  it returns the key in the collection
// for(iterable in num){
//     console.log(iterable)
// }


// let details={
//     name:"manivardhan",
//     age:25,
//     city:"hyd",
//     address:{
//         drno:76,
//         street:"bank street",
//         location:"hphb"
//     },
//     lang:["tel","hin","eng"],
//     emp:true
// }

// for(iterable in details){
//     console.log(iterable)
// }



// let num=[1,2,3,4,5,6,7,8,9,10]

// for(iterable of num){
//     console.log(iterable)
// }


// let details={
//     name:"manivardhan",
//     age:25,
//     city:"hyd",
//     address:{
//         drno:76,
//         street:"bank street",
//         location:"hphb"
//     },
//     lang:["tel","hin","eng"],
//     emp:true
// }

// for(iterable in details){
//   console.log(  details[iterable])
// }



// let sentence="js is the greatest language"


// for(let i=0;i<sentence.length;i++){
//     if(sentence[i]!==" "){
//         console.log(sentence[i])
//     }
// }


// control statement
// break 
//continue


let page=document.getElementsByTagName("body")[0]
let heading=document.createElement("h1")
heading.innerHTML="JS is the greatest language"
heading.style.color="red"
heading.style.fontSize="100px"

page.appendChild(heading)
let button=document.getElementById("btn")
button.innerText="click"

button.addEventListener("click",()=>{
    heading.style.color="blue"
    heading.style.fontSize="50px"
    heading.style.display="none"
})

