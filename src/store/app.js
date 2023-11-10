// Utilities
import { defineStore } from 'pinia'
// )


export const useCartStore = defineStore('cart', {
  state: () => ({ 
    
    products: [],
    items: [],
   
  }),
 
  actions: {
    addToCart(item) {
      
      this.items.push(item)
      
      console.log("added cart");
  
    },
    removeFromCart(id) {
   
      this.items = this.items.filter((item) => item.id !== id);
      console.log("removed")
    }
  },
  persist: true,
})











