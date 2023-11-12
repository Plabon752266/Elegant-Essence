import { useContext } from 'react';
import { UserContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user}= useContext(UserContext)
    console.log(user)
    
    if(!user){
        console.log('eikhane aschi')
        return <Navigate  to="/login" replace> </Navigate>
    }else{
        return children
    }
    
};

export default PrivateRoute;