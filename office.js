

let btn2=document.getElementById('btn2')
console.log(btn2);

btn2.addEventListener("click",(e)=>{
    e.preventDefault();
    let name=document.getElementById("name").value
    console.log(name);
    let loc=document.getElementById('loc').value
    console.log(loc);
    let role=document.getElementById('role').value
    console.log(role);
    let date=document.getElementById('date').value
    console.log(date);

    let data={
        name:name,
        loc:loc,
        role:role,
        date:date
    }
    console.log(data);

    if(!localStorage.getItem("data")){
        let officedata=[]
        officedata.push(data)
        localStorage.setItem("officedata",JSON.stringify(officedata))
    }else{
        let existingdata=JSON.parse(localStorage.getItem("officedata"))
        existingdata.push(data)
        localStorage.setItem("officedata",JSON.stringify(existingdata))
    }
        
      
})