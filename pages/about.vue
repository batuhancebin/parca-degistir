<template>
  <main class="min-h-screen bg-white text-gray-900">
    <!-- Hero Section -->
    <section class="relative h-[700px] sm:h-[700px] lg:h-[700px] bg-[#FDAB17]">
      <!-- Background Image -->
      <div class="absolute inset-0 bg-[url('/banner-arka-plan.jpg')] bg-cover bg-center bg-no-repeat"></div>
      <div class="absolute inset-0 bg-[#FDAB17]/50"></div>
      
      <div class="relative z-10 h-full flex items-center">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div class="max-w-2xl">
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">{{ $t('about_title') }}</h1>
            <p class="text-white text-base sm:text-lg leading-relaxed">
              {{ $t('about_subtitle') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Content -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <!-- Left Column - Text Content -->
          <div>
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">{{ $t('about_mission_title') }}</h2>
            <p class="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              {{ $t('about_mission_text') }}
            </p>
            <p class="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              {{ $t('about_mission_text2') }}
            </p>
          </div>
          
          <!-- Right Column - Image -->
          <div class="relative order-first lg:order-last">
            <img src="/hakkimizda-photo.jpg" alt="Parça Değiştir" class="rounded-lg shadow-lg w-full h-auto" />
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="py-12 sm:py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">{{ $t('core_values_title') }}</h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <!-- Wide Selection -->
          <div class="bg-white rounded-lg p-4 sm:p-6 shadow-sm text-center">
            <div class="w-12 h-12 sm:w-16 sm:h-16 bg-[#FDAB17]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg class="w-6 h-6 sm:w-8 sm:h-8 text-[#FDAB17]" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{{ $t('wide_selection') }}</h3>
            <p class="text-sm sm:text-base text-gray-600">{{ $t('wide_selection_desc') }}</p>
          </div>
          
          <!-- Trust -->
          <div class="bg-white rounded-lg p-4 sm:p-6 shadow-sm text-center">
            <div class="w-12 h-12 sm:w-16 sm:h-16 bg-[#FDAB17]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg class="w-6 h-6 sm:w-8 sm:h-8 text-[#FDAB17]" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{{ $t('trust') }}</h3>
            <p class="text-sm sm:text-base text-gray-600">{{ $t('trust_desc') }}</p>
          </div>
          
          <!-- Speed -->
          <div class="bg-white rounded-lg p-4 sm:p-6 shadow-sm text-center">
            <div class="w-12 h-12 sm:w-16 sm:h-16 bg-[#FDAB17]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg class="w-6 h-6 sm:w-8 sm:h-8 text-[#FDAB17]" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{{ $t('speed') }}</h3>
            <p class="text-sm sm:text-base text-gray-600">{{ $t('speed_desc') }}</p>
          </div>
          
          <!-- Customer Satisfaction -->
          <div class="bg-white rounded-lg p-4 sm:p-6 shadow-sm text-center">
            <div class="w-12 h-12 sm:w-16 sm:h-16 bg-[#FDAB17]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg class="w-6 h-6 sm:w-8 sm:h-8 text-[#FDAB17]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{{ $t('customer_satisfaction') }}</h3>
            <p class="text-sm sm:text-base text-gray-600">{{ $t('customer_satisfaction_desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Vision -->
    <section class="py-12 sm:py-16 bg-black">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">{{ $t('vision_title') }}</h2>
        <p class="text-lg sm:text-xl text-white mb-6 sm:mb-8 leading-relaxed">
          {{ $t('vision_text') }}
        </p>
        <p class="text-base sm:text-lg text-white">
          {{ $t('vision_quote') }}
        </p>
      </div>
    </section>

    <!-- Scroll to Top Button -->
    <button 
      @click="scrollToTop" 
      class="fixed bottom-6 right-6 bg-[#FDAB17] text-white p-3 rounded-full shadow-lg hover:bg-[#FDAB17]/90 transition-colors z-50"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
      </svg>
    </button>
  </main>
</template>

<script setup>
// Hakkımızda sayfası meta bilgileri
useHead({
  title: 'Parça Değiştir | Uzman Danışmanlık ve Güvenilir Bilgi',
  meta: [
    { 
      name: 'description', 
      content: 'Parça Değiştir hakkında bilgi alın. Otomotiv sektöründeki deneyimimiz, uzman ekibimiz ve müşteri memnuniyeti odaklı yaklaşımımız.' 
    },
    { name: 'keywords', content: 'parça değiştir hakkında, otomotiv uzmanları, yedek parça danışmanlığı, müşteri memnuniyeti, güvenilir bilgi kaynağı' },
    { property: 'og:title', content: 'Hakkımızda - Parça Değiştir' },
    { property: 'og:description', content: 'Otomotiv sektöründeki deneyimimiz ve uzman ekibimizle güvenilir yedek parça bilgisi hizmeti.' }
  ]
})

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>