<script setup>
import ProductItem from "@/components/HomeComponent/ProductItem.vue";
import { useLikeStore } from "@/store/Like";
import { computed } from "vue";
const Like= useLikeStore();
const Cards = computed(() => 
Like.Like,
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
              @click="Like.removeFromCart(Card.id)"
            />
          </template>
        </ProductItem>
    
    </v-row>
  </v-container>
</template>