
<script setup lang="ts">
/* const props = defineProps({
  title:{
    type:String,
    default: 'Hola Peru'
  }
}) */

import type { RouteLink } from "@/router/link-routes";

interface Props{
  title:string,
  links: RouteLink[]

}


const props = defineProps<Props>();
</script>
<template>
  <nav>
{{ props.title || 'No Title' }}

<RouterLink 
v-for="link of props.links"
:key="link.path"
:to="link.path"
>{{link.title}}
</RouterLink>


<!-- <RouterLink to="/">Inicio</RouterLink>
<RouterLink to="/about">Sobre</RouterLink> -->

  </nav>
</template>

<style scoped>
nav{
    align-items: flex-start;
    display: flex;
    font-size: 12px;
    margin-top: 10px;
    text-align: center;
    width: 100%;
}

a{
  margin-right: 5px;
}
</style>
