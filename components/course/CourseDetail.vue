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

        <!-- Instructor Section -->
        <CourseInstructor :instructor="instructor" />

        <!-- Reviews Section -->
        <CourseReviews :rating="4.7" :total-ratings="50" :reviews="reviews" />
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
import CourseInstructor from './CourseInstructor.vue'
import CourseReviews from './CourseReviews.vue'

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

const instructor = {
  name: 'ACI69 | Trading ™',
  title: '✔ Ingegnere Informatico Best Seller – Impara e Guadagna!',
  profileUrl: '/user/leonardo-ok/',
  image: 'https://img-c.udemycdn.com/user/200_H/44745822_3f5f_30.jpg',
  stats: [
    {
      icon: 'rating-star',
      text: '4.5 Instructor Rating'
    },
    {
      icon: 'certificate',
      text: '3,031 Reviews'
    },
    {
      icon: 'people',
      text: '14,480 Students'
    },
    {
      icon: 'play',
      text: '53 Courses'
    }
  ],
  description: `
    <p>★ Impara, Applica, Guadagna!</p>
    <p>Mi occupo di formazione online da 18 anni</p>
    <p>✔ <strong>senza fronzoli</strong></p>
    <p>✔ <strong>senza piedistalli del cavolo </strong></p>
    <p>✔ <strong>senza perdite di tempo</strong></p>
    <p>Ciao, sono <strong>Leo</strong>, meglio conosciuto online come <strong>ACI69 Cripto Trading - powered by VideoRipet1zioni™</strong></p>
    <p><br>✔ <strong>13.000 studenti</strong> già formati</p>
    <p>★★★★★ <strong>3.000 recensioni verificate</strong><br>▶ <strong>4.350.000 visualizzazioni</strong> </p>
    <p>▶ <strong>32.000 iscritti tra Udemy e YouTube</strong></p>
    <p><br></p>
    <p>Ho creato oltre <strong>500.000 ore di contenuti video</strong> (parliamo di <strong>57 anni di formazione condensati</strong>).</p>
    <p>✓ <strong>Perché dovresti fidarti di me?</strong><br>Perché <strong>i miei studenti ottengono risultati veri</strong>. Guadagnano, si migliorano e trasformano le competenze apprese nei miei corsi in opportunità concrete.</p>
    <p>✔ <strong>Se vuoi imparare davvero un mestiere</strong>, lascia stare le informazioni sparse su Google e affidati a chi ha già fatto gli errori per te.</p>
    <p>⚡ <strong>Iscriviti ora ai miei corsi</strong>: hai la <strong>garanzia soddisfatto o rimborsato</strong>.<br>✉ <strong>Supporto esclusivo</strong> su Telegram & Facebook solo per studenti.</p>
    <p>⏳ Non perdere tempo prezioso: <strong>clicca e inizia subito</strong><br>Ci vediamo dall'altra parte → ✔ACI69</p>
  `
}

const reviews = [
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
  },
  {
    name: 'Andrea R.',
    rating: 4.5,
    timeSince: '3 years ago',
    content:
      "ero gia a conoscenza dell'uso di coinbase ma una rinfrescata fa sempre bene",
    instructorResponse:
      'Grazie Andrea per questa ottima recensione! Una rinfrescata gratis su Coinbase fa sempre bene è proprio vero! ;-) Fa pure riferimento al gruppo ACI69 su facebook incluso nei miei corsi Crypto per domande e supporto! A presto, Leo | ACI69'
  },
  {
    name: 'Ivan G.',
    rating: 5.0,
    timeSince: '3 years ago',
    avatar: 'https://img-c.udemycdn.com/user/50x50/157746552_4e74.jpg',
    content:
      'Molto positiva, avendo anche COINBASE come exchange, mi ha fatto capire che effettivamente ncome fee non è molto conveniente, interessante anche il discorso della cassaforte, penso che il discorso di guadagnare a lungo termine con interessi aggiunti del corso su DEFI ( a cui fai riferimento ) mi intriga molto, grazie.',
    instructorResponse:
      'Grazie Ivan per questa tua ottima recensione! Sei un ottimo studente perch riesci a collegare tutti i miei corsi, sfruttando il megio da ognuno, bravissimo! Sono anche a tua disposizione qui e nella nostra banda ACI69, gruppo riservato ai miei studenti su Facebook incluso nei miei corsi! :-) Nel gruppo riservato ACI69 ci aiutiamo e confrontiamo tutti sul mondo Crypto! A presto, Leo | ACI69 Trading | Videoripetizioni'
  }
]
</script>

<style scoped>
/* Any additional custom styles can be added here */
</style>
