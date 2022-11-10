import React from "react"
import {Link} from "react-router-dom"
import Card from "react-bootstrap/Card";

function UserCard({ id, email, firstName, lastName, state }) {
    return(
        <li>
            <Card style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title>{lastName}, {firstName}</Card.Title>
                    <Card.Text>
                        <div>User ID: {id}</div>
                        <div>Email: {email}</div>
                        <div>State: {state}</div>
                        <div><Link to={`users/${id}`}>Edit Profile</Link></div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </li>
    )
}

export default UserCard;