export const useFavicon = () => {
  const setFavicon = (theme: 'light' | 'dark') => {
    if (process.client) {
      // Mevcut favicon linklerini kaldır
      const existingLinks = document.querySelectorAll('link[rel*="icon"]')
      existingLinks.forEach(link => link.remove())

      // Yeni favicon linklerini ekle
      const head = document.head

      // Ana favicon
      const favicon = document.createElement('link')
      favicon.rel = 'icon'
      favicon.type = 'image/x-icon'
      favicon.href = `/favicon-${theme}.ico`
      head.appendChild(favicon)

      // PNG faviconlar
      const favicon16 = document.createElement('link')
      favicon16.rel = 'icon'
      favicon16.type = 'image/png'
      favicon16.sizes = '16x16'
      favicon16.href = `/favicon-16x16-${theme}.png`
      head.appendChild(favicon16)

      const favicon32 = document.createElement('link')
      favicon32.rel = 'icon'
      favicon32.type = 'image/png'
      favicon32.sizes = '32x32'
      favicon32.href = `/favicon-32x32-${theme}.png`
      head.appendChild(favicon32)

      // Apple touch icon
      const appleIcon = document.createElement('link')
      appleIcon.rel = 'apple-touch-icon'
      appleIcon.href = `/apple-touch-icon-${theme}.png`
      head.appendChild(appleIcon)

      // Android chrome icons
      const android192 = document.createElement('link')
      android192.rel = 'icon'
      android192.type = 'image/png'
      android192.sizes = '192x192'
      android192.href = `/android-chrome-192x192-${theme}.png`
      head.appendChild(android192)

      const android512 = document.createElement('link')
      android512.rel = 'icon'
      android512.type = 'image/png'
      android512.sizes = '512x512'
      android512.href = `/android-chrome-512x512-${theme}.png`
      head.appendChild(android512)
    }
  }

  return {
    setFavicon
  }
}
