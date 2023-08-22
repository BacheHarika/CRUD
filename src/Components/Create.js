import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Create = () => {
    const header = { "Access-Control-Allow-Origin": "*" }

    const [name,setName]=useState(" ");
    const [Mail,setMail]=useState(" ");
    const history=useNavigate();

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("clciekd");
        axios
          .post("https://64dda9f8825d19d9bfb15916.mockapi.io/crud", {
            name: name,
            Mail: Mail, 
          },
          { headers: header }
          )
          .then(() => {
          }).catch((err)=>console.log(err))
          
          history("/read");
    }

    const handleEnter =(e)=>{
        if(e.key === "Enter"){
            handleSubmit(e)
        }
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label for="exampleInputEmail1" 
    className="form-label">Name</label>

    <input type="text" className="form-control"
     id="exampleInputEmail1" onChange={(e)=>setName 
        (e.target.value)}
        onKeyDown={handleEnter}
        />
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" 
    className="form-label">Mail</label>
    <input type="Mail" className="form-control" 
    onChange={(e)=>setMail 
    (e.target.value)}/>
  </div>

  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
    
    </>     
  )
}
export default Create