// let form=document.getElementById('form')
// console.log(form);

let div1=document.getElementById('div1')
console.log(div1);

let file=document.getElementById("file1")
console.log(file);
// let isShow=true;

file.addEventListener("click",(e)=>{
    let res=file.classList.toggle(true)
    if(res===true){
        div1.style.display="block"
        education.style.display="none"
        office.style.display="none"
        preview.style.display="none"

    }else{
        div1.style.display="none"
    }
       
        
})


let content =document.getElementById('content')
console.log(content);

let education=document.getElementById('education');
console.log(education);
let office=document.getElementById('office');
console.log(office);

let file2=document.getElementById("file2")
console.log(file2);
let file3=document.getElementById("file3")
console.log(file3);

file2.addEventListener("click",(e)=>{
    let res=file2.classList.toggle(true)
    if(res===true){
        education.style.display="block"
        div1.style.display="none"
        office.style.display="none"
        preview.style.display="none"
        
    }else{
        education.style.display="none"
    }
       
        
})

file3.addEventListener("click",(e)=>{
    let res=file3.classList.toggle(true)
    if(res===true){
        office.style.display="block"
        education.style.display="none"
        preview.style.display="none"
    }else{
        office.style.display="none"
    }
       
        
})

let preview =document.getElementById('view')
console.log(preview);
let file4=document.getElementById("file4")
console.log(file4);

file4.addEventListener("click",(e)=>{
    let res=file4.classList.toggle(true)
    if(res===true){
        preview.style.display="block"
        div1.style.display="none"
        education.style.display="none"
        office.style.display="none"
        
    }else{
        preview.style.display="none"
    }
       
        
})
//  ************************************************************************************************************************************
 
let btn5=document.getElementById('btn-form')
console.log(btn5);

btn5.addEventListener("click",(e)=>{
    e.preventDefault()
    let name=document.getElementById("name").value
    console.log(name);
    let lname=document.getElementById("lname").value
    console.log(lname);
    let email=document.getElementById("email").value
    console.log(email);
    let phone=document.getElementById("phone").value
    console.log(phone);
    let addr=document.getElementById("addr").value
    console.log(addr);
    let gen=document.getElementById("gen").value
    console.log(gen);
    let pwd=document.getElementById("pwd").value
    console.log(pwd);

    let data={
        name:name,
        lname:lname,
        email:email,
        phone:phone,
        addr:addr,
        gen:gen,
        pwd:pwd

    }
    console.log(data);
   
    if(!localStorage.getItem("data")){
        let formdata=[]
        formdata.push(data)
        localStorage.setItem("formdata",JSON.stringify(formdata))

        // console.log(formdata);

    }else{
        let existingdata=JSON.parse(localStorage.getItem("formdata"))
        existingdata.push(data)
        localStorage.setItem("formdata",JSON.stringify(existingdata))


    }
    

})
// *************************************************************************************************************************************************
