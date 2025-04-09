<template>
  <div class="relative">
    <button
      type="button"
      class="flex items-center space-x-2 rounded-md border border-white px-4 py-2 transition-colors hover:bg-white/10"
      @click="toggleLanguageSelector"
    >
      <svg
        class="h-5 w-5"
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
      <span>English</span>
    </button>

    <!-- 语言选择弹窗 -->
    <div
      v-if="isOpen"
      class="absolute bottom-full left-0 mb-2 w-48 rounded-md bg-white shadow-lg"
      ref="dropdown"
    >
      <div class="py-1">
        <a
          v-for="language in languages"
          :key="language.code"
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          @click.prevent="selectLanguage(language)"
        >
          {{ language.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const isOpen = ref(false)
const dropdown = ref(null)

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'it', name: 'Italiano' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' }
]

const toggleLanguageSelector = () => {
  isOpen.value = !isOpen.value
}

const selectLanguage = (language) => {
  console.log('Selected language:', language)
  isOpen.value = false
}

// 点击外部关闭
onClickOutside(dropdown, () => {
  isOpen.value = false
})
</script>
