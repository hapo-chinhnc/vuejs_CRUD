import Home from './components/Home'
import Post from './components/Post'
import Edit from './components/Edit'

const routes = [
    {
        path: '/',
        component: Home,
        name: 'index',
        meta: { title: 'Home Page' }
    },
    {
        path: '/post',
        component: Post,
        name: 'post',
        meta: { title: 'Post Page' }
    },
    {
        path: '/edit/:id',
        component: Edit,
        name: 'edit',
        meta: { title: 'Edit' }
    }
];

export default routes;
