import React from 'react'

function NewUserForm () {
    return (
        <form>
            <label htmlFor="email">Email</label>
            <input 
            type="text"
            name='email' 
            placeholder="email" 
            value="email"
            />
            <label htmlFor="firstName">First Name</label>
            <input 
            type="text" 
            name='firstName'
            placeholder="First Name" 
            value="firstName"
            />
            <label htmlFor="lastName">Last Name</label>
            <input 
            type="text" 
            name='lastName'
            placeholder="Last Name" 
            value="lastName"
            />
            <button>Register!</button>
        </form>
    )
} 

export default NewUserForm;