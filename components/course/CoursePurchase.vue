<template>
  <div class="mt-6">
    <!-- 加载状态 -->
    <div v-if="loading" class="space-y-4">
      <div class="h-8 animate-pulse rounded bg-gray-700"></div>
      <div class="h-12 animate-pulse rounded bg-gray-700"></div>
      <div class="h-6 animate-pulse rounded bg-gray-700"></div>
    </div>

    <!-- 加载完成状态 -->
    <div v-else class="space-y-4">
      <!-- 价格信息将通过API获取 -->
      <div class="text-3xl font-bold">
        {{ formatPrice(price) }}
      </div>

      <!-- 购买按钮 -->
      <button
        class="bg-primary-600 hover:bg-primary-700 w-full rounded-lg px-4 py-3 font-medium text-white transition-colors"
        @click="handlePurchase"
      >
        Buy now
      </button>

      <!-- 退款保证 -->
      <div class="flex items-center text-sm text-gray-400">
        <svg
          class="mr-2 h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
        30-Day Money-Back Guarantee
      </div>
    </div>
  </div>
</template>

<script setup>
const loading = ref(true)
const price = ref(19.99)

// 模拟API加载
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
})

const formatPrice = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value)
}

const handlePurchase = () => {
  // 处理购买逻辑
  console.log('Processing purchase...')
}
</script>
