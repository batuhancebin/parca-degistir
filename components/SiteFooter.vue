<template>
  <footer class="bg-black text-white">
    <!-- Top yellow line -->
    <div class="h-1 bg-[#FDAB17]"></div>
    
    <div class="max-w-6xl mx-auto px-6 py-8">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <!-- Left side - Logo -->
        <div>
          <NuxtLink to="/" class="header-logo">
            <img 
              src="/parcadegistir-logo-dark.png" 
              alt="PARÇA DEĞİŞTİR" 
              class="logo-img h-[50px] select-none transition-[height] duration-300" 
            />
          </NuxtLink>
        </div>
        
        <!-- Right side - Copyright and Links -->
        <div class="text-gray-300 text-sm text-center md:text-right">
          <div class="mb-2">
            PARÇA DEĞİŞTİR © Copyright 2024 Parça Değiştir. Tüm hakları saklıdır.
          </div>
          <div class="flex flex-wrap justify-center md:justify-end gap-4 text-xs">
            <NuxtLink to="#" class="hover:text-white transition-colors">Yasal Uyarı</NuxtLink>
            <NuxtLink to="#" class="hover:text-white transition-colors">Gizlilik Politikası</NuxtLink>
            <NuxtLink to="#" class="hover:text-white transition-colors">Genel Şartlar</NuxtLink>
            <NuxtLink to="#" class="hover:text-white transition-colors">Çerez Politikası</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
