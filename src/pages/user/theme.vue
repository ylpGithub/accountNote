<template>
  <mu-tabs :value="theme" @change="changeTheme">
    <mu-tab title="LIGHT (DEFAULT)" value="light" />
    <mu-tab title="DARK" value="dark" />
    <mu-tab title="CARBON" value="carbon" />
    <mu-tab title="TEAL" value="teal" />
  </mu-tabs>
</template>
<script>
  import light from 'muse-ui/dist/theme-default.css'
  import dark from 'muse-ui/dist/theme-dark.css'
  import carbon from 'muse-ui/dist/theme-carbon.css'
  import teal from 'muse-ui/dist/theme-teal.css'
  export default {
    data () {
      return {
        theme: 'light',
        themes: {
          light,
          dark,
          carbon,
          teal
        }
      }
    },
    methods: {
      changeTheme (theme) {
        this.theme = theme
        const styleEl = this.getThemeStyle()
        styleEl.innerHTML = this.themes[theme] || ''
      },
      getThemeStyle () {
        const themeId = 'muse-theme'
        let styleEl = document.getElementById(themeId)
        if (styleEl) return styleEl
        styleEl = document.createElement('style')
        styleEl.id = themeId
        document.body.appendChild(styleEl)
        return styleEl
      }
    }
  }
</script>
