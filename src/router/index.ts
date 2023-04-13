
import AboutPage from '@/episodes/pages/AboutPage.vue'
import HomePage from '@/episodes/pages/HomePage.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { characterRoute } from '@/characters/router';

const router = createRouter({
    history:createWebHashHistory(import.meta.env.BASE_URL),
    routes:[
        //Public
{path:'/', name:'home', component:HomePage},
{path:'/about', name:'about', component:AboutPage},
       
        // Characters
    
         {
            ...characterRoute,
            path:'/characters'

         },

        //Default
        {path:'/:pathMatch(.*)*', redirect:()=>({name:'home'})}
    ]
});

export default router;