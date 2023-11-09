<template>
  <v-col cols="4">
    <v-card class="text-center">
      <v-card-item>
        <v-img :src="img" width="200" height="200" class="mx-auto"> </v-img>
        <v-card-title class="my-4">{{ product.title }}</v-card-title>
        <v-card-subtitle>{{ product.description }}</v-card-subtitle>
        <v-card-text>Price : {{ product.price }}</v-card-text>
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
        @click="cart.addToCart(item)"
        />
  
        <slot name="delete"/>
        <VBtn icon="mdi-cards-heart" />
      
      </v-card-actions>
    </v-card>
  </v-col>
</template>


<script setup>
import {useCartStore} from "@/store/app.js";

defineProps({
  img: String,
  product:{
    type:Object,
    required:true,
  }
})
const cart = useCartStore()
</script>