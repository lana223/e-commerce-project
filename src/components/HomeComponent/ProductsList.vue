<template>
  <v-container>
    <h1 class="text-center">Products</h1>
    <v-row>
      <product-item :product="Product"
        v-for="Product in companiesloaded"
        :key="Product.Id"
        :img="Product.image"
      >
      </product-item>
      <v-btn v-on:click="load()">Load More</v-btn>
    </v-row>
  </v-container>
</template>
   
   <script >
import ProductItem from "./ProductItem.vue";

export default {
  components: {
    ProductItem,
  },
 
  data() {
    return {
      Products: [],
      length: 6,
    };
  },
  methods: {
    load() {
      if (this.length >= this.Products.length) {
        return;
      } else {
        this.length = this.length + 3;
      }
    },
  },

  created() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => (this.Products = json));
  },
  computed: {
    companiesloaded() {
      return this.Products.slice(0, this.length);
    },
  },

};

</script>
   