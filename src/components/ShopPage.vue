<template>
  <div class="shop-page">
    <Breadcrumbs />
    <h1 class="shop-page__title">Комплекты стеллажных систем</h1>
    <Filters 
      :materials="materials"
      :filters="filters"
    />
    <div class="shop-page__products">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';
import { useFilterStore } from '@/stores/filters';

import Breadcrumbs from '@/components/Breadcrumbs.vue';
import Filters from '@/components/Filters.vue';
import ProductCard from '@/components/ProductCard.vue';
import items from '@/data/items.json';
import material from '@/data/materials.json';
import filter from '@/data/filters.json';

export default defineComponent({
  components: {
    Breadcrumbs,
    Filters,
    ProductCard,
  },
  setup() {
    const filterStore = useFilterStore();
    const materials = ref(material);
    const filters = ref(filter);

    const products = computed(() => {
      let filteredAndSortedProducts = items;
      if (filterStore.material) {
        filteredAndSortedProducts = filteredAndSortedProducts.filter(product => product.material === Number(filterStore.material));
      }
      return filteredAndSortedProducts.sort((a, b) => {
        if (filterStore.sortBy === 'price-asc') return a.price.current_price - b.price.current_price
        else if (filterStore.sortBy === 'price-desc') return b.price.current_price - a.price.current_price;
        else return filteredAndSortedProducts;
      });
    });

    return {
      products,
      materials,
      filters,
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
