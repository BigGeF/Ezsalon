import {createContext, useState} from "react";

export const UserContext = createContext({});

export function UserContextProvider({children}){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [user,setUser] = useState(null);
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    );
}