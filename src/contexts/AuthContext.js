import { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from './constants';
import { authReducer } from '../reducers/authReducer';
import setAuthToken from '../utils/setAuth';
import { fas } from '@fortawesome/free-solid-svg-icons';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null,
    });

    //Authenticate user
    const loadUser = async () => {
        if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
            setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
        }

        try {
            console.log('DA TAO');
            const response = await axios.get(`${apiUrl}/auth`);
            if (response.data.success) {
                dispatch({ type: 'SET_AUTH', payload: { isAuthenticated: true, user: response.data.user } });
            }
        } catch (error) {
            console.log('DA XOA');
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
            setAuthToken(null);
            dispatch({ type: 'SET_AUTH', payload: { isAuthenticated: false, user: null } });
        }
    };
    useEffect(() => loadUser(), []);
    //Login
    const loginUser = async (userFrom) => {
        try {
            const response = await axios.post(`${apiUrl}/auth/login`, userFrom);
            if (response.data.success) localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken);
            return response.data;
        } catch (error) {
            if (error.response.data) return error.response.data;
            else return { success: false, message: error.message };
        }
    };
    //context data
    const authContextData = { loginUser, authState };

    //return provider
    return <AuthContext.Provider value={authContextData}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
