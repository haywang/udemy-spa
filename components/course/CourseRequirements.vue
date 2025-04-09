<template>
  <div class="mb-8 rounded-lg bg-white p-6 shadow-sm">
    <span id="requirements" class="invisible relative -top-20 block"></span>
    <h2 data-purpose="requirements-title" class="mb-4 text-2xl font-bold">
      Requirements
    </h2>
    <ul class="space-y-2">
      <li v-for="(requirement, index) in requirements" :key="index">
        <div class="flex items-start">
          <svg
            aria-hidden="true"
            focusable="false"
            class="mt-1.5 h-3 w-3 flex-shrink-0 text-gray-600"
          >
            <use xlink:href="#icon-bullet"></use>
          </svg>
          <div class="ml-4 text-sm text-gray-600">
            {{ requirement }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  requirements: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>
