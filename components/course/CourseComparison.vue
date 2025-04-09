<template>
  <div class="mb-8 rounded-lg bg-white p-6 shadow-sm">
    <h2 class="mb-6 text-2xl font-bold">Students also bought</h2>
    <div class="relative">
      <div
        :class="[
          'space-y-4 overflow-hidden transition-all duration-300',
          { 'max-h-[61rem]': !isExpanded }
        ]"
      >
        <div
          v-for="course in courses"
          :key="course.id"
          class="relative rounded-lg border p-4 hover:bg-gray-50"
        >
          <!-- Course Main Content -->
          <div class="flex items-start gap-4">
            <div class="flex-1">
              <!-- Title and Info -->
              <a
                :href="course.url"
                target="_blank"
                rel="noopener"
                class="mb-2 block text-lg font-medium hover:text-blue-600"
              >
                {{ course.title }}
              </a>
              <div
                class="mb-2 flex flex-wrap items-center gap-2 text-sm text-gray-600"
              >
                <!-- Badges -->
                <div
                  v-if="course.badges && course.badges.length"
                  class="flex gap-2"
                >
                  <span
                    v-for="badge in course.badges"
                    :key="badge.text"
                    class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-xs font-medium"
                    :class="getBadgeClasses(badge.type)"
                  >
                    <svg
                      v-if="badge.icon"
                      aria-hidden="true"
                      focusable="false"
                      class="h-3 w-3"
                    >
                      <use :xlink:href="'#icon-' + badge.icon"></use>
                    </svg>
                    {{ badge.text }}
                  </span>
                </div>
                <!-- Course Meta -->
                <span>{{ course.duration }}</span>
                <span>Updated {{ course.lastUpdated }}</span>
              </div>
            </div>

            <!-- Course Image -->
            <div class="h-16 w-16 flex-shrink-0">
              <img
                :src="course.image"
                :srcset="course.imageSrcSet"
                :alt="course.title"
                class="h-full w-full rounded-lg object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <!-- Course Stats -->
          <div class="mt-4 flex items-center justify-between">
            <div class="flex items-center gap-4">
              <!-- Rating -->
              <div class="flex items-center">
                <span class="mr-1 font-medium">{{ course.rating }}</span>
                <svg aria-hidden="true" class="h-4 w-4 text-yellow-400">
                  <use xlink:href="#icon-rating-star"></use>
                </svg>
              </div>
              <!-- Students -->
              <div class="flex items-center text-sm text-gray-600">
                <svg aria-hidden="true" focusable="false" class="mr-1 h-4 w-4">
                  <use xlink:href="#icon-people"></use>
                </svg>
                {{ formatStudentCount(course.studentCount) }}
              </div>
            </div>

            <!-- Price -->
            <div class="flex items-center gap-2">
              <span class="text-lg font-medium"
                >${{ course.currentPrice }}</span
              >
              <s class="text-sm text-gray-500">${{ course.originalPrice }}</s>
            </div>
          </div>

          <!-- Wishlist Button -->
          <button
            type="button"
            class="absolute top-4 right-4 rounded-full p-2 hover:bg-gray-100"
            :aria-label="'Add ' + course.title + ' to wishlist'"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              class="h-5 w-5 text-gray-600"
            >
              <use xlink:href="#icon-wishlisted-outline"></use>
            </svg>
          </button>

          <!-- Full Card Link -->
          <a
            :href="course.url"
            class="absolute inset-0"
            :aria-label="course.title"
            target="_blank"
            rel="noopener"
          ></a>
        </div>
      </div>

      <!-- Show More/Less Button -->
      <button
        type="button"
        @click="toggleExpand"
        class="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 py-3 text-sm font-semibold hover:bg-gray-50"
      >
        <span>{{ isExpanded ? 'Show less' : 'Show more' }}</span>
        <svg
          aria-hidden="true"
          focusable="false"
          class="h-4 w-4 transform transition-transform duration-200"
          :class="{ 'rotate-180': isExpanded }"
        >
          <use
            :xlink:href="isExpanded ? '#icon-collapse' : '#icon-expand'"
          ></use>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isExpanded = ref(false)

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}

// Helper function to format student count
const formatStudentCount = (count) => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(0)}k`
  }
  return count.toString()
}

// Helper function to get badge classes
const getBadgeClasses = (type) => {
  switch (type) {
    case 'bestseller':
      return 'bg-teal-100 text-teal-700'
    case 'premium':
      return 'bg-gray-100 text-gray-700'
    case 'highest-rated':
      return 'bg-orange-100 text-orange-700'
    default:
      return 'bg-gray-100 text-gray-700'
  }
}

defineProps({
  courses: {
    type: Array,
    required: true,
    default: () => [
      {
        id: 1,
        title: 'Crypto Condensed: The Complete Guide To Bitcoin',
        url: '/course/bitcoin-for-beginners/',
        duration: '7 total hours',
        lastUpdated: '2/2024',
        badges: [
          {
            type: 'premium',
            text: 'Premium',
            icon: 'verified'
          }
        ],
        rating: 4.2,
        studentCount: 31349,
        currentPrice: 14.99,
        originalPrice: 59.99,
        image: 'https://img-c.udemycdn.com/course/50x50/380970_b5b4_42.jpg',
        imageSrcSet:
          'https://img-c.udemycdn.com/course/50x50/380970_b5b4_42.jpg 1x, https://img-c.udemycdn.com/course/100x100/380970_b5b4_42.jpg 2x'
      }
      // ... other courses
    ]
  }
})
</script>
