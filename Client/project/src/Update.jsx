import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Link, useParams} from 'react-router-dom'

const Update = () => {
    const [name, setName] = useState("")
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {id } = useParams();

    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            const response = await axios.put(`http://localhost:8000/api/hosting/${id}`,{
                name:name,
                email:email,
                password:password
            })
            console.log(response.data)
        } catch (error) {
            console.log(error.messsage)
        }
    }

    const handleName = (e) => {
        setName(e.target.value);
        console.log(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        console.log(e.target.value);
    };

    const fetchData = async (id) => {
        try {
            let response = await axios.get(`http://localhost:8000/api/hosting/${id}`);
            console.log(response.data);
            setName(response.data.name);
            console.log(setName, 'nsnfknsd');
            setEmail(response.data.email);
            setPassword(response.data.password);
        } catch (error) {
            console.log(error.message);
        }
    }

        useEffect(() => {
          fetchData(id)
        }, [])
        


  return (
    <div>
        <div style={{ textAlign: "center", marginTop: "10rem", gap: '20px' }}>
                <h1>Edit form </h1>
                <form onSubmit={handleSubmit} >
                    <label >Name:</label>
                    <input type="text" id="name" value={name} onChange={handleName} style={{ marginLeft: '20px' }} />
                    <br />
                    <label>Email:</label>
                    <input type="email" id="email" value={email} onChang={handleEmail} style={{ marginLeft: '20px' }} />
                    <br />
                    <label>password:</label>
                    <input type="Password" id="password" value={password} onChange={handlePassword} style={{ marginLeft: '0px' }} />
                    <br />
                    <div style={{ display: 'flex', textAlign: "center", gap: "1rem", padding: "20px", alignItems: 'center', marginLeft: '680px' }}>
                        <button type="submit">Submit</button>
                        <Link to='/details'><button>View form</button></Link>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default Update