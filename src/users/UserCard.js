import React from "react"
import {Link} from "react-router-dom"
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";


function UserCard({ id, email, firstName, lastName, state, updateStatus, showLink = false, showButton = false}) {
    
    const onClick = () => {
        const data = {
            id,
            firstName,
            lastName,
            email,
            state: (state === "pending") ? "active" : "pending"
        }
        updateStatus(data)
    }
    return(
        <li>
            <Card style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title>{lastName}, {firstName}</Card.Title>
                    <div>
                        <Card.Text>User ID: {id}</Card.Text>
                        <Card.Text>Email: {email}</Card.Text>
                        <Card.Text>State: {state}</Card.Text>
                        {!showButton && <Button size="sm" onClick={onClick}>Toggle Status</Button>}
                        
                        {showLink && <Link to={`users/${id}`}>Edit Profile</Link>}
                    </div>
                </Card.Body>
            </Card>
        </li>
    )
}

export default UserCard;