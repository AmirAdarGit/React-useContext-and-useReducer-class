import React, { createContext } from "react";
import { Profile } from "./Profile";
import { Sidebar } from "./Sidebar";
export const UserContext = createContext();


export function UseContextExample() {
    const user = {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        age: 30,
        city: "New York"
    };

    return (
        <div>
            <UserContext.Provider value={user}>
                <Profile />
                <Sidebar />
            </UserContext.Provider>
        </div>
    );
}
