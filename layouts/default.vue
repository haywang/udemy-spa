<template>
  <div class="flex min-h-screen flex-col bg-gray-50">
    <!-- Header -->
    <TheHeader />

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'
import TheHeader from '~/components/layout/TheHeader.vue'
import TheFooter from '~/components/layout/TheFooter.vue'
</script>
