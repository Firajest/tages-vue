<template>
  <article class="product-card">
    <p v-show="hasDiscount"
       class="product-card__discount">
      Скидка
    </p>
    <div class="product-card__image-wrapper">
      <img :src="product.image.url"
           :alt="product.name" 
           class="product-card__image">
    </div>
    <div class="product-card__details">
      <p class="product-card__code">{{ product.code }}</p>
      <p class="product-card__name">{{ product.name }}</p>
      <div class="product-card__line">
        <div class="product-card__prices">
          <p v-show="product.price.old_price"
             class="product-card__price product-card__price--old">
             {{ product.price.old_price }}₽
          </p>
          <p class="product-card__price product-card__price--current">
            {{ product.price.current_price }}₽
          </p>
        </div>
        <div class="product-card__actions">
          <button
            @click="toggleCart(product)"
            class="product-card__button product-card__button--cart"
          >
            <img :src="isInCart(product.id) ? 'pic/circle-checked.svg' : 'pic/cart.svg'"
                 :alt="product.name"
                 class="product-card__image">
          </button>
          <button
            @click="toggleFavorites(product)"
            class="product-card__button product-card__button--favorite"
            :style="'color: red'"
          >
            <img :src="isInFavorites(product.id) ? 'pic/circle-checked.svg' : 'pic/heart.svg'"
                 :alt="product.name"
                 class="product-card__image">
          </button>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { defineComponent, computed  } from 'vue';
import { useCartStore } from '@/stores/cart';

export default defineComponent({
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const cartStore = useCartStore();

    const hasDiscount = computed(() => {
      return props.product.price.old_price && props.product.price.current_price;
    });

    const addToCart = (product) => {
      cartStore.addToCart(product);
    };

    const removeFromCart = (productId) => {
      cartStore.removeFromCart(productId);
    };

    const addToFavorites = (product) => {
      cartStore.addToFavorites(product);
    };

    const removeFromFavorites = (productId) => {
      cartStore.removeFromFavorites(productId);
    };

    const toggleCart = (product) => {
      if (cartStore.isInCart(product.id)) {
        cartStore.removeFromCart(product.id);
      } else {
        cartStore.addToCart(product);
      }
    };

    const toggleFavorites = (product) => {
      if (cartStore.isInFavorites(product.id)) {
        cartStore.removeFromFavorites(product.id);
      } else {
        cartStore.addToFavorites(product);
      }
    };

    const isInCart = (productId) => {
      return cartStore.isInCart(productId);
    };

    const isInFavorites = (productId) => {
      return cartStore.isInFavorites(productId);
    };

    return {
      addToCart,
      removeFromCart,
      addToFavorites,
      removeFromFavorites,
      toggleCart,
      toggleFavorites,
      isInCart,
      isInFavorites,
      hasDiscount,
    };
  },
});
</script>

<style scoped lang="scss">
.product-card {
  font-family: 'SF UI Text', sans-serif;
  border: 1px solid #EEE;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(336px - 1.5em);
  position: relative;
  padding: .5em 0.75em;

  &__discount {
    position: absolute;
    top: 8px;
    left: 0;
    z-index: 2;
    background-color: #EB5757;
    color: #FFFFFF;
    padding: 3px 1em;
  }

  &__image {
    width: 100%;
    height: auto;

    &-wrapper {
      width: 238px;
      height: 237px;
    }
  }
  &__name {
    text-align: left;
    font-size: 1em;
    line-height: 1.375;
    font-weight: 600; // по макету 500, но от обычного 400 на глаз нет разницы
    margin-top: 0.375em !important;
  }

  &__details {
    text-align: center;
    width: 100%;
    margin: 0 1em;
  }

  &__code {
    font-size: 0.625em;
    line-height: 1.4;
    color: #777;
    text-align: left;
    min-height: 1.4em;
    margin-top: 2.3em !important;
  }

  &__line {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__prices {
    display: flex;
    gap: 0.5em;
  }

  &__price {
    font-size: 1em;
    margin: 5px 0;
    &--old {
      text-decoration: line-through;
      color: #888888;

    }
  }
    

  &__actions {
    display: flex;
    justify-content: right;
    width: 100%;
    gap: 1.5em;
    margin-right: 0.5em;
  }

  &__button {
    padding: 0;
    border: none;
    background: none;
    width: 1.35em;
    height: 1.35em;
  }
}
</style>
