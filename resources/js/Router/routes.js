import Home from '../Pages/Home';
import About from '../Pages/About';
import NotFound from '../Pages/NotFound';

const routes = [
    {
        path: '*',
        component: NotFound,
        name: 'notfound'
    },
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/about',
        component: About,
        name: 'about'
    },
]

export default routes;