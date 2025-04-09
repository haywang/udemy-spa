<template>
  <div class="">
    <MarketBanner />
    <!-- Header -->
    <Header />

    <!-- Main Content -->
    <!-- <main class="flex-grow"> -->
    <slot />
    <!-- </main> -->

    <!-- Footer -->
    <!-- <TheFooter /> -->
  </div>
</template>

<script setup>
import Header from '@/components/layout/Header.vue'
</script>
