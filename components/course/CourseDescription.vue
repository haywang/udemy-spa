<template>
  <div class="mb-8 rounded-lg bg-white p-6 shadow-sm">
    <span id="description" class="invisible relative -top-20 block"></span>
    <h2 data-purpose="description-title" class="mb-4 text-2xl font-bold">
      Description
    </h2>
    <div class="relative">
      <!-- Description Content -->
      <div
        :class="[
          'prose max-w-none overflow-hidden transition-all duration-300',
          { 'max-h-[22.1rem]': !isExpanded }
        ]"
      >
        <div class="text-gray-600">
          <div data-purpose="safely-set-inner-html:description:description">
            <p>
              <strong>{{ description.title }}</strong>
            </p>
            <p>{{ description.intro }}</p>
            <p>{{ description.earnInfo }}</p>
            <p>{{ description.coinbaseIntro }}</p>
            <p>{{ description.inviteInfo }}</p>
            <p><br /></p>
            <p>{{ description.topicsIntro }}</p>
            <p><br /></p>
            <ul class="list-inside space-y-4">
              <li v-for="(topic, index) in description.topics" :key="index">
                <p>
                  <span v-if="topic.isHighlight" class="font-bold">{{
                    topic.text
                  }}</span>
                  <span v-else>{{ topic.text }}</span>
                </p>
                <p v-if="topic.hasBreak"><br /></p>
              </li>
            </ul>
            <p><br /></p>
            <p>{{ description.conclusion }}</p>
            <p><br /></p>
            <p>{{ description.callToAction }}</p>
          </div>

          <!-- Target Audience Section -->
          <div class="mt-8">
            <h2 class="mb-4 text-2xl font-bold">Who this course is for:</h2>
            <ul class="list-inside space-y-2">
              <li
                v-for="(audience, index) in targetAudience"
                :key="index"
                class="flex items-start"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  class="mt-1.5 h-3 w-3 flex-shrink-0 text-gray-600"
                >
                  <use xlink:href="#icon-bullet"></use>
                </svg>
                <span class="ml-4">{{ audience }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Gradient Overlay -->
      <div
        v-if="!isExpanded"
        class="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-white to-transparent"
      ></div>
    </div>

    <!-- Show More/Less Button -->
    <button
      type="button"
      @click="toggleExpand"
      class="mt-4 flex items-center space-x-2 text-sm font-semibold text-purple-600 hover:text-purple-700"
    >
      <span>{{ isExpanded ? 'Show less' : 'Show more' }}</span>
      <svg
        aria-hidden="true"
        focusable="false"
        class="h-4 w-4 transform transition-transform duration-200"
        :class="{ 'rotate-180': isExpanded }"
      >
        <use :xlink:href="isExpanded ? '#icon-collapse' : '#icon-expand'"></use>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isExpanded = ref(false)

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}

defineProps({
  description: {
    type: Object,
    required: true,
    default: () => ({
      title:
        'Come funziona Coinbase per comprare Bitcoin ed altre criptovalute per guadagnarci?',
      intro:
        'Guarda in questa serie di Tutorial come funziona Coinbase per comprare, vendere e trasferire criptovalute.',
      earnInfo:
        'Guarda anche come guadagnare con Coinbase Criprovalute con Coinbase Earn: te lo spiego in maniera semplice.',
      coinbaseIntro:
        'Coinbase è un ottimo modo facile per iniziare con le criptovalute quindi se ti va iscriviti a questo corso e segui le semplici lezioni.',
      inviteInfo:
        "All'interno del corso troverai anche un invito per guadagnare e ti insegnerò anche come generare il tuo invito personale.",
      topicsIntro: 'Ecco gli argomenti che vedrai in questo corso su Coinbase:',
      topics: [
        {
          text: 'Introduzione: cosa è ed a cosa serve Coinbase?',
          hasBreak: true
        },
        {
          text: 'Come Ti Registri Gratis Passo Passo a Coinbase?',
          isHighlight: true,
          hasBreak: true
        }
        // ... other topics
      ],
      conclusion:
        "Ci vediamo dall'altra parte, iscriviti per non commettere gli errori che il 90% fa sempre quando inizia con Coinbase.",
      callToAction: "Ci vediamo dall'altra parte nella prima lezione!"
    })
  },
  targetAudience: {
    type: Array,
    required: true,
    default: () => [
      'Chiunque Voglia Imparare A Utilizzare Coinbase Senza Stress',
      'Chiunque Voglia Imparare Il Metodo Più Facile Per Comprare BITCOIN',
      'Chiunque Voglia Imparare Il Metodo Più Facile Per Comprare Altre Cirptovalute'
    ]
  }
})
</script>
