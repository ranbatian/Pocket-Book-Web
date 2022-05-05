import Index from "../page/Index";
import About from "../page/About";

const router = [
    {
        path: '/',
        component: <Index />
    }, {
        path: '/about',
        component: <About />
    }
]

export default router;
