 import React,{useEffect,useState} from 'react';

function GetApi(){
    const [data ,setData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/create").then((result)=>{
            result.json().then((resp)=>{
                console.warn("result",resp)
                setData(resp)
            })
        })
    },[])

    return(
        <div>
        <h1>GetApi call</h1>
        <table border="1">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                 
            </tr>
            {
                data.map((item)=> 
                <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
               
                </tr> 
                )
            }
        </table>
        </div>
    );
}
export default GetApi;