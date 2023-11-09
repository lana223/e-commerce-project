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
      <v-col
       v-for="Card in Cards" 
       :key="Card.id"
       >
        <ProductItem :product="Product">
          <template #actions>
            <VBtn
              icon="mdi-delete"
              color="error"
              @click="cart.removeItem(Card.id)"
            />
          </template>
        </ProductItem>
      </v-col>
    </v-row>
  </v-container>
</template>