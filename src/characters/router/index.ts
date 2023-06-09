import type { RouteRecordRaw } from "vue-router";
import CharacterLayout from "../layout/CharacterLayout.vue";
import CharacterId from "../pages/CharacterId.vue";
import CharacterList from "../pages/CharacterList.vue";
import CharacterSearch from "../pages/CharacterSearch.vue";

export const characterRoute:RouteRecordRaw ={
path: '/characters',
redirect:'/characters/list',
component: CharacterLayout,
children:[
    {path:'by/id', name:'character-id', components: CharacterId},
    {path:'list', name:'character-list', components: CharacterList},
    {path:'search', name:'character-search', components: CharacterSearch},
]

}