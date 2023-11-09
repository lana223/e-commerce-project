// Utilities
import { defineStore } from 'pinia'
// )


export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  
  }),
 
  actions: {
    addToCart(item) {
      console.log(this.items)
      this.items.push(item)
      console.log( this.items.push(item))
      console.log("added cart");
      // localStorage.setItem('cartItems', JSON.stringify(items.value))
    },
    removeFromCart(id) {
      console.log(id)
      this.items = this.items.filter((item) => item.id !== id);
      console.log(id)
      console.log("removed")
    }
  },
})

// export const useCartStore = defineStore('cart', ()=> {
//      state:()=>({
//       items:[],
//      })


//   actions: {
//   addToCart = item => {
//     items.value.push(item)
//     console.log("added cart");
//     // localStorage.setItem('cartItems', JSON.stringify(items.value))
//   }
//   removeFromCart (id) {
//     this.items=this.items.filter((item)=>item.id !== id);
//    }

// };










//   return {items , addToCart, removeFromCart}
// },
