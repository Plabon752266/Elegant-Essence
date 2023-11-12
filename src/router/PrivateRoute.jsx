
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user,loading}= useAuth()
    if(loading){
        return <span className="loading loading-ball loading-lg"></span>;
    }
    
    if(!user){
        return <Navigate  to="/login" replace> </Navigate>
    }else{
        return children
    }
    
};

export default PrivateRoute;