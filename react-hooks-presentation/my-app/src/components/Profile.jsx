import React, { useContext } from "react";
import { UserContext } from "./UseContextExample";

export function Profile() {
    const user = useContext(UserContext);
    return (
        <div>
            <h2>{`${user.firstName} ${user.lastName}`}</h2>
            <p>{user.email}</p>
            <p>{`Age: ${user.age}`}</p>
        </div>
    );
}

