import React, { useContext } from "react";
import { UserContext } from "./UseContextExample";

export function Sidebar() {
    const user = useContext(UserContext);
    return (
        <div>
            <h3>Location</h3>
            <p>{user.city}</p>
        </div>
    );
}