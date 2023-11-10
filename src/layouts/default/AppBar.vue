<template>

        <v-app-bar class="px-16 " color="#EABF9F" >
          <v-app-bar-title> SHEIN </v-app-bar-title>
          <template v-slot:append>
            <v-btn><router-link  style="text-decoration:none;" to="/">Home</router-link></v-btn>
            <v-btn ><router-link  style="text-decoration:none;" to="/About">About</router-link></v-btn>
            <v-btn ><router-link  style="text-decoration:none;" to="/Products">Products</router-link></v-btn>
            <v-btn ><router-link  style="text-decoration:none;" to="/Details">Details</router-link></v-btn>
            <v-btn ><router-link style="text-decoration:none;" to="/Cart">Cart</router-link> <sup style="color: red;" id="super">{{ cart.length }}</sup></v-btn>
            <v-btn ><router-link style="text-decoration:none;" to="/Like">Like</router-link> </v-btn>
           
          </template>
        </v-app-bar>
  
 
</template>

<script >
import { useCartStore } from '@/store/app';
export default {
  data(){
    return {
      cart :[],
    }
  },
  created(){
    this.cart = useCartStore().items;
  }
}
</script>
