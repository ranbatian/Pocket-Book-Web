import Home from '../page/Home';
import Data from '../page/Data';
import User from '../page/User';
import Login from '../page/Login';
import Index from '../page/Index'
const router = [{
    path: '/',
    component: Home,
    hasBar: true
}, {
    path: '/data',
    component: Data,
    hasBar: true
}, {
    path: '/user',
    component: User,
    hasBar: true
}, {
    path: '/login',
    component: Login,
    hasBar: false
}]

export default router;
