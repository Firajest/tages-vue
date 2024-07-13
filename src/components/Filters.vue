<template>
  <div class="filters">
    <div class="filters__item">
      <label for="sort" class="filters__label">Сортировать по:</label>
      <div class="filters__select-wrapper">
        <select id="sort" class="filters__select">
          <option value="price">Цене</option>
          <option value="popularity">Популярности</option>
        </select>
      </div>
    </div>
    <div class="filters__item">
      <label for="filter" class="filters__label">Материал</label>
      <div class="filters__select-wrapper">
        <select id="filter" class="filters__select">
          <option value="category1">Категория 1</option>
          <option value="category2">Категория 2</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.filters {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  font-family: 'SF Pro Display', sans-serif;
  gap: 1.5em;

  &__item {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  &__label {
    margin-left: 1em;
    color: #4F4F4F;
    font-size: 0.75em;
  }

  &__select {
    font-size: 0.875em;
    padding: 0.5em 1em;
    width: 18em;
    height: 2.5em;
    line-height: 1;
    background-color: #F2F2F2;
    border: none;
    background-image: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;

    &-wrapper {
      position: relative;
      display: inline-block;

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 1em;
        width: 1.1em;
        height: 0.7em;
        background: url('/pic/arrow.svg');
        background-size: contain;
        background-repeat: no-repeat;
        transform: translateY(-50%);
        pointer-events: none;
      }
    }
  }
}
</style>
