<template>
  <nav aria-label="Breadcrumb" class="breadcrumbs">
    <ol class="breadcrumbs__list">
      <li class="breadcrumbs__item">
        <a href="/" class="breadcrumbs__link">Главная</a>
      </li>
      <li class="breadcrumbs__separator">/</li>
      <li class="breadcrumbs__item">
        <a href="/storage-systems" class="breadcrumbs__link">Системы хранения</a>
      </li>
      <li class="breadcrumbs__separator">/</li>
      <li class="breadcrumbs__item breadcrumbs__item--current" aria-current="page">
        <a href="/shelving-system-kits" class="breadcrumbs__link">Комплекты стеллажных систем</a>
      </li>
    </ol>
  </nav>
</template>

<style scoped lang="scss">
.breadcrumbs {
  font-size: 1rem;
  font-family: 'SF UI Text', sans-serif;

  &__list {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
  }

  &__item {
    margin-right: 5px;
  }

  &__link {
    text-decoration: none;
  }

  &__item--current {
  }

  &__separator {
    margin: 0 5px;
  }
}

</style>
