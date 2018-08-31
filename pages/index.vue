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
        <div class="links flex--row">
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


.links {
  padding-top: 15px;
}
.flex--row {
  display: flex;
  justify-content: space-around;
  a {
    padding: 5px;
  }
}

</style>

