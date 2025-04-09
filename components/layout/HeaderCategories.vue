<template>
  <nav class="relative ml-4" aria-label="Categories">
    <!-- Categories Button -->
    <button
      class="px-4 py-2 text-sm hover:text-gray-900 focus:outline-none"
      :aria-expanded="isOpen"
      @click="toggleDropdown"
    >
      Categories
    </button>

    <!-- Dropdown Menu -->
    <div
      v-if="isOpen"
      ref="dropdownRef"
      class="absolute top-full left-0 z-50 mt-1 w-64 rounded-md bg-white shadow-lg"
    >
      <div class="py-2">
        <ul class="m-0 list-none p-0">
          <li v-for="(category, index) in categories" :key="index">
            <button
              class="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
              @click="selectCategory(category)"
            >
              {{ category.name }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
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
  { name: 'Office Productivity' }
  // Add more categories as needed
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
