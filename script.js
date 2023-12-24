const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}
function   mybox(){
    document.getElementById('error').innerHTML=''
     let enter = document.getElementById('enter').value;
     if(enter==''){
        document.getElementById('error').innerHTML="please enter a value";
     }
     else{
        let Box=document.getElementById('Box');
         let li =document.createElement('li');
         li.textContent=enter;
         let a = document.createElement('a');
         a.textContent="x";
         a.href = "javascript:void(0)";
         a.className="remove";
         li.appendChild(a)
         Box.appendChild(li);

     }
     document.getElementById("enter").value='';
 }
let f=document.querySelector('ul');
 f.addEventListener('click',function(e){
    let Box = document.getElementById('Box');
     let li =e.target.parentNode;
     Box.removeChild(li)

 })
 function my(){
    document.getElementById("etr").value='';
    if(etr==''){
        document.getElementById('btn').innerHTML='please anter your email id '
    }
}
// function submitform(){
//     document.contract-form.submit();
//             document.contract-form.reset();
// }
// let x=function(){
//     document.contract-form.submit();
//     document.contract-form.reset();
// }
// btn.addEventListener('click',x)
// let b=document.getElementsByClassName("btn1");
// btn12.addEventListener('click',wr)
//  let wr=function(e){
//     let write= confirm("you want to submited you email")
//     if(write){
//     document.write();
// }
// else{
//    alert("please rechecked your email")
// }
//  }

