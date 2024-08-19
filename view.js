let PersonalDet =document.getElementById('btn5')
console.log(PersonalDet);
let EducationDEt =document.getElementById('btn6')
console.log(PersonalDet);
let OfficeDet =document.getElementById('btn7')
console.log(PersonalDet);

OfficeDet.addEventListener("click",(e)=>{
    e.preventDefault();

    var k=JSON.parse(localStorage.getItem("officedata"))
    // let k=JSON.parse(userdata1)
    console.log(k);

    let userdisplay1=document.getElementById('userdisplay1')
    for (let i = 0; i < k.length; i++) {
        // const element = array[i];
        userdisplay1.innerHTML+=`<br>
        <br> <br>name:${k[i].name}<br>
        <br>loc:${k[i].loc}<br>
        <br>role:${k[i].role}<br> 
        <br>date:${k[i].date}<br>
        
        `
        
    }

})


// ********************************************************************************************
EducationDEt.addEventListener('click',(e)=>{
    e.preventDefault();
    var k=JSON.parse(localStorage.getItem("formdata1"))
    // let k=JSON.parse(userdata1)
    console.log(k);

    let userdisplay2=document.getElementById('userdisplay2')
    for (let i = 0; i <k.length; i++) {
        // const element = array[i];
        userdisplay2.innerHTML+=`<br>
        <br> <br>senclgname:${k[i].senclgname}<br>
        <br>sel1:${k[i].sel1}<br>
        <br>sel2:${k[i].sel2}<br> 
        <br>inp1:${k[i].date}<br>
        <br>clgname:${k[i].clgname}<br>
        <br>percentage:${k[i].percentage}<br>
        <br>yop:${k[i].yop}<br>
        <br>schoolname:${k[i].schoolname}<br>
        <br>percentage2:${k[i].per2}<br>
        <br>yop2:${k[i].yop2}<br>`
        
    }

})


// ******************************************************************************************
PersonalDet.addEventListener("click",(e)=>{
    e.preventDefault();

    var k=JSON.parse(localStorage.getItem("formdata"))
    // let k=JSON.parse(userdata1)
    console.log(k);

    let userdisplay3=document.getElementById('userdisplay3')
    for (let i = 0; i < k.length; i++) {
        // const element = array[i];
        userdisplay3.innerHTML+=`<br>
        <br> <br>name:${k[i].name}<br>
        <br>lname:${k[i].lname}<br>
        <br>email:${k[i].email}<br> 
        <br>phone:${k[i].phone}<br>
        <br>addr:${k[i].addr}<br>
        <br>gen:${k[i].gen}<br>
        <br>pwd:${k[i].pwd}<br>`
        
    }

})

EducationDEt.addEventListener("click",(e)=>{
    let res=EducationDEt.classList.toggle(true)
    if(res===true){
        userdisplay2.style.display="block"
        userdisplay1.style.display="none"
        userdisplay3.style.display="none"
        
        
    }else{
        userdisplay2.style.display="none"
    }
       
        
})

PersonalDet.addEventListener("click",(e)=>{
    let res=PersonalDet.classList.toggle(true)
    if(res===true){
        userdisplay3.style.display="block"
        userdisplay2.style.display="none"
        userdisplay1.style.display="none"
        
        
    }else{
        userdisplay3.style.display="none"
    }
       
        
})

OfficeDet.addEventListener("click",(e)=>{
    let res=OfficeDet.classList.toggle(true)
    if(res===true){
        userdisplay1.style.display="block"
        userdisplay2.style.display="none"
        userdisplay3.style.display="none"
        
        
    }else{
        userdisplay1.style.display="none"
    }
       
        
})



