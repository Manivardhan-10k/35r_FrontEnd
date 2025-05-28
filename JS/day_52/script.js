
//DOM 
// Document Object Model



// let para=document.getElementById("p1")

// para.innerText="hello"


// let username= prompt("Enter the name: ")
// console.log(username)
 
// let heading=document.getElementById("name")
// heading.innerText=username



// let paragraphs=document.getElementsByClassName("para")
// console.log(paragraphs);



// for (let i=0;i<paragraphs.length;i++){
//     console.log(paragraphs[i].innerText);
// }


// let paragraphs=document.getElementsByTagName("p")

// for (let i=0;i<paragraphs.length;i++){
//     if (paragraphs[i].innerText==="blue"){
//         paragraphs[i].innerText="black"
//     }  
// }

let heading=document.getElementById("heading1")
let username=prompt("enter the name: ")
heading.innerText=username
heading.style.color="orange"
heading.style.fontSize="125px"
heading.style.textDecoration="underline"
heading.style.fontStyle="italic"
heading.style.display="none"

let show=prompt("do u want to show the value: show for yes / other for no")
console.log(show);

if (show==="show"){
    heading.style.display="block"
}

