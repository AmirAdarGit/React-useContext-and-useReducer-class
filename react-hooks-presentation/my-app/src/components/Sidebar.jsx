import React, { useContext, useState } from "react";
import { UserContext } from "./UseContextExample";

export function Sidebar() {
    const { user, setUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        fullName: user.fullName,
        email: user.email,
        age: user.age,
        city: user.city
    });

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        setUser(formData);
    }

    return (
        <div style={{padding: "20px", border: "1px pink solid"}}>
            <form onSubmit={handleSubmit}>
                <label style={{margin: "10px"}}>
                    Name:
                    <input type="text" name="fullName" onChange={handleInputChange} />
                </label>
                <label style={{margin: "10px"}}>
                    Email:
                    <input type="text" name="email" onChange={handleInputChange} />
                </label>
                <label style={{margin: "10px"}}>
                    Age:
                    <input type="number" name="age" onChange={handleInputChange} />
                </label>
                <label style={{margin: "10px"}}>
                    Location:
                    <input type="text" name="city" onChange={handleInputChange} />
                </label>
                <button type="submit">Update User Data</button>
            </form>
        </div>
    );
}
