<template>
  <div class="relative aspect-video max-w-2xl">
    <button
      type="button"
      class="group focus:ring-primary-500 relative h-full w-full overflow-hidden rounded-lg focus:ring-2 focus:outline-none"
      aria-label="Play course preview"
    >
      <!-- 预览图片 -->
      <img
        :src="previewImage.src"
        :srcset="formatSrcSet"
        alt="Course preview"
        class="h-full w-full object-cover"
        sizes="(min-width: 1080px) 240px, (min-width: 43.8125rem) 600px, 100vw"
        loading="eager"
      />

      <!-- 渐变遮罩 -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
      ></div>

      <!-- 播放按钮 -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div
          class="rounded-full bg-white/20 p-4 backdrop-blur-sm transition-colors group-hover:bg-white/30"
        >
          <svg
            class="h-12 w-12 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  previewImage: {
    type: Object,
    required: true
    // 应包含 src 和 srcSet 对象
  }
})

// 格式化srcSet字符串
const formatSrcSet = computed(() => {
  return Object.entries(props.previewImage.srcSet)
    .map(([size, url]) => `${url} ${size}`)
    .join(', ')
})
</script>
