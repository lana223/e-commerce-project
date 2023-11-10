// Utilities
import { defineStore } from 'pinia'
// )


export const useLikeStore = defineStore('Like', {
  state: () => ({ 
    
    products: [],
    Like: [],
   
  }),
 
  actions: {
    addToCart(item) {
      
      this.Like.push(item)
      
      console.log("added cart");
  
    },
    removeFromCart(id) {
   
      this.Like= this.Like.filter((item) => item.id !== id);
      console.log("removed")
    }
  },
  persist: true,
})
