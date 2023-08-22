import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Read = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getData();
    }, []);

    function getData() {
        axios
            .get("https://64dda9f8825d19d9bfb15916.mockapi.io/crud")
            .then((res) => {
                setData(res.data);
            }).catch((err) => {
                console.log(err)
            })
    }
    const handleDelete=(id)=>{
        axios.delete(`https://64dda9f8825d19d9bfb15916.mockapi.io/crud/${id}`)
        .then(()=>{
            getData();
        }).catch((err)=>{
            console.log(err)
        })
    }
    const setToLocolsToTarget=(id,name,Mail)=>{
        localStorage.SetItem("id",id);
        localStorage.SetItem("name",name);
        localStorage.SetItem("Mail",Mail);
    }
    useEffect(()=>{
        getData();
    },[ ]);
    return (
        <>
            <h1>Read</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Mail</th>
                        <th scope="col"></th>
                        <th scope="col"></th>

                    </tr>
                </thead>
                {
                    data.map((eachData) => {
                        return (

                            <>
                                <tbody>
                                    <tr>
                                        <th scope="row">{eachData.id}</th>
                                        <td>{eachData.name}</td>
                                        <td>{eachData.Mail} </td>
                                        <td>
                                            <link to="/Update">
                                            <button classNameName="btn btn-success" 
                                            onClick={()=>setToLocolsToTarget
                                            (eachData.id,
                                            eachData.name,
                                            eachData.Mail)
                                            
                                            }>Edit</button>
                                            </link>
                                        </td>
                                        <td>
                                            <button classNameName="btn btn-danger"
                                            onClick={()=>handleDelete(eachData.id)}
                                            
                                            >Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </>
                        )
                    })
                }
            </table>
            <button classNameName="btn btn-warning">
                <Link to="/">
                    Create
                </Link>
            </button>
        </>


    )
}

export default Read