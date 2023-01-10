import { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const {
        authState: { authLoading, isAthenticated },
    } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={(props) =>
                isAthenticated ? (
                    <>
                        <Component {...rest} {...props} />
                    </>
                ) : (
                    <Navigate to="/signin" />
                )
            }
        />
    );
};

export default ProtectedRoute;
