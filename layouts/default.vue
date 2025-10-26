<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
    <SiteHeader />
    <slot />
    <SiteFooter />
  </div>
</template>

<script setup>
import { watchEffect, onMounted } from 'vue'
import { useColorMode } from '@vueuse/core'
import { useFavicon } from '~/composables/useFavicon'

const colorMode = useColorMode()
const { setFavicon } = useFavicon()

// Tema değişikliklerinde favicon'u güncelle
watchEffect(() => {
  const theme = colorMode.value === 'dark' ? 'dark' : 'light'
  setFavicon(theme)
})

// Sayfa yüklendiğinde mevcut tema için favicon'u ayarla
onMounted(() => {
  const theme = colorMode.value === 'dark' ? 'dark' : 'light'
  setFavicon(theme)
})
</script>



