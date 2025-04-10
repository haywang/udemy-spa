// https://nuxt.com/docs/api/configuration/nuxt-config
// import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  devtools: { enabled: true },

  // 启用组件自动导入
  components: {
    global: true,
    dirs: [
      {
        path: '~/components',
        pathPrefix: false
      },
      {
        path: '~/components/layout',
        pathPrefix: false
      },
      {
        path: '~/components/market',
        pathPrefix: false
      }
    ]
  },

  // CSS配置
  // css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils'
  ],
  // vite: {
  //   plugins: [tailwindcss()]
  // },

  // 预渲染配置
  nitro: {
    prerender: {
      failOnError: false,
      crawlLinks: false
    }
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
  },

  compatibilityDate: '2025-04-09'
})
