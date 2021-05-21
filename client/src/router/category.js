export const categoryRoute = [
    {
        path: '/category',
        name: 'category',
        component: () => import ('../views/category/CategoryLayout'),
        children:[
            {
                path:'/',
                name:'category.list',
                component: () => import('../views/category/ListCategory')
            },
            {
                path: 'create',
                name: 'category.create',
                component: () => import('../views/category/CreateCategory')
            },
            {
                path: ':id/edit',
                name: 'category.edit',
                component: () => import('../views/category/EditCategory')
            }
        ]
    }
]