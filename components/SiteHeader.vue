<template>
  <header class="fixed inset-x-0 top-0 z-50 header is-top h-[130px] border-transparent bg-transparent transition-[height,background-color,backdrop-filter] duration-300 will-change-[height,background-color,backdrop-filter]">
    <div class="header-inner relative mx-auto flex h-full max-w-6xl items-center px-4">
      <NuxtLink to="/" class="header-logo">
        <img 
          src="/parcadegistir-logo-light.png" 
          alt="PARÇA DEĞİŞTİR" 
          class="logo-img h-[95px] select-none transition-[height] duration-300" 
        />
      </NuxtLink>
      
      <!-- Desktop Navigation -->
      <nav class="ml-auto hidden gap-6 uppercase font-bold text-[1rem] leading-[1.4] sm:flex [&_a]:no-underline items-center">
        <NuxtLink 
          to="/" 
          :class="[
            $route.path === '/' 
              ? 'bg-black text-[#FDAB17] px-3 py-1 rounded' 
              : 'text-white'
            , 'transition-colors'
          ]"
        >
          {{ $t('home') }}
        </NuxtLink>
        <NuxtLink 
          to="/about" 
          :class="[
            $route.path === '/about' 
              ? 'bg-black text-[#FDAB17] px-3 py-1 rounded' 
              : 'text-white'
            , 'transition-colors'
          ]"
        >
          {{ $t('about') }}
        </NuxtLink>
        <NuxtLink 
          to="/contact" 
          :class="[
            $route.path === '/contact' 
              ? 'bg-black text-[#FDAB17] px-3 py-1 rounded' 
              : 'text-white'
            , 'transition-colors'
          ]"
        >
          {{ $t('contact') }}
        </NuxtLink>
        
        <!-- Dil Değiştirici -->
        <div class="ml-4">
          <LanguageSwitcher />
        </div>
      </nav>

      <!-- Mobile Hamburger Button -->
      <button 
        @click="toggleMobileMenu"
        class="sm:hidden ml-auto flex flex-col justify-center items-center w-8 h-8 space-y-1"
        aria-label="Menüyü aç/kapat"
      >
        <span 
          class="block w-6 h-0.5 bg-white transition-all duration-300"
          :class="{ 'rotate-45 translate-y-1.5': isMobileMenuOpen }"
        ></span>
        <span 
          class="block w-6 h-0.5 bg-white transition-all duration-300"
          :class="{ 'opacity-0': isMobileMenuOpen }"
        ></span>
        <span 
          class="block w-6 h-0.5 bg-white transition-all duration-300"
          :class="{ '-rotate-45 -translate-y-1.5': isMobileMenuOpen }"
        ></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div 
      v-if="isMobileMenuOpen"
      class="fixed inset-0 z-40 sm:hidden"
    >
      <!-- Full Background Blur -->
      <div class="absolute inset-0 bg-black/50 backdrop-blur-xl"></div>
      
      <!-- Menu Panel -->
      <div class="absolute inset-0 bg-white">
        <div class="flex flex-col h-full">
          <!-- Header with Logo and Close Button -->
          <div class="flex items-center justify-between p-6 border-b border-gray-300 bg-white">
            <img 
              src="/parcadegistir-logo-light.png" 
              alt="PARÇA DEĞİŞTİR" 
              class="h-10"
            />
            <button 
              @click="closeMobileMenu"
              class="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Menüyü kapat"
            >
              <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Navigation Links -->
          <div class="flex-1 px-6 py-8 bg-white">
            <div class="space-y-6">
              <NuxtLink 
                to="/" 
                @click="closeMobileMenu"
                :class="[
                  $route.path === '/' 
                    ? 'text-[#FDAB17] font-bold text-xl' 
                    : 'text-gray-900 hover:text-[#FDAB17] font-semibold'
                  , 'block text-lg transition-colors'
                ]"
              >
                {{ $t('home') }}
              </NuxtLink>
              <NuxtLink 
                to="/about" 
                @click="closeMobileMenu"
                :class="[
                  $route.path === '/about' 
                    ? 'text-[#FDAB17] font-bold text-xl' 
                    : 'text-gray-900 hover:text-[#FDAB17] font-semibold'
                  , 'block text-lg transition-colors'
                ]"
              >
                {{ $t('about') }}
              </NuxtLink>
              <NuxtLink 
                to="/contact" 
                @click="closeMobileMenu"
                :class="[
                  $route.path === '/contact' 
                    ? 'text-[#FDAB17] font-bold text-xl' 
                    : 'text-gray-900 hover:text-[#FDAB17] font-semibold'
                  , 'block text-lg transition-colors'
                ]"
              >
                {{ $t('contact') }}
              </NuxtLink>
            </div>
          </div>

          <!-- Footer with Language Switcher -->
          <div class="p-6 border-t border-gray-300 bg-white">
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
              </svg>
              <span class="text-sm text-gray-700 font-semibold">{{ $t('language') }}</span>
            </div>
            <div class="mt-3">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const onScroll = () => {
  const el = document.querySelector('.header')
  if (!el) return
  if (window.scrollY > 40) {
    isScrolled.value = true
    el.classList.remove('is-top', 'h-[130px]', 'bg-transparent')
    el.classList.add('is-scrolled', 'h-[75px]', 'backdrop-blur', 'bg-white/0', 'border-b', 'border-white/20')
    const logoImg = document.querySelector('.logo-img')
    if (logoImg) {
      logoImg.classList.remove('h-[95px]')
      logoImg.classList.add('h-[70px]')
    }
  } else {
    isScrolled.value = false
    el.classList.remove('is-scrolled', 'h-[75px]', 'backdrop-blur', 'bg-white/0', 'border-b', 'border-white/20')
    el.classList.add('is-top', 'h-[130px]', 'bg-transparent')
    const logoImg = document.querySelector('.logo-img')
    if (logoImg) {
      logoImg.classList.remove('h-[70px]')
      logoImg.classList.add('h-[95px]')
    }
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // Body scroll'u engelle
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

// ESC tuşu ile menüyü kapat
const handleKeydown = (event) => {
  if (event.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', handleKeydown)
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', handleKeydown)
  // Component unmount olduğunda body scroll'u geri yükle
  document.body.style.overflow = ''
})
</script>


