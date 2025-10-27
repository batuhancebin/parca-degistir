<template>
  <main class="min-h-screen bg-white text-gray-900">
    <!-- Hero Section -->
    <section class="relative isolate overflow-hidden h-[700px] sm:h-[700px] lg:h-[700px]">
      <div class="absolute inset-0 -z-10 bg-[url('/banner-arka-plan.jpg')] bg-cover bg-center bg-no-repeat"></div>
      <div class="absolute inset-0 -z-10 bg-gradient-to-b from-[#FDAB17]/50 to-[#FDAB17]/40"></div>
      <div class="mx-auto max-w-6xl px-4 sm:px-6 pt-[100px] sm:pt-[100px] lg:pt-[100px] pb-16 sm:pb-16 lg:pb-16 text-white h-full flex items-center">
        <div class="max-w-3xl">
          <div class="space-y-1 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            <h1>
              Parça Değiştir
            </h1>
          </div>

          <p class="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg font-semibold text-white">
            {{ $t('hero_description') }}
          </p>
          <p class="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-lg font-semibold text-white">
            {{ $t('hero_subtitle') }}
          </p>
          
          <!-- CTA Buttons -->
          <div class="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <NuxtLink to="/contact" class="border border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-medium hover:bg-white hover:text-[#FDAB17] transition-colors text-center">
              {{ $t('contact_us') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Features -->
    <section class="relative -mt-16 sm:-mt-16 lg:-mt-16 z-10">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <!-- Expert Consultation -->
          <article class="rounded-xl border border-gray-200 bg-white p-4 sm:p-6 shadow-sm">
            <div class="flex items-center gap-3 mb-3 sm:mb-4">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-[#FDAB17] rounded flex items-center justify-center">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-base sm:text-lg font-semibold text-gray-900">{{ $t('expert_consultation') }}</h3>
            </div>
            <p class="text-sm sm:text-base text-gray-600">{{ $t('expert_consultation_desc') }}</p>
          </article>

          <!-- Quality Products -->
          <article class="rounded-xl border border-gray-200 bg-white p-4 sm:p-6 shadow-sm">
            <div class="flex items-center gap-3 mb-3 sm:mb-4">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-[#FDAB17] rounded flex items-center justify-center">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-base sm:text-lg font-semibold text-gray-900">{{ $t('quality_products') }}</h3>
            </div>
            <p class="text-sm sm:text-base text-gray-600">{{ $t('quality_products_desc') }}</p>
          </article>

          <!-- Reliable Service -->
          <article class="rounded-xl border border-gray-200 bg-white p-4 sm:p-6 shadow-sm">
            <div class="flex items-center gap-3 mb-3 sm:mb-4">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-[#FDAB17] rounded flex items-center justify-center">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-base sm:text-lg font-semibold text-gray-900">{{ $t('reliable_service') }}</h3>
            </div>
            <p class="text-sm sm:text-base text-gray-600">{{ $t('reliable_service_desc') }}</p>
          </article>

          <!-- Competitive Prices -->
          <article class="rounded-xl border border-gray-200 bg-white p-4 sm:p-6 shadow-sm">
            <div class="flex items-center gap-3 mb-3 sm:mb-4">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-[#FDAB17] rounded flex items-center justify-center">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-base sm:text-lg font-semibold text-gray-900">{{ $t('competitive_prices') }}</h3>
            </div>
            <p class="text-sm sm:text-base text-gray-600">{{ $t('competitive_prices_desc') }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-12 sm:py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <!-- Left Column - Text Content -->
          <div>
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">{{ $t('content_title') }}</h2>
            <div class="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              <p>{{ $t('content_paragraph1') }}</p>
              <p>{{ $t('content_paragraph2') }}</p>
              <p>{{ $t('content_paragraph3') }}</p>
            </div>
          </div>

          <!-- Right Column - Image -->
          <div class="relative order-first lg:order-last">
            <img src="/anasayfa-photo.jpg" alt="Parça Değiştir" class="rounded-lg shadow-lg w-full h-auto" />
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-12 sm:py-16 bg-black">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">{{ $t('cta_title') }}</h2>
        <p class="text-lg sm:text-xl text-white mb-6 sm:mb-8">{{ $t('cta_description') }}</p>
        <div class="flex justify-center">
          <NuxtLink to="/contact" class="bg-[#FDAB17] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-medium hover:bg-[#FDAB17]/90 transition-colors">
            {{ $t('contact_us') }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
// Anasayfa meta bilgileri
useHead({
  title: 'Parça Değiştir - Yedek Parça Bilgisi ve Danışmanlık Hizmeti',
  meta: [
    { 
      name: 'description', 
      content: 'Parça Değiştir ile otomotiv yedek parçaları hakkında detaylı bilgi alın. Uzman danışmanlık hizmeti, güvenilir bilgi kaynağı ve profesyonel destek.' 
    },
    { name: 'keywords', content: 'yedek parça bilgisi, otomotiv danışmanlık, parça değiştir, iveco parçaları, araç parçaları, teknik bilgi, uzman danışmanlık' },
    { property: 'og:title', content: 'Parça Değiştir - Yedek Parça Bilgisi ve Danışmanlık' },
    { property: 'og:description', content: 'Otomotiv yedek parçaları hakkında uzman danışmanlık ve detaylı bilgi hizmeti. Güvenilir kaynak, profesyonel destek.' }
  ]
})
</script>


