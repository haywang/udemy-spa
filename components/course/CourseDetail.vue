<template>
  <!-- Course Header Section -->
  <div class="bg-white shadow-sm">
    <div class="container mx-auto px-4 py-8">
      <h1 class="mb-4 text-3xl font-bold">
        Complete Web Development Course 2024
      </h1>
      <p class="mb-4 text-gray-600">
        Learn web development from scratch with practical projects and modern
        technologies
      </p>
      <div class="mb-4 flex items-center space-x-4">
        <span class="text-yellow-400">★★★★★</span>
        <span class="text-gray-600">(4.8 average rating)</span>
        <span class="text-gray-600">10,234 students</span>
      </div>
      <div class="flex items-center space-x-4">
        <img
          src="https://placehold.co/40x40"
          alt="Instructor"
          class="rounded-full"
        />
        <span class="text-gray-700">Created by John Doe</span>
      </div>
    </div>
  </div>

  <!-- Main Content Section -->
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <!-- Left Column - Course Content -->
      <div class="lg:col-span-2">
        <!-- What you'll learn Section -->
        <CourseObjectives />
        <!-- Topic Navigation Section -->
        <TopicNavigation />
        <!-- Course Content Section -->
        <CourseCurriculum />

        <!-- Requirements Section -->
        <CourseRequirements :requirements="requirements" />

        <!-- Description Section -->
        <CourseDescription
          :description="courseDescription"
          :target-audience="targetAudience"
        />

        <!-- Related Courses Section -->
        <CourseComparison :courses="relatedCourses" />
      </div>

      <!-- Right Column - Course Card -->
      <div class="lg:col-span-1">
        <div class="sticky top-4 rounded-lg bg-white p-6 shadow-sm">
          <div class="mb-4">
            <img
              src="https://placehold.co/400x225"
              alt="Course Preview"
              class="w-full rounded-lg"
            />
          </div>
          <div class="mb-4 text-3xl font-bold">$94.99</div>
          <button
            class="mb-4 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Add to cart
          </button>
          <button
            class="w-full rounded-lg border border-blue-600 py-3 font-semibold text-blue-600 hover:bg-blue-50"
          >
            Buy now
          </button>
          <div class="mt-4 text-sm text-gray-600">
            <p>30-Day Money-Back Guarantee</p>
            <p>Full Lifetime Access</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import courseData from '@/data/courseContent.json'
import CourseRequirements from './CourseRequirements.vue'
import CourseObjectives from './CourseObjectives.vue'
import TopicNavigation from './TopicNavigation.vue'
import CourseCurriculum from './CourseCurriculum.vue'
import CourseDescription from './CourseDescription.vue'
import CourseComparison from './CourseComparison.vue'

const requirements = [
  'Un qualsiasi dispositivo Computer o Smartphone che navighi online'
  // Add more requirements here as needed
]

const courseDescription = {
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
    },
    {
      text: 'Ecco I Documenti E Dati Che Ti Verranno Richiesti Al Momento Della Tua Registrazione: Come Devi Fare Passo Passo?',
      hasBreak: true
    },
    {
      text: 'Guarda La Panoramica delle Funzionalita Iniziali Di Coinbase...',
      isHighlight: true,
      hasBreak: true
    },
    {
      text: 'Cosa Vedrai Appena Entrato In Coinbase?',
      hasBreak: true
    },
    {
      text: 'Carta Di Credito Prepagata Visa Ecco Come Richiederla In Coinbase?',
      isHighlight: true,
      hasBreak: true
    },
    {
      text: 'PAC: Piano Di Accumulo E Portafoglio Crypto In Coinbase',
      hasBreak: true
    },
    {
      text: 'Nella Pratica Come Si Fa Con Gli Acquisti Programmati E Piani Di Accumulo In Coinbase?',
      isHighlight: true,
      hasBreak: true
    },
    {
      text: 'Acquisto Cripto Con Conti Corrente, IBAN, Bonifici o Carte Prepagate: Come Si Fa?',
      hasBreak: true
    },
    {
      text: 'Funzionalità Della Scheda Prezzi In Coibase: Cosa Ci Puoi Fare?',
      isHighlight: true,
      hasBreak: true
    },
    {
      text: 'Come Si Trasferiscono Criptovalute Da Coinbase Ad Altri Wallet Esterni?',
      hasBreak: true
    },
    {
      text: 'Come Si Ricevono Cryptovalute da altri wallet esterni al tuo Wallet Coinbase?',
      isHighlight: true,
      hasBreak: true
    },
    {
      text: 'Cassaforte Coinbase: Cosa è E Cosa Ci Puoi Fare?'
    }
  ],
  conclusion:
    "Ci vediamo dall'altra parte, iscriviti per non commettere gli errori che il 90% fa sempre quando inizia con Coinbase.",
  callToAction: "Ci vediamo dall'altra parte nella prima lezione!"
}

const targetAudience = [
  'Chiunque Voglia Imparare A Utilizzare Coinbase Senza Stress',
  'Chiunque Voglia Imparare Il Metodo Più Facile Per Comprare BITCOIN',
  'Chiunque Voglia Imparare Il Metodo Più Facile Per Comprare Altre Cirptovalute'
]

const expandedSections = ref([1]) // First section expanded by default

const relatedCourses = [
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
  },
  {
    id: 2,
    title: 'Blockchain and Bitcoin Fundamentals',
    url: '/course/blockchain-and-bitcoin-fundamentals/',
    duration: '3 total hours',
    lastUpdated: '4/2025',
    badges: [
      {
        type: 'bestseller',
        text: 'Bestseller'
      }
    ],
    rating: 4.6,
    studentCount: 132623,
    currentPrice: 22.99,
    originalPrice: 129.99,
    image: 'https://img-c.udemycdn.com/course/50x50/1151036_64b6_6.jpg',
    imageSrcSet:
      'https://img-c.udemycdn.com/course/50x50/1151036_64b6_6.jpg 1x, https://img-c.udemycdn.com/course/100x100/1151036_64b6_6.jpg 2x'
  },
  {
    id: 3,
    title: 'Bitcoin Advanced Level: Transactions',
    url: '/course/bitcoin-advanced-level-transactions/',
    duration: '1.5 total hours',
    lastUpdated: '4/2025',
    badges: [
      {
        type: 'premium',
        text: 'Premium',
        icon: 'verified'
      }
    ],
    rating: 4.7,
    studentCount: 5885,
    currentPrice: 13.99,
    originalPrice: 64.99,
    image: 'https://img-c.udemycdn.com/course/50x50/1413060_e8d6.jpg',
    imageSrcSet:
      'https://img-c.udemycdn.com/course/50x50/1413060_e8d6.jpg 1x, https://img-c.udemycdn.com/course/100x100/1413060_e8d6.jpg 2x'
  }
]
</script>

<style scoped>
/* Any additional custom styles can be added here */
</style>
