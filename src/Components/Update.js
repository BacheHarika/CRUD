import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
    const[id,setId]=useState("id",id)
    const[name,setName]=useState("name",name)
    const[mail,setMail]=useState("mail",mail)
    const navigate=useNavigate();
    useEffect(()=>{
        setId(localStorage.getItem("id",id));
      setName(localStorage.getItem("name",name));
       setMail(localStorage.getItem("Mail",mail));
    },[ ]);
    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("Id...", id);
        axios
          .put(` https://64dda9f8825d19d9bfb15916.mockapi.io/crud${id}`, {
            name: name,
            Mail: mail,
          })
          .then(() => {
            navigate("/read");
          });
      };




  return (
    <>
    <h2>Update</h2>
    <form onSubmit={handleUpdate}>
  <div className="mb-3">
    <label for="exampleInputEmail1" 
    className="form-label">Name</label>

    <input type="text" className="form-control"
     id="exampleInputEmail1" onChange={(e)=>setName 
        (e.target.value)}
        //onKeyDown={handleEnter}
        />
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" 
    className="form-label">Mail</label>
    <input type="Mail" className="form-control" 
    onChange={(e)=>setMail 
    (e.target.value)}/>
  </div>

  <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Submit</button>
</form>zz
    
    
    </>
  )
}

export default Update