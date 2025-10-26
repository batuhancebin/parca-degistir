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
    </div>
  </header>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const isScrolled = ref(false)

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


