import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import { toast } from 'react-hot-toast';




const PrivateRoutes = ({ children }) => {


    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    // console.log(loading)
    if (loading) {
        return <div>Loading.................</div>
    }

    if (user && user.uid) {
        return children
    }


    return (

        <div>
            {toast.error("Please Sign in first")}
            <Navigate to='/signin' state={{ from: location }} replace />
        </div>
    );

};

export default PrivateRoutes;