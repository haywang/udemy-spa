<template>
  <div class="space-y-4">
    <!-- Logo -->
    <NuxtLink to="/" class="inline-block">
      <img
        src="/staticx/udemy/images/v7/logo-udemy-inverted.svg"
        alt="Udemy"
        class="h-8 w-auto"
        loading="lazy"
      />
    </NuxtLink>

    <!-- Copyright -->
    <div class="text-sm text-gray-400">© {{ currentYear }} Udemy, Inc.</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
