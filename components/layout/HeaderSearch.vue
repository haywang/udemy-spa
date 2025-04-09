<template>
  <div class="flex h-full flex-1 items-center px-4">
    <div
      class="relative flex h-12 w-full max-w-[600px] items-center rounded-[999px] border border-gray-400 bg-gray-50 focus-within:border-gray-600"
    >
      <button class="flex h-full items-center justify-center px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-5 w-5 text-gray-600"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
      <input
        type="text"
        placeholder="Search for anything"
        class="h-full flex-1 bg-transparent pr-4 text-sm outline-none placeholder:text-gray-600"
      />
    </div>
  </div>
</template>

<script setup>
const searchQuery = ref('')

const handleSubmit = () => {
  if (!searchQuery.value) return
  // TODO: Implement search functionality
  console.log('Searching for:', searchQuery.value)
}
</script>
