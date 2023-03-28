import React,{useEffect,useState} from 'react';

function DeleteApi(){
    const [data,setData]=useState([])
    const [name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[mobile,setMobile]=useState("");
    const[userId,setUserId]=useState(null)

    useEffect(()=>{
         showData()
    },[])

   // console.warn(users)
    function showData()
    {
        fetch("http://localhost:5000/create").then((result)=>{
            result.json().then((resp)=>{
                //console.warn("result",resp)
                setData(resp)
                setName(resp[0].name)
                setEmail(resp[0].email)
                setMobile(resp[0].mobile)
                setUserId(resp[0].id)
            })
        })
    }
    
    function deleteUser(id){
       // alert(id)
       alert('are you sure want to delete?');
        fetch(`http://localhost:5000/create/${id}`,{
            method:'DELETE'
        }).then((result)=>{
            result.json().then((resp)=>{
                (console.warn(resp))
                showData()
                
            })
    
        })
    
}

function selectUser(id)
{
     console.log(data[id-1])
     let item=data[id-1]
     setName(item.name)
     setMobile(item.mobile)
     setEmail(item.email)
     setUserId(item.id)
}

function updateUser()
{
    let item={name,email,mobile,userId}
    fetch(`http://localhost:5000/create/${userId}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(item)
    }).then((result)=>{
        result.json().then((resp)=>{
            (console.warn(resp))
            showData()
            
        })

    })
}
    return(
        <div>
        <h1>Delete Api</h1>
        <table border="1">
            <tbody>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Delete</th>
                <th>Edit</th>
                 
            </tr>
            {
                data.map((item,i)=> 
                <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td><button onClick={()=>deleteUser(item.id)}>Delete</button></td>
                <td><button onClick={()=>selectUser(item.id)}>Edit</button></td> 
                </tr> 
                )
            }
            </tbody>
        </table><br/>
        <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
            <input type="text" value={email} onChange={(e)=>setEmail (e.target.value)} /><br/><br/>
            <input type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)}/><br/><br/>
             <button onClick={updateUser}>Update</button>
        </div>
        </div>
    );
}
 
export default DeleteApi;