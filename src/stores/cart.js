import { defineStore } from 'pinia';

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || []
  }),
  actions: {
    addToCart(product) {
      if (!this.isInCart(product.id)) {
        this.cart.push(product);
        localStorage.setItem('cart', JSON.stringify(this.cart));
      } else console.log(`Товар ${product.id} - ${product.name} уже в корзине`)
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter(item => item.id !== productId);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    addToFavorites(product) {
      if (!this.isInFavorites(product.id)) {
        this.favorites.push(product);
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
      } else console.log(`Товар ${product.id} - ${product.name} уже в избранном`)
    },
    removeFromFavorites(productId) {
      this.favorites = this.favorites.filter(item => item.id !== productId);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    },
    isInCart(productId) {
      return this.cart.some(item => item.id === productId);
    },
    isInFavorites(productId) {
      return this.favorites.some(item => item.id === productId);
    },
  }
});
