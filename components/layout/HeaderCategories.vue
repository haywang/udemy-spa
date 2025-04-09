<template>
  <div class="relative h-full">
    <button
      class="hover:text-primary-700 flex h-full items-center px-4 text-sm"
      :aria-expanded="isOpen"
    >
      Explore
    </button>

    <!-- Dropdown Menu -->
    <div
      v-if="isOpen"
      ref="dropdownRef"
      class="absolute top-full left-0 z-50 mt-1 w-64 rounded-lg bg-white py-2 shadow-lg"
    >
      <ul class="m-0 list-none p-0">
        <li v-for="(category, index) in categories" :key="index">
          <button
            class="hover:text-primary-400 hover:bg-primary-100 flex h-full items-center px-4 py-2 text-sm text-gray-500"
            @click="selectCategory(category)"
          >
            {{ category.name }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const isOpen = ref(false)
const dropdownRef = ref(null)

const categories = ref([
  { name: 'Development' },
  { name: 'Business' },
  { name: 'Finance & Accounting' },
  { name: 'IT & Software' },
  { name: 'Office Productivity' },
  { name: 'Design' },
  { name: 'Marketing' },
  { name: 'Personal Development' }
])

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectCategory = (category) => {
  // Handle category selection
  console.log('Selected category:', category)
  isOpen.value = false
}

// Close dropdown when clicking outside
onClickOutside(dropdownRef, () => {
  isOpen.value = false
})
</script>
