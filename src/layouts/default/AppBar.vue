<template>
  <v-app-bar class="px-16" color="#EABF9F">
    <v-btn @click="toggleTheme()"
      ><v-icon class="mdi mdi-brightness-6" size="large"></v-icon
    ></v-btn>

    <v-btn
      ><router-link to="/LogIn">
        <v-icon
          class="mdi mdi-login-variant"
          size="x-large"
        ></v-icon> </router-link
    ></v-btn>

    <v-app-bar-title> SHEIN </v-app-bar-title>
    <template v-slot:append>
      <v-btn
        ><router-link style="text-decoration: none" to="/"
          >Home</router-link
        ></v-btn
      >
      <v-btn
        ><router-link style="text-decoration: none" to="/About"
          >About</router-link
        ></v-btn
      >
      <v-btn
        ><router-link style="text-decoration: none" to="/Products"
          >Products</router-link
        ></v-btn
      >
      <v-btn
        ><router-link style="text-decoration: none" to="/Details"
          >Details</router-link
        ></v-btn
      >
      <v-btn
        ><router-link style="text-decoration: none" to="/Cart"
          >Cart</router-link
        >
        <sup style="color: red" id="super">{{ cart.length }}</sup></v-btn
      >
      <v-btn
        ><router-link style="text-decoration: none" to="/Like"
          >Like</router-link
        >
        <sup style="color: red" id="super">{{ Like.length }}</sup></v-btn
      >
    </template>
  </v-app-bar>
</template>

<script  >
import { useCartStore } from "@/store/app";
import { useLikeStore } from "@/store/like";
import { useTheme } from "vuetify";
export default {
  data() {
    const theme = useTheme();

    function toggleTheme() {
      theme.global.name.value = theme.global.current.value.dark
        ? "light"
        : "dark";
    }
    return {
      cart: [],
      Like: [],
      theme,
      toggleTheme,
    };
  },

  created() {
    this.cart = useCartStore().items;
    this.Like = useLikeStore().Like;
  },
};
</script>
