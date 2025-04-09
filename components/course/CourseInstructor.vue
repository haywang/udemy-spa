<template>
  <div class="mb-8 rounded-lg bg-white p-6 shadow-sm">
    <span id="instructor" class="invisible relative -top-20 block"></span>
    <h2 class="mb-6 text-2xl font-bold">Instructor</h2>
    <div class="instructor-bio">
      <span id="instructor-1" class="invisible relative -top-20 block"></span>
      <!-- Instructor Header -->
      <div>
        <div class="mb-2">
          <a
            :href="instructor.profileUrl"
            class="text-xl font-bold hover:text-blue-600"
          >
            {{ instructor.name }}
          </a>
        </div>
        <div class="text-base text-gray-600">{{ instructor.title }}</div>
      </div>

      <!-- Instructor Image and Stats -->
      <div class="mt-4 flex gap-6">
        <a :href="instructor.profileUrl" class="flex-shrink-0">
          <img
            :src="instructor.image"
            :alt="instructor.name"
            class="h-16 w-16 rounded-full object-cover"
            width="64"
            height="64"
            loading="lazy"
          />
        </a>
        <ul class="space-y-2">
          <li v-for="(stat, index) in instructor.stats" :key="index">
            <div class="flex items-center text-sm text-gray-600">
              <svg aria-hidden="true" focusable="false" class="mr-2 h-4 w-4">
                <use :xlink:href="'#icon-' + stat.icon"></use>
              </svg>
              <div>{{ stat.text }}</div>
            </div>
          </li>
        </ul>
      </div>

      <!-- Instructor Description -->
      <div class="mt-6 text-sm text-gray-600">
        <div class="relative">
          <div
            :class="[
              'prose max-w-none overflow-hidden transition-all duration-300',
              { 'max-h-[14.6rem]': !isExpanded }
            ]"
          >
            <div v-html="instructor.description"></div>
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
            <use
              :xlink:href="isExpanded ? '#icon-collapse' : '#icon-expand'"
            ></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isExpanded = ref(false)

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}

defineProps({
  instructor: {
    type: Object,
    required: true,
    default: () => ({
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
    })
  }
})
</script>
