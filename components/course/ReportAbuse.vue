<template>
  <div class="mb-8 border-t border-gray-200 pt-8">
    <button
      type="button"
      class="border-primary-200 text-primary-500 hover:bg-primary-50 w-full rounded-lg border bg-white px-6 py-3 text-center font-semibold transition-colors"
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
