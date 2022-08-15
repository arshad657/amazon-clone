import React, { createContext } from 'react'


export const AuthContext = createContext();

function AuthProvider({children}) {
    const allContexts = useFirebase();
  return (
    <AuthContext.Provider value= {allContexts}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider