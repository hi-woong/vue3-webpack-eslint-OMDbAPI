import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'

// 기본 내보내기 
export default createRouter({
    // Hash
    //  ex https://google.com/#search 
    // 특정페이지에서 새로고침을 했을때 페이지를 찾을수 없다
    // 라는 메세지를 방지할수있다.  
    history: createWebHashHistory(),
    // pages 페이지를 구분해주는개념
    routes: [
        {
            // 페이지를 구분해주는 각각의 경로
            path:'/',
            component: Home
        },
        {
            path:'/movie',
            component: Movie
        },
        {
            path:'/about',
            component: About
        }
       
    ]
})

