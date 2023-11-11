<template>
    <div>
      <v-img
        class="mx-auto my-6"
        max-width="210"
        src="https://logohistory.net/wp-content/uploads/2023/06/Shein-Emblem.png"
      ></v-img>
  
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
      >
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>
  
        <v-text-field v-model="userName"
          density="compact"
          placeholder="User Name"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        ></v-text-field>
  
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between" >
          Password
  
          <a
            class="text-caption text-decoration-none text-black "
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Forgot login password?</a>
        </div>
  
        <v-text-field v-model="password"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>
  
     
  
        <v-btn 
          block
          class="mb-8"
          color="blak"
          size="large"
          variant="tonal"
          @click="submit()"
        >
          Log In
        </v-btn>
  
        <v-card-text class="text-center">
          <router-link to="/Profile"
            class="text-black text-decoration-none"
        
            rel="noopener noreferrer"
            target="_blank"
          >
            Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
          </router-link>
        </v-card-text>
      </v-card>
    </div>
  </template>
 <script setup>
 import { ref } from 'vue'
 import {useResStore} from '@/store/LogIn.js'
const LogIn = useResStore() ;
const userName=ref('')
const password=ref('')
 const visible = ref(false)
const submit = ()=> {
    fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: userName.value,
    password:  password.value,
    // expiresInMins: 60, // optional
  })
})
.then(json => json.json())
.then((json)=>console.log(LogIn.res = json)

);

    // console.log(userName.value , password.value)
}

            

</script>