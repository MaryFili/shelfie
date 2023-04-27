// import React from 'react'
// import { Navigate } from 'react-router-dom'
// import { useAuthContext } from './hooks/useAuthContext';
// import { AuthContext } from '../context/AuthContext';


// const ProtectedRoutes = ({ children }) => {
//     const { user, authIsReady } = useAuthContext();

//     if (!authIsReady) {
//         return <div>Loading...</div>
//     }
//     if (!user) {
//         return <Navigate to="/" />
//     }

//     return children
// }

// export default ProtectedRoutes