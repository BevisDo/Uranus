import Home from '../pages/Home';
import Courses from '../pages/Courses';

//Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: 'courses', component: Courses },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
