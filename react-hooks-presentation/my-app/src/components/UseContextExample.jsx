import React, { createContext, useState } from "react";
import { Profile } from "./Profile";
import { Sidebar } from "./Sidebar";
export const UserContext = createContext();


export function UseContextExample() {
    const [user, setUser] = useState({
        fullName: 'Amir Adar',
        email: 'Amir@example.com',
        age: 30,
        city: 'Tel Aviv',
    });

    return (
        <div>
            <UserContext.Provider value={{user, setUser}}>
                <Profile />
                <Sidebar />
            </UserContext.Provider>
        </div>
    );
}
