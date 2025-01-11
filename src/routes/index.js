import Home from '~/pages/Home';
import Following from '~/pages/Following';

// Public pages
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
];

// Private pages
const privateRoutes = [];

export { publicRoutes, privateRoutes };
