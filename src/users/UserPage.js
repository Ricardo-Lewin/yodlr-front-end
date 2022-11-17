import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Api from "../api/Api";
import UserCard from "./UserCard"
import "./UserPage.css"

function UserPage() {
    const { id } = useParams();
    console.debug("USER ID", "ID=", id)

    const [user, setUser] = useState(null)

    useEffect(() => {
            async function fetchUser() {
                const user = await Api.getUser(id)
                console.log(user)
                setUser(user)
            }

        fetchUser();
    }, [id]);

    const updateStatus= async (data) => {
        
        const user = await Api.updateUser(id, data)
        setUser(user)
        console.log(user)
    }

    if (!user) return <p>Loading...</p>

    return(
        <div>
            <h2>User Profile</h2>
            <UserCard key={user.id} id={user.id} email={user.email} firstName={user.firstName} lastName={user.lastName} state={user.state} updateStatus={updateStatus}/>
        </div>
    )

}

export default UserPage;