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
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>
