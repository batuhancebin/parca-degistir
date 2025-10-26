<template>
  <div class="min-h-screen bg-white text-gray-900 transition-colors">
    <SiteHeader />
    <slot />
    <SiteFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useFavicon } from '~/composables/useFavicon'

const { setFavicon } = useFavicon()

// Sayfa yüklendiğinde light tema için favicon'u ayarla
onMounted(() => {
  setFavicon('light')
})
</script>



