import React,{useEffect,useState} from 'react';

function PostApi(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[mobile,setMobile]=useState("");

    function saveUser(){
       // console.log(name,email,mobile);
        let data={name,email,mobile}
        fetch("http://localhost:5000/create",{
            method:"post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
           // console.log("result",result);
           result.json().then((resp)=>{
            console.log(resp)
        })
        })
    }

    return(
        <div>
            <h1>Post Api</h1>
            Name:<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} name="name"/><br/><br/>
            Email:<input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="name"/><br/><br/>
            Mobile:<input type="text" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} name="mobile"/><br/><br/>
            <button type="button" onClick={saveUser}>save</button>
        </div>
    );
}
export default PostApi;