import { createContext, useState } from "react"



export const AuthContext= createContext();

function AuthContextProvider({children}){
const [auth, setAuth]= useState(false)

const handleSignIn=()=>{
    setAuth(true)
    
}


const handleSignOut=()=>{
    setAuth(false)
}
const value= {auth, handleSignIn, handleSignOut}
    return ( 
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContextProvider;