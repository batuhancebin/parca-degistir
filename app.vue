<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// Global dil tercihini cookie'den yükle
const { setLocale } = useI18n()
const localeCookie = useCookie('i18n_locale', { 
  default: () => 'tr',
  maxAge: 60 * 60 * 24 * 365 // 1 yıl
})

// Sayfa yüklendiğinde cookie'den dili yükle
onMounted(() => {
  if (localeCookie.value) {
    setLocale(localeCookie.value)
  }
})
</script>
