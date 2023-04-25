import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = () => {
    const {user} = useContext(AuthContext);
    
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;

/**
 * ------------------
 *          STEPS
 * -------------------
 * 1. check user is logged in or not
 * 2. if user is logged in, then allow them to visit the route
 * 3. Else redirect the user to the login page
 * 
*/