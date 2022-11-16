import React, { useEffect, useState } from "react"
import Api from "../api/Api";
import UserCard from "./UserCard"
import "./UsersList.css"

function UserList() {  
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers() {
            const users = await Api.getAllUsers()
            console.log(users)
            setUsers(users)
        }
        getUsers()
    }, [])

    //add link to each li directing to user page
    const usersLi = users.map(u => <UserCard key={u.id} id={u.id} email={u.email} firstName={u.firstName} lastName={u.lastName} state={u.state} />
    )

    return(
        <div>
            <h2>All Users</h2>
            <ul>
                {usersLi}
            </ul>
        </div>
    )

}

export default UserList;