<template>
  <div>

    <section class="landingpage">
      <div>
        <app-logo/>
        <h1 class="title">
          Api Food Interface
        </h1>
        <h2 class="subtitle">
          An Open Source Project
        </h2>
        <div class="links flex">
          <a
            href="#landingpage1"
            class="button--green">How it works?</a>
          <a
            href="#landingpage2"
            class="button--maroon">How to help?</a>
        </div>
      </div>
    </section>

    <landing-work/>
    <landing-help/>
    
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import LandingHelp from '../components/LandingHelp'
import LandingWork from '../components/LandingWork'

export default {
  components: {
    AppLogo,
    LandingHelp,
    LandingWork
  }
}
</script>

<style lang="scss">

.landingpage {
  min-height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.flex {
  display: flex;
  justify-content: space-around;

  a {
    padding: 5px;
  }
}
</style>

