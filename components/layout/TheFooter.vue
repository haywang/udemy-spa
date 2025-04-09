<template>
  <footer class="bg-gray-900 pt-8 text-white">
    <!-- 顶部广告部分 -->
    <FooterAd />

    <!-- 主要内容部分 -->
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
        <!-- 语言选择器和链接列表 -->
        <div class="space-y-8">
          <FooterLanguage />
          <FooterLinks :links="businessLinks" />
        </div>

        <!-- 其他链接列表 -->
        <div>
          <FooterLinks :links="careerLinks" />
        </div>

        <div>
          <FooterLinks :links="legalLinks" />
        </div>

        <!-- Logo和版权信息 -->
        <div class="md:col-span-1">
          <FooterLogo />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import FooterAd from './FooterAd.vue'
import FooterLanguage from './FooterLanguage.vue'
import FooterLinks from './FooterLinks.vue'
import FooterLogo from './FooterLogo.vue'

const businessLinks = [
  { text: 'Udemy Business', url: '/udemy-business' },
  { text: 'Teach on Udemy', url: '/teaching' },
  { text: 'Get the app', url: '/mobile' },
  { text: 'About us', url: 'https://about.udemy.com' },
  { text: 'Contact us', url: 'https://about.udemy.com/company#offices' }
]

const careerLinks = [
  { text: 'Careers', url: 'https://about.udemy.com/careers' },
  { text: 'Blog', url: 'https://blog.udemy.com' },
  { text: 'Help and Support', url: '/support' },
  { text: 'Affiliate', url: '/affiliate' },
  { text: 'Investors', url: 'https://investors.udemy.com' }
]

const legalLinks = [
  { text: 'Terms', url: '/terms' },
  { text: 'Privacy policy', url: '/terms/privacy' },
  { text: 'Sitemap', url: '/sitemap' },
  {
    text: 'Accessibility statement',
    url: 'https://about.udemy.com/accessibility-statement'
  }
]
</script>
