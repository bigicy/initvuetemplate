import ComponentOne from '../pages/ComponentOne';
import ComponentTwo from '../pages/ComponentTwo';

let routes = [
    {
        path: '/',
        component: ComponentOne,
        exact: true
    }, {
        path: '/two',
        component: ComponentTwo
    }
];

export default routes;