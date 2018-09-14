import Vue from 'vue'
import VueRouter from 'vue-router'

//路由懒加载
const Index = ()=>import('../components/Index');
const Detail = ()=>import('../components/Detail');
const Login = ()=>import('../components/Login');


Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'hash',
    routes: [{
        path: '/index',
        name: 'Index',
        component: Index
    },{
        path: '/login',
        name: 'Login',
        component: Login
    },{
        path: '/detail',
        name: 'Detail',
        component: Detail
    },{
        path: '*',
        redirect: '/index'
    }]
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
    let login = window.localStorage.getItem('login');
    if(!login && to.path != '/login'){
        next('/login');
    }
    next();
})

  export default router;
  