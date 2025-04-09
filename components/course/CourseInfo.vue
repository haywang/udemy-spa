<template>
  <div class="mt-6 space-y-4">
    <!-- 标题和副标题 -->
    <div>
      <h1 class="text-3xl font-bold">{{ title }}</h1>
      <p class="mt-2 text-lg text-gray-300">{{ headline }}</p>
    </div>

    <!-- 评分和学生数 -->
    <div class="flex items-center space-x-4">
      <a
        href="#reviews"
        class="flex items-center space-x-2 text-sm hover:text-gray-300"
      >
        <!-- 评分星星 -->
        <div class="flex items-center">
          <span class="mr-2">{{ rating.score }}</span>
          <div class="flex">
            <template v-for="i in 5" :key="i">
              <svg
                class="h-4 w-4"
                :class="
                  i <= Math.round(rating.score)
                    ? 'text-yellow-400'
                    : 'text-gray-400'
                "
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </template>
          </div>
        </div>
        <span>({{ rating.count }} ratings)</span>
      </a>
      <div class="text-sm text-gray-300">{{ studentsCount }} students</div>
    </div>

    <!-- 讲师信息 -->
    <div class="text-sm">
      <span class="text-gray-400">Created by</span>
      <a href="#instructor-1" class="ml-1 hover:text-gray-300">{{
        instructor
      }}</a>
    </div>

    <!-- 其他信息 -->
    <div class="flex items-center space-x-4 text-sm text-gray-400">
      <!-- 最后更新时间 -->
      <div class="flex items-center">
        <svg
          class="mr-1 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Last updated {{ lastUpdated }}</span>
      </div>

      <!-- 语言 -->
      <div class="flex items-center">
        <svg
          class="mr-1 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        <span>{{ language }}</span>
      </div>

      <!-- 字幕 -->
      <div class="flex items-center">
        <svg
          class="mr-1 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
        <span>{{ caption }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  headline: {
    type: String,
    required: true
  },
  rating: {
    type: Object,
    required: true
  },
  studentsCount: {
    type: Number,
    required: true
  },
  instructor: {
    type: String,
    required: true
  },
  lastUpdated: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: true
  }
})
</script>
