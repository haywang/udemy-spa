<template>
  <div
    class="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
  >
    <!-- Course Image -->
    <div class="relative h-[135px] w-full">
      <img
        :src="course.image"
        :srcset="`${course.image} 1x, ${course.image.replace('240x135', '480x270')} 2x`"
        :alt="course.title"
        class="h-full w-full object-cover"
        width="240"
        height="135"
        loading="lazy"
      />
    </div>

    <!-- Course Content -->
    <div class="flex flex-1 flex-col p-4">
      <!-- Title -->
      <h3
        class="mb-2 line-clamp-2 min-h-[40px] text-base font-bold text-gray-900"
      >
        <a
          :href="course.url"
          target="_blank"
          rel="noopener"
          class="hover:text-blue-600"
        >
          {{ course.title }}
        </a>
      </h3>

      <!-- Instructor -->
      <p class="mb-2 text-xs text-gray-600">{{ course.instructor }}</p>

      <!-- Rating -->
      <div class="mb-2 flex items-center gap-2">
        <span class="font-bold text-gray-700">{{ course.rating }}</span>
        <div class="relative h-[14px] w-[70px]">
          <svg
            aria-hidden="true"
            width="100%"
            height="100%"
            viewBox="0 0 70 14"
            fill="none"
          >
            <mask :id="'star-rating-mask-' + course.id">
              <rect
                x="0"
                y="0"
                :width="`${(course.rating / 5) * 100}%`"
                height="100%"
                fill="white"
              />
            </mask>
            <g
              class="text-yellow-400"
              :mask="`url(#star-rating-mask-${course.id})`"
            >
              <use
                xlink:href="#icon-rating-star"
                width="14"
                height="14"
                x="0"
              />
              <use
                xlink:href="#icon-rating-star"
                width="14"
                height="14"
                x="14"
              />
              <use
                xlink:href="#icon-rating-star"
                width="14"
                height="14"
                x="28"
              />
              <use
                xlink:href="#icon-rating-star"
                width="14"
                height="14"
                x="42"
              />
              <use
                xlink:href="#icon-rating-star"
                width="14"
                height="14"
                x="56"
              />
            </g>
            <g class="text-gray-200">
              <use
                xlink:href="#icon-rating-star"
                width="12"
                height="12"
                x="1"
                y="1"
              />
              <use
                xlink:href="#icon-rating-star"
                width="12"
                height="12"
                x="15"
                y="1"
              />
              <use
                xlink:href="#icon-rating-star"
                width="12"
                height="12"
                x="29"
                y="1"
              />
              <use
                xlink:href="#icon-rating-star"
                width="12"
                height="12"
                x="43"
                y="1"
              />
              <use
                xlink:href="#icon-rating-star"
                width="12"
                height="12"
                x="57"
                y="1"
              />
            </g>
          </svg>
        </div>
        <span class="text-xs text-gray-500">({{ course.reviewCount }})</span>
      </div>

      <!-- Course Meta -->
      <div class="mb-4 flex flex-wrap gap-2 text-xs text-gray-500">
        <span>{{ course.totalHours }} total hours</span>
        <span>{{ course.lectureCount }} lectures</span>
        <span>{{ course.level }}</span>
      </div>

      <!-- Price -->
      <div class="mt-auto flex items-center gap-2">
        <span class="text-lg font-bold text-gray-900"
          >${{ course.currentPrice }}</span
        >
        <s class="text-sm text-gray-500">${{ course.originalPrice }}</s>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  course: {
    type: Object,
    required: true,
    // Example course object structure
    default: () => ({
      id: '',
      image: '',
      title: '',
      url: '',
      instructor: '',
      rating: 0,
      reviewCount: 0,
      totalHours: '',
      lectureCount: 0,
      level: '',
      currentPrice: 0,
      originalPrice: 0
    })
  }
})
</script>
