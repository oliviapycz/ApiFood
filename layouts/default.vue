<template>
  <div>

    <header>
      <navbar/>
    </header>

    <nuxt/>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>Olivia Py-Cz - AπFood - {{ year }}</p>
      </div>
    </footer>

  </div>
</template>

<script>
  import Navbar from '../components/Navbar'

  export default {
    components: {
      Navbar
    },
    data () {
      return {
        year: new Date().getFullYear()
      }
    }
  }
</script>

<style lang="scss">
@import '@/scss/styles.scss';


html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
  overflow-y: scroll; 
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
header {
  margin-bottom: 3vh;
}
nuxt {
  min-height: 93vh !important;
}


h1 { @include font-size-map($h1-font-size); }
h2 { @include font-size-map($h2-font-size); }
h3 { @include font-size-map($h3-font-size); }
h4 { @include font-size-map($h4-font-size); }
p { @include font-size-map($p-font-size); }
</style>

