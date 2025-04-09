<template>
  <div data-purpose="reviews" class="mb-8">
    <span id="reviews"></span>
    <!-- Reviews Header -->
    <div class="mb-6 flex items-center gap-2">
      <svg aria-hidden="true" focusable="false" class="h-6 w-6 text-yellow-400">
        <use xlink:href="#icon-rating-star"></use>
      </svg>
      <span class="text-2xl font-bold">{{ rating }} course rating</span>
      <svg aria-hidden="true" focusable="false" class="h-4 w-4 text-gray-400">
        <use xlink:href="#icon-bullet"></use>
      </svg>
      <span class="text-2xl font-bold">{{ totalRatings }} ratings</span>
    </div>

    <!-- Reviews List -->
    <div class="space-y-8">
      <div
        v-for="(review, index) in reviews"
        :key="index"
        class="rounded-lg bg-white p-6 shadow-sm"
      >
        <!-- Review Header -->
        <div class="mb-4 flex items-start justify-between">
          <div class="flex items-start gap-4">
            <div class="flex-grow">
              <p class="mb-2 text-lg font-semibold">{{ review.name }}</p>
              <div class="flex items-center gap-3">
                <!-- Star Rating -->
                <span class="relative inline-block h-[14px] w-[70px]">
                  <span class="sr-only"
                    >Rating: {{ review.rating }} out of 5</span
                  >
                  <svg
                    aria-hidden="true"
                    width="100%"
                    height="100%"
                    viewBox="0 0 70 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      :id="'star-rating-mask-' + index"
                      data-purpose="star-rating-mask"
                    >
                      <rect
                        x="0"
                        y="0"
                        :width="(review.rating / 5) * 100 + '%'"
                        height="100%"
                        fill="white"
                      ></rect>
                    </mask>
                    <g
                      class="text-yellow-400"
                      :mask="`url(#star-rating-mask-${index})`"
                      data-purpose="star-filled"
                    >
                      <use
                        xlink:href="#icon-rating-star"
                        width="14"
                        height="14"
                        x="0"
                      ></use>
                      <use
                        xlink:href="#icon-rating-star"
                        width="14"
                        height="14"
                        x="14"
                      ></use>
                      <use
                        xlink:href="#icon-rating-star"
                        width="14"
                        height="14"
                        x="28"
                      ></use>
                      <use
                        xlink:href="#icon-rating-star"
                        width="14"
                        height="14"
                        x="42"
                      ></use>
                      <use
                        xlink:href="#icon-rating-star"
                        width="14"
                        height="14"
                        x="56"
                      ></use>
                    </g>
                    <g class="text-gray-200" data-purpose="star-bordered">
                      <use
                        xlink:href="#icon-rating-star"
                        width="12"
                        height="12"
                        x="1"
                        y="1"
                      ></use>
                      <use
                        xlink:href="#icon-rating-star"
                        width="12"
                        height="12"
                        x="15"
                        y="1"
                      ></use>
                      <use
                        xlink:href="#icon-rating-star"
                        width="12"
                        height="12"
                        x="29"
                        y="1"
                      ></use>
                      <use
                        xlink:href="#icon-rating-star"
                        width="12"
                        height="12"
                        x="43"
                        y="1"
                      ></use>
                      <use
                        xlink:href="#icon-rating-star"
                        width="12"
                        height="12"
                        x="57"
                        y="1"
                      ></use>
                    </g>
                  </svg>
                </span>
                <span class="text-sm text-gray-500">{{
                  review.timeSince
                }}</span>
              </div>
            </div>
            <!-- Avatar -->
            <template v-if="review.avatar">
              <img
                :src="review.avatar"
                :alt="review.name"
                class="h-12 w-12 rounded-full object-cover"
                width="48"
                height="48"
                loading="lazy"
              />
            </template>
            <template v-else>
              <div
                class="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-lg font-semibold text-gray-600"
              >
                {{ getInitials(review.name) }}
              </div>
            </template>
          </div>
          <!-- More Actions Button -->
          <button
            type="button"
            class="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <svg
              aria-label="Additional actions for review"
              role="img"
              focusable="false"
              class="h-5 w-5"
            >
              <use xlink:href="#icon-more"></use>
            </svg>
          </button>
        </div>

        <!-- Review Content -->
        <div
          :class="[
            'mb-4 text-gray-700',
            { 'line-clamp-3': review.content.length > 200 }
          ]"
        >
          <span>{{ review.content }}</span>
        </div>

        <!-- Show More Button -->
        <template v-if="review.content.length > 200">
          <button
            type="button"
            class="mb-4 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline"
          >
            Show more
          </button>
        </template>

        <!-- Review Feedback -->
        <div class="mb-4 flex items-center gap-4">
          <span class="text-sm text-gray-500">Helpful?</span>
          <div class="flex gap-2">
            <button
              type="button"
              value="yes"
              class="rounded-full p-2 hover:bg-gray-100"
            >
              <svg
                aria-label="Mark review as helpful"
                role="img"
                focusable="false"
                class="h-5 w-5 text-gray-400"
              >
                <use xlink:href="#icon-thumb-up"></use>
              </svg>
            </button>
            <button
              type="button"
              value="no"
              class="rounded-full p-2 hover:bg-gray-100"
            >
              <svg
                aria-label="Mark review as unhelpful"
                role="img"
                focusable="false"
                class="h-5 w-5 text-gray-400"
              >
                <use xlink:href="#icon-thumb-down"></use>
              </svg>
            </button>
          </div>
        </div>

        <!-- Instructor Response -->
        <div
          v-if="review.instructorResponse"
          class="rounded-lg bg-gray-50 p-4 text-sm text-gray-600"
        >
          {{ review.instructorResponse }}
        </div>
      </div>
    </div>

    <!-- Show All Reviews Button -->
    <button
      type="button"
      class="mt-6 w-full rounded-lg border border-gray-300 bg-white px-6 py-3 text-center font-semibold text-gray-700 hover:bg-gray-50"
    >
      Show all reviews
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Props definition
const props = defineProps({
  rating: {
    type: Number,
    default: 4.7
  },
  totalRatings: {
    type: Number,
    default: 50
  },
  reviews: {
    type: Array,
    default: () => [
      {
        name: 'Fabrizio G.',
        rating: 3.0,
        timeSince: '2 years ago',
        content:
          'Spiegazione elementare dell\'uso di Coinbase. Probabilmente la cosa più fastidiosa è che tutte le risorse "scaricabili" fanno riferimento a pseudo bonus o referral cosa alquanto antipatica ritengo.',
        instructorResponse:
          'Ciao Fabrizio sei libero di non usare i regali che Coinbase mette a tua disposizione. Per qualsiasi cosa, sono qua! A presto, Leo | ACI69'
      },
      {
        name: 'Paolo S.',
        rating: 5.0,
        timeSince: '3 years ago',
        content:
          'Bene! ottima spiegazione, avevo giù una buona conoscenza, così è stata approfondita e, sempre a portata di mano la rinfrescata.',
        instructorResponse: 'Grazie Paolo resto a tua disposizione a presto!'
      }
    ]
  }
})

// Helper function to get initials from name
const getInitials = (name) => {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
}
</script>

<style scoped>
.component-margin {
  margin-bottom: 3.2rem;
}

/* Add any additional custom styles here */
</style>
