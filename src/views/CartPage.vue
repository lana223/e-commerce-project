<script setup>
import ProductItem from "@/components/HomeComponent/ProductItem.vue";
import { useCartStore } from "@/store/app";
import { computed } from "vue";
const cart = useCartStore();
const Cards = computed(() => 
cart.items,
);

</script>


<template>
  <v-container>
    <v-row>
      
        <ProductItem :list="Card"  v-for="Card in Cards" 
                :key="Card.id"
      >
          <template #delete>
            <VBtn
              icon="mdi-delete"
              color="error"
              @click="cart.removeFromCart(Card.id)"
            />
          </template>
        </ProductItem>
    
    </v-row>
  </v-container>
</template>