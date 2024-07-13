<template>
  <div class="shop-page">
    <Breadcrumbs />
    <h1 class="shop-page__title">Комплекты стеллажных систем</h1>
    <Filters />
    <div class="shop-page__products">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-favorites="handleAddToFavorites"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Breadcrumbs from './Breadcrumbs.vue';
import Filters from './Filters.vue';
import ProductCard from './ProductCard.vue';
import items from '@/data/items.json'

export default defineComponent({
  components: {
    Breadcrumbs,
    Filters,
    ProductCard,
  },
  setup() {
    const products = ref(items);

    const handleAddToFavorites = (product) => {
      console.log(`Product added to favorites from ShopPage: ${product.sku}`);
      // Ваш код для обработки добавления товара в избранное
    };

    const handleAddToCart = (product) => {
      console.log(`Product added to cart from ShopPage: ${product.sku}`);
      // Ваш код для обработки добавления товара в корзину
    };

    return {
      products,
      handleAddToFavorites,
      handleAddToCart,
    };
  },
});
</script>

<style scoped>
.shop-page {
  height: 100%;
}

.shop-page__title {
  font-size: 36px;
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 600;
  line-height: 3rem;
  margin: 2rem 0;
}

.shop-page__products {
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
}
</style>
