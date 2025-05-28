// //callback

// // a function called inside another function is callback
// // function one(func){
// //     console.log(func)

// // }
// // function two(){

// // }

// // one(two)

// // map
// // filter
// // foreach
// // reduce
// // reduceright

// let arr=[1,2,3,4,5,6,7,8,9,10]
// // let map_arr=arr.map((val,ind,array)=>{
// //     return val*5
// // })
// // // console.log(map_arr)
// // let filter_arr=arr.filter((val,ind,array)=>{
// //     return val*5
// // })
// // // console.log(filter_arr)

// // arr.forEach((v,i,a)=>{
// //     arr[i]=arr[i]*3
// // })
// // console.log(arr)

// // let reduced_arr=arr.reduceRight((prev,cur)=>{
// //     console.log(prev,cur)
// //     return prev*cur

// // },1)
// // console.log(reduced_arr)

// // event

// function handleRegister(){
//     alert("register called")
// }

// const handleLogin=()=>{
//     alert("login called")
// }

// const handleSubmit=function(){
//     alert("submit called")
// }

// function handleConfirm(){
//     confirm (" are u sure??")
// }

// let cancel_btn=document.getElementById("cancel")

// let restart_btn=document.getElementById("restart")

// cancel_btn.addEventListener("click",()=>{
//     console.log("form cancelled")
// })

// restart_btn.addEventListener("dblclick",handleRestart)

// function handleRestart(){

//     console.log("restarted successfully!!")
// }

// const handleLoad=()=>{
//     alert("page loaded successfully")
//     console.log("loaded")
// }

// let page=document.getElementsByTagName("body")[0]
// console.log(page)
// // page.addEventListener("load",handleLoad)

// //inline --->opening tag  event=function
// //dom event listener-->element.addEventListener(event,function)

// let user_form=document.getElementsByTagName("form")[0]

// console.log(user_form)

// bio_inp.addEventListener("change",handleBio)
// console.log(bio_inp)

// function handleBio(){
//     console.log(bio_inp.value)
//     bio_inp.value=""
// }
// addEventListener()
// let bio_inp=document.getElementById("bio")
// let bio_div=document.getElementById("bio_text")
// function handleChange(){
//     console.log("changed");
//     let todo=document.createElement("p")
//     todo.innerText=bio_inp.value
//     bio_div.append(todo)
// }

// let handleSubmit = function (event) {
//   event.preventDefault();
//   console.log("form submitted");
// };
// let user_form = document.getElementsByTagName("form")[0];
// user_form.addEventListener("submit", handleSubmit);
let bio_inp = document.getElementById("bio");
let bio_para = document.getElementById("bio_text");


function handleChange() {
  console.log("changed");
  let text=bio_inp.value
  if  (text!==""){
      bio_para.innerText=text
  }
}


setInterval(()=>{
       let text=bio_inp.value
  if  (text!==""){
      bio_para.innerText=text
  }
},50)
