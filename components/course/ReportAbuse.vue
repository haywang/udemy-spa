<template>
  <div class="mb-8 border-t border-gray-200 pt-8">
    <button
      type="button"
      class="w-full rounded-lg border border-gray-300 bg-white px-6 py-3 text-center font-semibold text-gray-700 transition-colors hover:bg-gray-50"
      @click="handleReportClick"
    >
      Report abuse
    </button>
  </div>
</template>

<script setup>
// Emit event when report button is clicked
const emit = defineEmits(['report'])

const handleReportClick = () => {
  emit('report')
}
</script>
