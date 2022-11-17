import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:4000";


class Api {

    static async request(endpoint, paramsOrData = {}, verb = "get") {
    
  
        console.debug("API Call:", endpoint, paramsOrData, verb);
    
        try {
          return (await axios({
            method: verb,
            url: `${BASE_URL}/${endpoint}`,
            [verb === "get" ? "params" : "data"]: paramsOrData})).data;
            // axios sends query string data via the "params" key,
            // and request body data via the "data" key,
            // so the key we need depends on the HTTP verb
        } catch(err) {
          console.error("API Error:", err.response);
          let message = err.response.data.message;
          throw Array.isArray(message) ? message : [message];
        }
      }

    //API ROUTES

    //REGISTER
    static async register(data) {
        let res = await this.request(`users`, data, "post");
        return res;
    }

    //GET ALL USERS - FOR ADMIN
    static async getAllUsers() {
        let res = await this.request("users");
        return res;
    }

    //GET USER
    static async getUser(id) {
        let res = await this.request(`users/${id}`)
        return res;
    }

    //PATCH USER
    static async updateUser(id,data) {

        let res = await this.request(`users/${id}`, data, "put")
        return res;
    }

    //DELETE USER
    static async deleteUser(id) {
        let res = await this.request(`users/${id}`, "delete")
        return res;
    }

}

export default Api;