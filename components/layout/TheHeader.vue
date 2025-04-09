<template>
  <header class="border-b border-gray-200">
    <nav
      class="mx-auto flex h-16 max-w-[1340px] items-center justify-between px-4"
    >
      <!-- Left Section -->
      <div class="flex items-center gap-2">
        <!-- Logo -->
        <HeaderLogo />

        <!-- Categories -->
        <HeaderCategories />

        <!-- Search -->
        <HeaderSearch />
      </div>

      <!-- Right Section -->
      <div class="flex items-center">
        <!-- Business -->
        <HeaderBusinessLink />

        <!-- Teaching -->
        <HeaderTeachLink />

        <!-- Shopping Cart -->
        <HeaderCart />

        <!-- Auth Buttons -->
        <HeaderAuth />

        <!-- Language Selector -->
        <HeaderLanguage />
      </div>
    </nav>
  </header>
</template>

<script setup>
import HeaderLogo from './HeaderLogo.vue'
import HeaderCategories from './HeaderCategories.vue'
import HeaderSearch from './HeaderSearch.vue'
import HeaderBusinessLink from './HeaderBusinessLink.vue'
import HeaderTeachLink from './HeaderTeachLink.vue'
import HeaderCart from './HeaderCart.vue'
import HeaderAuth from './HeaderAuth.vue'
import HeaderLanguage from './HeaderLanguage.vue'
</script>
