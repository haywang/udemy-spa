<template>
  <header class="flex items-center border-b border-gray-200 bg-white px-6 py-4">
    <!-- Skip to content button -->
    <SkipToContent />

    <!-- Logo -->
    <HeaderLogo />

    <!-- Categories Navigation -->
    <HeaderCategories />

    <!-- Search Bar -->
    <HeaderSearch />

    <!-- Right side content placeholder -->
    <div class="flex-1"></div>
  </header>
</template>

<script setup>
import SkipToContent from './SkipToContent.vue'
import HeaderLogo from './HeaderLogo.vue'
import HeaderCategories from './HeaderCategories.vue'
import HeaderSearch from './HeaderSearch.vue'
</script>
