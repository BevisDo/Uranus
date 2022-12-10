// import Layout
import { SigninLayout, DashboardLayout } from '../components/Layout';

import Home from '../pages/Home';
import Courses from '../pages/Courses';
import Signin from '../pages/Sign';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';

//Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: 'courses', component: Courses },
    { path: 'signin', component: Signin, layout: SigninLayout },
    { path: 'register', component: Register, layout: SigninLayout },
    { path: 'dashboard', component: Dashboard, layout: DashboardLayout },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
