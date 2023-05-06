import React, { useContext } from "react";
import { UserContext } from "./UseContextExample";

export function Profile() {
    const { user } = useContext(UserContext);
    return (
        <div style={{border: "1px solid black", margin: "50px"}}>
            <h2>{user.fullName}</h2>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <p>Location: {user.city}</p>
        </div>
    );
}

