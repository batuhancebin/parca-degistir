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
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">{{ $t('contact_title') }}</h1>
            <p class="text-white text-base sm:text-lg leading-relaxed">
              {{ $t('contact_subtitle') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-12 sm:py-16 bg-gray-900">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <!-- Left Column - Contact Information -->
          <div class="space-y-6 sm:space-y-8">
            <div>
              <h2 class="text-3xl sm:text-4xl font-bold text-[#FDAB17] mb-6 sm:mb-8">{{ $t('contact_info_title') }}</h2>
            </div>
            
            <!-- Contact Details -->
            <div class="space-y-4 sm:space-y-6">
              <div class="flex items-center gap-3 sm:gap-4">
                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-[#FDAB17] rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-white text-base sm:text-lg font-semibold">{{ $t('address') }}</h3>
                  <p class="text-gray-300 text-sm sm:text-base">{{ $t('address_text') }}</p>
                </div>
              </div>
              
              <div class="flex items-center gap-3 sm:gap-4">
                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-[#FDAB17] rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-white text-base sm:text-lg font-semibold">{{ $t('website') }}</h3>
                  <p class="text-gray-300 text-sm sm:text-base">{{ $t('website_text') }}</p>
                </div>
              </div>
              
              <div class="flex items-center gap-3 sm:gap-4">
                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-[#FDAB17] rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-white text-base sm:text-lg font-semibold">{{ $t('phone') }}</h3>
                  <p class="text-gray-300 text-sm sm:text-base">{{ $t('phone_text') }}</p>
                </div>
              </div>
              
              <div class="flex items-center gap-3 sm:gap-4">
                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-[#FDAB17] rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-white text-base sm:text-lg font-semibold">{{ $t('contact_form') }}</h3>
                  <p class="text-gray-300 text-sm sm:text-base">{{ $t('contact_form_desc') }}</p>
                </div>
              </div>
              
              <div class="flex items-center gap-3 sm:gap-4">
                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-[#FDAB17] rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-white text-base sm:text-lg font-semibold">{{ $t('social_media') }}</h3>
                  <p class="text-gray-300 text-sm sm:text-base">{{ $t('social_media_desc') }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Right Column - Contact Form -->
          <div class="bg-gray-800 rounded-xl p-6 sm:p-8 shadow-2xl">
            <h3 class="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">{{ $t('contact_form_title') }}</h3>
            <form @submit.prevent="submitForm" class="space-y-4 sm:space-y-6">
              <!-- Success Message -->
              <div v-if="isSubmitted" class="bg-green-500/20 border border-green-500 text-green-300 px-4 py-3 rounded-lg">
                <div class="flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                </div>
              </div>

              <!-- Error Message -->
              <div v-if="submitError" class="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-lg">
                <div class="flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                  </svg>
                  {{ submitError }}
                </div>
              </div>

              <!-- Name Field -->
              <div>
                <label for="name" class="block text-white text-sm font-medium mb-2">{{ $t('name') }}</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name"
                  class="w-full px-4 py-3 bg-gray-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FDAB17] focus:border-transparent"
                  :class="errors.name ? 'border-red-500' : 'border-gray-600'"
                  :placeholder="$t('name_placeholder')"
                  required
                />
                <p v-if="errors.name" class="mt-1 text-sm text-red-400">{{ errors.name }}</p>
              </div>
              
              <!-- Email Field -->
              <div>
                <label for="email" class="block text-white text-sm font-medium mb-2">{{ $t('email') }}</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email"
                  class="w-full px-4 py-3 bg-gray-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FDAB17] focus:border-transparent"
                  :class="errors.email ? 'border-red-500' : 'border-gray-600'"
                  :placeholder="$t('email_placeholder')"
                  required
                />
                <p v-if="errors.email" class="mt-1 text-sm text-red-400">{{ errors.email }}</p>
              </div>
              
              <!-- Subject Field -->
              <div>
                <label for="subject" class="block text-white text-sm font-medium mb-2">{{ $t('subject') }}</label>
                <select 
                  id="subject" 
                  v-model="form.subject"
                  class="w-full px-4 py-3 bg-gray-700 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#FDAB17] focus:border-transparent"
                  :class="errors.subject ? 'border-red-500' : 'border-gray-600'"
                  required
                >
                  <option value="" disabled>{{ $t('select_subject') }}</option>
                  <option value="general">{{ $t('general_inquiry') }}</option>
                  <option value="price">{{ $t('price_inquiry') }}</option>
                  <option value="availability">{{ $t('availability_inquiry') }}</option>
                  <option value="order">{{ $t('order_inquiry') }}</option>
                  <option value="other">{{ $t('other') }}</option>
                </select>
                <p v-if="errors.subject" class="mt-1 text-sm text-red-400">{{ errors.subject }}</p>
              </div>
              
              <!-- Message Field -->
              <div>
                <label for="message" class="block text-white text-sm font-medium mb-2">{{ $t('message') }}</label>
                <textarea 
                  id="message" 
                  v-model="form.message"
                  rows="4"
                  class="w-full px-4 py-3 bg-gray-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FDAB17] focus:border-transparent resize-none"
                  :class="errors.message ? 'border-red-500' : 'border-gray-600'"
                  :placeholder="$t('message_placeholder')"
                  required
                ></textarea>
                <p v-if="errors.message" class="mt-1 text-sm text-red-400">{{ errors.message }}</p>
              </div>
              
              <!-- Privacy Policy Checkbox -->
              <div class="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="privacy" 
                  v-model="form.privacyAccepted"
                  class="mt-1 w-4 h-4 text-[#FDAB17] bg-gray-700 border-gray-600 rounded focus:ring-[#FDAB17]"
                  :class="errors.privacyAccepted ? 'border-red-500' : ''"
                  required
                />
                <label for="privacy" class="text-sm text-gray-300">
                  {{ $t('privacy_accept') }}
                </label>
              </div>
              <p v-if="errors.privacyAccepted" class="text-sm text-red-400">{{ errors.privacyAccepted }}</p>
              
              <!-- Submit Button -->
              <button 
                type="button" 
                disabled
                class="w-full bg-gray-500 text-white py-3 px-6 rounded-lg font-medium cursor-not-allowed opacity-50"
              >
                {{ $t('send') }} (Geçici olarak devre dışı)
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Contact Info -->
    <section class="py-8 sm:py-12 bg-black">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <!-- Address -->
          <div class="text-center">
            <div class="w-12 h-12 sm:w-16 sm:h-16 bg-[#FDAB17] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg class="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-white font-semibold mb-2 text-sm sm:text-base">{{ $t('visit_us') }}</h3>
            <p class="text-gray-300 text-xs sm:text-sm">{{ $t('address_text') }}</p>
          </div>
          
          <!-- Phone -->
          <div class="text-center">
            <div class="w-12 h-12 sm:w-16 sm:h-16 bg-[#FDAB17] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg class="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
            </div>
            <h3 class="text-white font-semibold mb-2 text-sm sm:text-base">{{ $t('call_us') }}</h3>
            <p class="text-gray-300 text-xs sm:text-sm">{{ $t('phone_text') }}</p>
          </div>
          
          <!-- Website -->
          <div class="text-center">
            <div class="w-12 h-12 sm:w-16 sm:h-16 bg-[#FDAB17] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg class="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
            </div>
            <h3 class="text-white font-semibold mb-2 text-sm sm:text-base">{{ $t('website') }}</h3>
            <p class="text-gray-300 text-xs sm:text-sm">{{ $t('website_text') }}</p>
          </div>
          
          <!-- Social Media -->
          <div class="text-center">
            <div class="w-12 h-12 sm:w-16 sm:h-16 bg-[#FDAB17] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg class="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-white font-semibold mb-2 text-sm sm:text-base">{{ $t('follow_us') }}</h3>
            <p class="text-gray-300 mb-2 text-xs sm:text-sm">{{ $t('social_media_desc') }}</p>
            <a href="https://www.instagram.com/parcadegistir/" target="_blank" class="text-[#FDAB17] hover:underline text-xs sm:text-sm">{{ $t('follow_now') }}</a>
          </div>
        </div>
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
import { ref, reactive } from 'vue'

// İletişim sayfası meta bilgileri
useHead({
  title: 'Parça Değiştir | Yedek Parça Bilgisi ve Danışmanlık',
  meta: [
    { 
      name: 'description', 
      content: 'Parça Değiştir ile iletişime geçin. Yedek parça bilgisi ve uzman danışmanlık için bizimle iletişim kurun. Telefon: 0532 372 79 78, E-posta ve iletişim formu.' 
    },
    { name: 'keywords', content: 'parça değiştir iletişim, yedek parça danışmanlığı, otomotiv bilgi hattı, parça bilgisi telefon, teknik destek' },
    { property: 'og:title', content: 'İletişim - Parça Değiştir' },
    { property: 'og:description', content: 'Yedek parça bilgisi ve uzman danışmanlık için bizimle iletişime geçin.' }
  ]
})

// Form state
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
  privacyAccepted: false
})

// Form validation state
const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
  privacyAccepted: ''
})

// Form submission state
const isSubmitting = ref(false)
const isSubmitted = ref(false)
const submitError = ref('')

// Validation functions
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validateForm = () => {
  // Reset errors
  Object.keys(errors).forEach(key => {
    errors[key] = ''
  })

  let isValid = true

  // Name validation
  if (!form.name.trim()) {
    errors.name = 'Adınız gereklidir'
    isValid = false
  } else if (form.name.trim().length < 2) {
    errors.name = 'Adınız en az 2 karakter olmalıdır'
    isValid = false
  }

  // Email validation
  if (!form.email.trim()) {
    errors.email = 'E-posta adresi gereklidir'
    isValid = false
  } else if (!validateEmail(form.email)) {
    errors.email = 'Geçerli bir e-posta adresi giriniz'
    isValid = false
  }

  // Subject validation
  if (!form.subject) {
    errors.subject = 'Konu seçimi gereklidir'
    isValid = false
  }

  // Message validation
  if (!form.message.trim()) {
    errors.message = 'Mesaj gereklidir'
    isValid = false
  } else if (form.message.trim().length < 10) {
    errors.message = 'Mesaj en az 10 karakter olmalıdır'
    isValid = false
  }

  // Privacy validation
  if (!form.privacyAccepted) {
    errors.privacyAccepted = 'Gizlilik politikasını kabul etmelisiniz'
    isValid = false
  }

  return isValid
}

// Form submission
const submitForm = async (event) => {
  event.preventDefault()
  
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true
  submitError.value = ''

  try {
    // Form data preparation
    const formData = {
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject,
      message: form.message.trim(),
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    }

    // Send email using EmailJS or your preferred service
    // For now, we'll simulate a successful submission
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call

    // Success
    isSubmitted.value = true
    
    // Reset form
    Object.keys(form).forEach(key => {
      if (key === 'privacyAccepted') {
        form[key] = false
      } else {
        form[key] = ''
      }
    })

    // Show success message
    console.log('Form submitted successfully:', formData)
    
  } catch (error) {
    console.error('Form submission error:', error)
    submitError.value = 'Form gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz.'
  } finally {
    isSubmitting.value = false
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Reset success message after 5 seconds
watch(isSubmitted, (newValue) => {
  if (newValue) {
    setTimeout(() => {
      isSubmitted.value = false
    }, 5000)
  }
})
</script>