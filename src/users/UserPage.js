import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Api from "../api/Api";
import UserCard from "./UserCard"

function UserPage() {
    const { id } = useParams();

    const [user, setUser] = useState(null)
    

    useEffect(
        function fetchUser() {
            async function getUser() {
                setUser(await Api.getUser(id))
            }

        getUser();
    }, [id]);


    return(
        <div>
            <h2>User Profile</h2>
            <UserCard key={user.id} id={user.id} email={user.email} firstName={user.firstName} lastName={user.lastName} state={user.state} />
        </div>
    )

}

export default UserPage;