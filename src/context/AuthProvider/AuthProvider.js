import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
    const AllContexts = useFirebase();
    return (
        <authContext.Provider value={AllContexts}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;