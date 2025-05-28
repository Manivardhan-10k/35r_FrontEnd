//DOM - Document object model 

const { createElement } = require("react")

// document-->HTML (document)-->tags 

// getElementbyId 
// getElementsbyClassName 
// getElementsbyTagName 

// queryselector 
// queryselectorAll


// let tags=document.getElementsByTagName("p")

// target=tags[0]

// target.innerText="javascript"
// target.style.fontSize="50px"
// target.style.fontWeight="bold"
// target.style.textTransform="uppercase"
// // target.style.fontSize="100px" 


let body=document.getElementById("body")
// let new_h1=document.createElement("h1")

// new_h1.innerText="new heading" 


// body.append(new_h1)


// let list=document.getElementById("list")

// let new_item=document.createElement("li")
// new_item.innerText="items5"
// list.append(new_item)



let image=document.createElement("img")


body.append(image)


image.setAttribute("src","./download.jpeg")

image.setAttribute("width","500px")
image.setAttribute("height","650px")



// let names=["cat","dog","cow","crow","horse","donkey","lion","tiger","elephant","giraffe"]

// for(let i=0;i<names.length;i++){
//     let val=names[i] //cat dog ....tiger 
//    let para= document.createElement('p')
//    para.innerText=val
//    body.append(para)
// }





// let link=document.querySelector("#google:link")
// console.log(link);


// link.innerText="google website"


// let paragraph=document.querySelectorAll(".para")
// paragraph[9].remove()



// C-create R-read U-update D-delete
// createElement 

// getElementById ,class tag, querySelectorAll ,querySelector 

// innerText 

// remove()

// BOM :










