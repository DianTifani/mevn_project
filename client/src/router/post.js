export const postRoute = [
    {
        path: '/post',
        name: 'post',
        component: () => import('../views/post/PostLayout'),
        children: [
            {
                path: '/',
                name: 'post.list',
                component: () => import('../views/post/ListPost')
            },
            {
                path: ':id/edit',
                name: 'post.edit',
                component: () => import('../views/post/EditPost')
            },
            {
                path: 'create',
                name: 'post.create',
                component: () => import('../views/post/CreatePost')
            }
        ]
    }
]