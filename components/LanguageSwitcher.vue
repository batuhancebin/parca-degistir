
<template>
  <div class="flex items-center space-x-1">
    <!-- Türkçe Butonu -->
    <button
      @click="changeLanguage('tr')"
      class="px-3 py-1 text-sm font-bold uppercase transition-colors duration-200"
      :class="locale === 'tr' 
        ? 'bg-black text-[#FDAB17] rounded' 
        : 'text-white hover:text-[#FDAB17]'"
    >
      TR
    </button>

    <!-- İngilizce Butonu -->
    <button
      @click="changeLanguage('en')"
      class="px-3 py-1 text-sm font-bold uppercase transition-colors duration-200"
      :class="locale === 'en' 
        ? 'bg-black text-[#FDAB17] rounded' 
        : 'text-white hover:text-[#FDAB17]'"
    >
      ENG
    </button>
  </div>
</template>

<script setup lang="ts">
// VueUse composables ile i18n
const { locale, setLocale } = useI18n()

// Desteklenen diller - sadece Türkçe ve İngilizce
const supportedLocales = ['tr', 'en'] as const
type SupportedLocale = typeof supportedLocales[number]

// VueUse ile cookie yönetimi
const localeCookie = useCookie('i18n_locale', { 
  default: () => 'tr',
  maxAge: 60 * 60 * 24 * 365 // 1 yıl
})

// Dil değiştir - VueUse ile optimize edilmiş
const changeLanguage = async (newLocale: SupportedLocale) => {
  await setLocale(newLocale)
  localeCookie.value = newLocale
}

// Sayfa yüklendiğinde cookie'den dili yükle
onMounted(() => {
  if (localeCookie.value && localeCookie.value !== locale.value) {
    setLocale(localeCookie.value as SupportedLocale)
  }
})
</script>