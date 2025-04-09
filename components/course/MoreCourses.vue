<template>
  <div class="mb-8">
    <!-- Section Title -->
    <h2 class="mb-6 text-2xl font-bold text-gray-900">
      More Courses by
      <a :href="instructorUrl" class="text-blue-600 hover:underline">{{
        instructorName
      }}</a>
    </h2>

    <!-- Course Cards Carousel -->
    <div class="relative">
      <!-- Course Cards Container -->
      <div class="scrollbar-hide flex gap-4 overflow-x-auto pb-4">
        <div
          v-for="course in courses"
          :key="course.id"
          class="w-[280px] flex-none"
        >
          <CourseCard :course="course" />
        </div>
      </div>

      <!-- Navigation Buttons (Optional) -->
      <button
        class="absolute top-1/2 -left-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg hover:bg-gray-50"
        @click="scrollLeft"
        v-if="canScrollLeft"
      >
        <svg
          class="h-6 w-6 text-gray-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        class="absolute top-1/2 -right-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg hover:bg-gray-50"
        @click="scrollRight"
        v-if="canScrollRight"
      >
        <svg
          class="h-6 w-6 text-gray-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CourseCard from './CourseCard.vue'

// Props
const props = defineProps({
  instructorName: {
    type: String,
    default: 'ACI69 | Trading ™'
  },
  instructorUrl: {
    type: String,
    default: '/user/leonardo-ok/'
  },
  courses: {
    type: Array,
    default: () => [
      {
        id: '1',
        image: 'https://img-c.udemycdn.com/course/240x135/2657286_2d98_4.jpg',
        title: 'Amazon Power: How To Get Free Products Online?',
        url: '/course/amazon-power-how-to-get-free-products-for-life-for-free-deals-coupon/',
        instructor: 'ACI69 | Trading ™, ACI69 Trading',
        rating: 3.7,
        reviewCount: 34,
        totalHours: '3.5',
        lectureCount: 27,
        level: 'All Levels',
        currentPrice: 15.99,
        originalPrice: 49.99
      },
      {
        id: '2',
        image: 'https://img-c.udemycdn.com/course/240x135/3894936_1a8c_2.jpg',
        title: 'Bitcoin Trading Bot Robot Strong and Easy Money Machine™',
        url: '/course/bitcoin-trading-bot-strong-and-easy-robot-crypto-bot-btc-money-machine/',
        instructor: 'ACI69 Trading, ACI69 | Trading ™',
        rating: 4.1,
        reviewCount: 22,
        totalHours: '2.5',
        lectureCount: 27,
        level: 'Intermediate',
        currentPrice: 15.99,
        originalPrice: 44.99
      },
      {
        id: '3',
        image: 'https://img-c.udemycdn.com/course/240x135/3910744_6efe_10.jpg',
        title: 'Bitcoin corso di TRADING Semplice™ Parte 1 con Indicatori',
        url: '/course/bitcoin-corso-di-trading-online-semplice-indicatori-btc-criptovalute/',
        instructor: 'ACI69 Trading, ACI69 | Trading ™',
        rating: 4.7,
        reviewCount: 229,
        totalHours: '7.5',
        lectureCount: 48,
        level: 'Intermediate',
        currentPrice: 13.99,
        originalPrice: 59.99
      }
    ]
  }
})

// Scroll functionality
const containerRef = ref(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(false)

const updateScrollButtons = () => {
  if (!containerRef.value) return
  canScrollLeft.value = containerRef.value.scrollLeft > 0
  canScrollRight.value =
    containerRef.value.scrollLeft <
    containerRef.value.scrollWidth - containerRef.value.clientWidth
}

const scrollLeft = () => {
  if (!containerRef.value) return
  containerRef.value.scrollBy({ left: -300, behavior: 'smooth' })
}

const scrollRight = () => {
  if (!containerRef.value) return
  containerRef.value.scrollBy({ left: 300, behavior: 'smooth' })
}

onMounted(() => {
  if (containerRef.value) {
    containerRef.value.addEventListener('scroll', updateScrollButtons)
    updateScrollButtons()
  }
})
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
