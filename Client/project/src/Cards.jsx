import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Cards = ({ details, demo }) => {

    
    const { name, email, password, _id} = details;

    return (
        <div>
            <Card style={{ width: '18rem', textAlign: "center" }}>

                <Card.Body>
                    <Card.Title>Register</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                        <p>Name: {name}</p>
                        <p>Email: {email}</p>
                        <p>Password: {password}</p>
                    </Card.Text>
                    <div style={{ display: "flex", textAlign: "center", gap: "10px" }}>
                        <Button onClick={() => demo(_id)} variant="danger">Delete</Button><br />
                        <Link to={`/updatedvalue/${_id}`}><Button variant="primary">Update</Button></Link><br />
                        <Link to={'/'}><Button variant='success'>Home</Button></Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards
