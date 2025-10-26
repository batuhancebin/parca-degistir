// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  devtools: { enabled: false },
  
  // Favicon ve meta bilgileri
  app: {
    head: {
      title: 'Parça Değiştir - Yedek Parça Bilgisi ve Danışmanlık',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Parça Değiştir ile otomotiv yedek parçaları hakkında detaylı bilgi alın. Uzman danışmanlık hizmeti ve güvenilir bilgi kaynağı. İveco ve diğer markalar için profesyonel destek.' 
        },
        { name: 'keywords', content: 'yedek parça, otomotiv, parça bilgisi, danışmanlık, iveco, araç parçaları, teknik bilgi' },
        { name: 'author', content: 'Parça Değiştir' },
        { property: 'og:title', content: 'Parça Değiştir - Yedek Parça Bilgisi ve Danışmanlık' },
        { property: 'og:description', content: 'Otomotiv yedek parçaları hakkında uzman danışmanlık ve detaylı bilgi hizmeti.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.parcadegistir.com' },
        { property: 'og:image', content: 'https://www.parcadegistir.com/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Parça Değiştir - Yedek Parça Bilgisi ve Danışmanlık' },
        { name: 'twitter:description', content: 'Otomotiv yedek parçaları hakkında uzman danışmanlık ve detaylı bilgi hizmeti.' },
        { name: 'twitter:image', content: 'https://www.parcadegistir.com/og-image.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon-light.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16-light.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32-light.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon-light.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192-light.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512-light.png' }
      ]
    }
  },

  // 1) Tailwind'i Vite plugin olarak ekle
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['@nuxt/ui']
    },
    server: {
      hmr: {
        overlay: false
      }
    }
  },


  // SSR ve build ayarları
  ssr: true,

  // Unhead sorununu çözmek için
  experimental: {
    payloadExtraction: false
  },

  // 2) Global CSS
  css: ['~/assets/css/main.css'],

  // 3) Tailwind CSS için build ayarları
  build: {
    transpile: ['@tailwindcss/vite']
  },

  // 4) Modüller
  modules: [
    '@nuxtjs/i18n',
    '@vueuse/nuxt'
  ],

  // i18n konfigürasyonu - VueUse dokümanına göre
  i18n: {
    langDir: '../locales',
    locales: [
      { code: 'tr', iso: 'tr-TR', file: 'tr.json', name: 'Türkçe' },
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' }
    ],
    defaultLocale: 'tr',
    strategy: 'no_prefix', // URL'de dil prefix'i yok
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      redirectOn: 'root',
      alwaysRedirect: false,
      fallbackLocale: 'tr'
    }
  },

  nitro: {
    experimental: {
      wasm: true
    },
    compatibilityDate: '2025-10-25'
  }
})
