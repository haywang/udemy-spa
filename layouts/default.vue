<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <TheHeader />

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer 可以后续添加 -->
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'
import TheHeader from '~/components/layout/TheHeader.vue'
</script>
