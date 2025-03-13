document.addEventListener('DOMContentLoaded', () => {
  let checkbox = document.getElementById('dark-mode-toggle')

  // store theme
  const storeTheme = function (theme) {
    localStorage.setItem('theme', theme)
  }

  // set theme when visitor returns
  const setTheme = function () {
    const activeTheme = localStorage.getItem('theme')
    if (activeTheme) {
      document.documentElement.setAttribute('data-theme', activeTheme)
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark')
        checkbox.checked = true
      } else {
        document.documentElement.setAttribute('data-theme', 'light')
        checkbox.checked = false
      }
    }

    // fallback for no :has() support
    document.documentElement.className = activeTheme
  }

  // switch theme if checkbox is engaged
  checkbox.addEventListener('change', (cb) => {
    document.documentElement.setAttribute(
      'data-theme',
      cb.target.checked ? 'dark' : 'light'
    )
    storeTheme(document.documentElement.getAttribute('data-theme'))
    // fallback for no :has() support
    document.documentElement.className =
      document.documentElement.getAttribute('data-theme')
  })

  document.onload = setTheme()
})
