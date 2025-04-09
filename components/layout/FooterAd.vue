<template>
  <div class="bg-gray-800 py-8">
    <div class="container mx-auto px-4">
      <!-- 广告文本 -->
      <div class="mb-8 text-center">
        <h2 class="text-2xl font-bold text-white">
          Top companies choose
          <a
            href="/udemy-business"
            class="text-white underline hover:text-gray-300"
            target="_blank"
            rel="noopener"
          >
            Udemy Business
          </a>
          to build in-demand career skills.
        </h2>
      </div>

      <!-- 合作伙伴logo -->
      <div class="flex flex-wrap items-center justify-center gap-8">
        <img
          v-for="(partner, index) in partners"
          :key="index"
          :src="partner.logo"
          :alt="partner.name"
          class="h-11 w-auto"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const partners = [
  {
    name: 'Nasdaq',
    logo: 'https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg'
  },
  {
    name: 'Volkswagen',
    logo: 'https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg'
  },
  {
    name: 'NetApp',
    logo: 'https://s.udemycdn.com/partner-logos/v4/netapp-light.svg'
  },
  {
    name: 'Eventbrite',
    logo: 'https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg'
  }
]
</script>
