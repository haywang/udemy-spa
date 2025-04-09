<template>
  <nav class="py-4">
    <div class="flex items-center space-x-2 text-sm">
      <template v-for="(category, index) in categories" :key="index">
        <NuxtLink
          :to="category.link"
          class="text-white transition-colors hover:text-gray-300"
        >
          {{ category.name }}
        </NuxtLink>

        <svg
          v-if="index < categories.length - 1"
          class="h-4 w-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </template>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    required: true
    // 每个category对象应该包含 name 和 link
  }
})
</script>
