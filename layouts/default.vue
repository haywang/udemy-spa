<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <TheHeader />

    <!-- Main Content -->
    <main id="main-content-anchor" class="container mx-auto px-4 py-8">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'
import TheHeader from '~/components/layout/TheHeader.vue'
</script>
