<template>

        <v-app-bar class="px-16 " color="#EABF9F" >
          <v-app-bar-title> SHEIN </v-app-bar-title>
          <template v-slot:append>
            <v-btn><router-link  style="text-decoration:none;" to="/">Home</router-link></v-btn>
            <v-btn ><router-link  style="text-decoration:none;" to="/About">About</router-link></v-btn>
            <v-btn ><router-link  style="text-decoration:none;" to="/Products">Products</router-link></v-btn>
            <v-btn ><router-link  style="text-decoration:none;" to="/Details">Details</router-link></v-btn>
            <v-btn ><router-link style="text-decoration:none;" to="/Cart">Cart</router-link></v-btn>
          </template>
        </v-app-bar>
  
 
</template>

<script setup>
//
</script>
