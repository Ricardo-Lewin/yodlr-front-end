import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";

class Api {


    //API ROUTES

    //REGISTER
    static async register(data) {
        const userData = {...data,['state']: 'active'}
        const newUser = await axios.post(`${BASE_URL}/users`,userData)
        console.log(newUser.data)
    }

    //GET ALL USERS - FOR ADMIN
    static async getAllUsers() {
        const users = await axios.get(`${BASE_URL}/users`)
        console.log(users)
        console.log("call")
        return users.data
    }

    //GET USER
    static async getUser(id) {
        const user = await axios.get(`${BASE_URL}/users/${id}`)
        return user.data
    }

    //PATCH USER
    static async updateUser(user_id) {
        let res = await this.request(`users/${user_id}`, "patch")
        return res;
    }

    //DELETE USER
    static async deleteUser(user_id) {
        let res = await this.request(`users/${user_id}`, "delete")
        return res;
    }

}

export default Api;