<template >
   <v-container class="text-center " >
       <v-row>
           <v-col cols="3" class="mx-auto my-8">
               <v-card  >
                 <v-card-title > {{ Response.lastName }}</v-card-title>
                 <v-card-subtitle>{{ Response.email }}</v-card-subtitle>
              
               </v-card>
           </v-col>
       </v-row>
   </v-container>
</template>

<script setup>
import {useResStore} from '@/store/LogIn.js'
const LogIn = useResStore() ;
let Response = LogIn.res

</script>