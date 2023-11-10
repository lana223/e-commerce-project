
<template>
 
  <v-col cols="4">
    <v-card class="text-center">
      <v-card-item>
        <v-img :src="img" width="200" height="200" class="mx-auto"> </v-img>
        <v-card-title class="my-4">{{ list.title }}</v-card-title>
        <v-card-subtitle>{{ list.description }}</v-card-subtitle>
        <v-card-text>Price : {{ list.price }}</v-card-text>
        <v-rating
          hover
          :length="5"
          :size="32"
          :model-value="3"
          active-color="primary"
        />
      </v-card-item>

      <v-card-actions>
        <v-btn color="orange">
          <router-link to="/Details" style="text-decoration: none">
            read more
          </router-link>
        </v-btn>
        <VBtn 
        icon="mdi-cart"
        @click="cart.addToCart(list)"
        />
        <VBtn 
        icon="mdi-heart"
        @click="Like.addToCart(list)"
        />
  
        <slot name="delete"/>
        
       
      
      </v-card-actions>
    </v-card>
  </v-col>
</template>


<script setup>
import {useCartStore} from "@/store/app.js";
import {useLikeStore} from "@/store/Like.js";

defineProps({
  img: String,
  list: {
    type: Object,
    required: true,
  },
});
const cart = useCartStore()
const Like = useLikeStore()
</script>
