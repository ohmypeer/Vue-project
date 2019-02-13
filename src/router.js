import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import RoomProfile from '@/components/Room/RoomProfile'
import UserProfile from '@/components/User/UserProfile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
    	path: '',
    	name: 'home',
    	component: Home
    },
    {
    	path: '/login',
    	name: 'login',
    	component: Login
    },
    {
    	path: '/registration',
    	name: 'registration',
    	component: Registration
    },
    {
    	path: '/roomProfile',
    	name: 'roomProfile',
    	component: RoomProfile
    },
    {
    	path: '/userProfile',
    	name: 'userProfile',
    	component: UserProfile
    }
  ]
})
