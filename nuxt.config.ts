// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  devtools: { enabled: true },

  // 启用组件自动导入
  components: {
    dirs: ['~/components', '~/components/layout', '~/components/course']
  },

  // CSS配置
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  },

  // 应用配置
  app: {
    head: {
      title: 'Udemy Course',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})
