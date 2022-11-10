import React, { useState } from "react"
import {useHistory} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Api from "../api/Api";

function UserRegisterForm() {
    const history = useHistory()
  
    const DEFAULT_STATE = {
        email:"",
        firstName:"",
        lastName:"",
        password:"",
        confirmPassword:""
    }
    const [formData, setFormData] = useState(DEFAULT_STATE)

    function handleChange(e) {
        const {value, name} = e.target
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        
        //check if passwords match
        if (formData.password === formData.confirmPassword) {
            let res = await Api.register(formData)
            console.log(res)
            setFormData(DEFAULT_STATE)
            history.push('/admin')    
        } else {
            alert("Passwords do not match.")
            setFormData(DEFAULT_STATE)
        }
    }

    

    return(
        <>
            <h2>Register</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} required></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label>First Name: </Form.Label>
                    <Form.Control placeholder="Enter first name" name="firstName" value={formData.firstName} onChange={handleChange} required></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Last Name: </Form.Label>
                    <Form.Control placeholder="Enter last name" name="lastName" value={formData.lastName} onChange={handleChange} required></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control placeholder="Enter password" name="password" value={formData.password} onChange={handleChange} required ></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password: </Form.Label>
                    <Form.Control placeholder="Reenter password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required ></Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit" onSubmit={handleSubmit}>Submit</Button>

            </Form>
        </>
    )
}

export default UserRegisterForm;