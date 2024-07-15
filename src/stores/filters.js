import { defineStore } from 'pinia';

import materials from '@/data/materials.json';
import filters from '@/data/filters.json';

export const useFilterStore  = defineStore('filterStore', {
  state: () => ({
    sortBy: filters[0].id || null,
    material: materials[0].id || null,
  }),
  actions: {
    setSortBy(sortBy) {
      this.sortBy = sortBy;
    },
    setMaterial(material) {
      this.material = material;
    }
  }
});
