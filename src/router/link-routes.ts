export interface RouteLink {
  name: string;
  title: string;
  path: string;
}

export const routeLinks: RouteLink[] = [
    { path:'/' ,name:'home',title:'Inicio' },
    { path:'/about' ,name:'about',title:'Sobre' },
    { path:'/characters' ,name:'characters',title:'Personajes' }

];

//Lo  mandamos a App.vue
