<template>
  <v-container>
    <h1 class="text-center">Products</h1>
    <v-row>
      <ProductItem
        :list="list"
        v-for="list in Productloaded()"
        :key="list.Id"
        :img="list.image"
      >
      </ProductItem>
      <v-btn v-on:click="load()">Load More</v-btn>
    </v-row>
  </v-container>
</template>
   
   <script setup >
import ProductItem from "@/components/HomeComponent/ProductItem.vue"
import { useCartStore } from "@/store/app.js";

import { ref } from "vue";
const data = useCartStore();
let length = ref(6);
fetch("../../../json/product.json")
  .then((res) => res.json())
  .then((json) => (data.products = json));
    let lists = data.products
    console.log(lists)
function load() {
  if (length.value >= data.products.length) {
    return;
  } else {
    length.value = length.value + 3;
  }
}

function Productloaded() {
  return data.products.slice(0, length.value);
}
</script>
   