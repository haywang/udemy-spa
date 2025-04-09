<template>
  <div class="relative ml-4 max-w-2xl flex-1">
    <label class="sr-only" for="search-input">Search for anything</label>
    <form @submit.prevent="handleSubmit" class="relative flex items-center">
      <input
        id="search-input"
        v-model="searchQuery"
        type="text"
        name="q"
        class="focus:border-primary-500 focus:ring-primary-500 w-full rounded-lg border border-gray-300 py-2 pr-10 pl-4 text-sm focus:ring-1 focus:outline-none"
        placeholder="Search for anything"
        autocomplete="off"
        role="combobox"
        aria-autocomplete="both"
        aria-expanded="false"
      />
      <button
        type="submit"
        class="absolute top-1/2 right-2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600"
        :disabled="!searchQuery"
      >
        <svg
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </form>
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
