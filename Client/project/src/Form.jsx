import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { Link } from 'react-router-dom'

const Form = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword]= useState("")

    const handleName = (e) => {
        setName(e.target.value)
        console.log(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        console.log(e.target.value);
    }

    const handleEmail =(e) => {
        setEmail(e.target.value)
        console.log(e.target.value);
    }

    const handleSubmit =async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post("http://localhost:8000/api/hosting", {
                name: name,
                email: email,
                password: password
            })

            console.log(response.data);
            alert("data submitted successfully")
            setName("")
            setEmail("")
            setPassword("")

        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div style={{textAlign:"center",marginTop:"10rem"}}>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <div>
            <input type='text ' value={name} placeholder='enter ur name'
            onChange={handleName}/>
            </div>
            <br/>
            <div>
                <input type='email' value={email} placeholder='enter ur email'
                onChange={handleEmail}/>

            </div>
            <br/>
            <div>
                <input type='password' value={password} placeholder='enter ur password'
                onChange={handlePassword}/>

            </div>
            <br/>
            <div style={{display:'flex',textAlign:"center",gap:"1rem",justifyContent:"center"}}>
            <Button type="submit">Submit</Button>
            <Link to="/details"><Button>view forms</Button></Link>
            </div>
            

        </form>
    </div>
  )
}

export default Form