
let btn0=document.getElementById("btn0")
console.log(btn0);
btn0.addEventListener("click",(e)=>{
    let senclgname=document.getElementById("senclgname").value
    let sel1=document.getElementById("sel1").value
    let sel2=document.getElementById("sel2").value
    let clgname=document.getElementById("clgname").value
    let percentage=document.getElementById("percentage").value
    let yop=document.getElementById("yop").value
    let schoolname=document.getElementById("schoolname").value
    let per2=document.getElementById("per2").value
    let yop2=document.getElementById("yop2").value

    let data={
        senclgname:senclgname,
        sel1:sel1,
        sel2:sel2,
        date:date,
        clgname:clgname,
        percentage:percentage,
        yop:yop,
        schoolname:schoolname,
        per2:per2,
        yop2:yop2
        
}
console.log(data);

 if(!localStorage.getItem("data")){
    let formdata1=[]
    formdata1.push(data)
    localStorage.setItem("formdata1",JSON.stringify(formdata1))

//     // console.log(formdata);
}else{
    let existingdata=JSON.parse(localStorage.getItem("formdata1"))
    existingdata.push(data)
    localStorage.setItem("formdata1",JSON.stringify(existingdata))
}

    

})








// let data={
//     name:name,
//     lname:lname,
//     email:email,
//     phone:phone,
//     addr:addr,
//     gen:gen,
//     pwd:pwd

// }
// console.log(data);
// let formdata=[]
// if(!localStorage.getItem("formdata")){
    
//     formdata.push(data)
//     localStorage.setItem("formdata",JSON.stringify(formdata))

//     // console.log(formdata);

// }else{
//     let existingdata=JSON.parse(localStorage.getItem("formdata"))
//     existingdata.push(formdata)
//     localStorage.setItem("formdata",JSON.stringify(existingdata))


// }


// })