import React, {useState} from 'react'


function NewUserForm () {
    const INITIAL_STATE = { email: "", firstName: "", lastName: ""}

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input 
            type="text"
            name='email' 
            placeholder="email" 
            value={formData.email}
            onChange={handleChange}
            />
            <label htmlFor="firstName">First Name</label>
            <input 
            type="text" 
            name='firstName'
            placeholder="First Name" 
            value={formData.firstName}
            onChange={handleChange}
            />
            <label htmlFor="lastName">Last Name</label>
            <input 
            type="text" 
            name='lastName'
            placeholder="Last Name" 
            value={formData.lastName}
            onChange={handleChange}
            />
            <button>Register!</button>
        </form>
    )
} 

export default NewUserForm;