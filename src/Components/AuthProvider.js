import React, { useEffect, useState } from 'react';

const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
    }, [])

    return (
        <AuthContext.Provider value={{user}}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export {AuthContext, AuthProvider};