<template>
  <header class="fixed inset-x-0 top-0 z-50 header is-top h-[130px] border-transparent bg-transparent transition-[height,background-color,backdrop-filter] duration-300 will-change-[height,background-color,backdrop-filter]">
    <div class="header-inner relative mx-auto flex h-full max-w-6xl items-center px-4">
      <NuxtLink to="/" class="header-logo">
        <img 
          :src="isDark ? '/parcadegistir-logo-dark.png' : '/parcadegistir-logo-light.png'" 
          alt="PARÇA DEĞİŞTİR" 
          class="logo-img h-[95px] select-none transition-[height] duration-300" 
        />
      </NuxtLink>
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
        
        <!-- Dark Mode Toggle -->
        <button 
          @click="toggleDark()"
          class="ml-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          :title="isDark ? 'Light Mode' : 'Dark Mode'"
        >
          <svg v-if="isDark" class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
          </svg>
          <svg v-else class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
        </button>
        
        <!-- Dil Değiştirici -->
        <div class="ml-4">
          <LanguageSwitcher />
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { useDark } from '@vueuse/core'

const isScrolled = ref(false)
const isDark = useDark()

const toggleDark = () => {
  isDark.value = !isDark.value
}

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

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>


