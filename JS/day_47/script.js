// datatypes:


//  primitive ---> numbers strings boolean null undefined
//  non-primitive --->arrays objects 



//string--> it is a collection of chars enclosed in  '' or  ""  or ` `  (back ticks  or template literals)

//  it is immutable  -->can't be modified 
//it is accessed using indexes 


// let email="js@greatest"
// console.log(email[0])

// //a0p1p2l3e4  
// console.log(email[email.length-1])




// console.log(greeting.charAt(5))

//code --ASCII  value 

//ASCII- american standard code for information interchange

// 65- 90 --->uppercase characters    65-A  66-b 67
//97-122 --->lowercase characters
//48-57 --->numbers
//0-127

// console.log(greeting.charCodeAt(0)) 

// console.log("helloworld".charCodeAt(3))


// console.log(greeting.at(20))

//slice 

// let greeting="Good afternoon" //0 1   ....n
// console.log(greeting.slice(5,9+1))


// console.log(greeting.slice(-9,-4))

// console.log(greeting.substring(-5))


//uppercase

// let title="Java Script"
// let caption="designs made dynamic"
// title2=title.toUpperCase()
// console.log(title2)

// title2=title.toLowerCase()
// console.log(title2);

// console.log(title.concat("---",caption, "123"))


// username="  manivardhan  "
// console.log(username[0])
// username=username.trim()
// console.log(username)

// username=username.trimStart()
// console.log(username)


// username=username.trimEnd()
// console.log(username);


// let username=""
// username=username.padStart(10,"*")
// console.log(username)

// username=username.padEnd(100,"javascript")
// console.log(username)



// charAt 
// charCodeAt() 
// at 
// slice 
// substring 
// toUpperCase 
// toLowerCase 
// concat 
// trim 
// trimStart 
// trimEnd 
// padStart 
// padEnd 



let str="_+-*/%!@#$^& ~`?><,."
for (let i=0;i<str.length;i++){
    console.log(str[i],str.charCodeAt(i))
}
