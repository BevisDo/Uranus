import Home from '../pages/Home';
import Courses from '../pages/Courses';
import Signin from '../pages/Sign';

//Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: 'courses', component: Courses },
    { path: 'signin', component: Signin, layout: 'SigninLayout' },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
