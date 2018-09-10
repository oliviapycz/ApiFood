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
        <h3>{{number}} <i class="far fa-star"></i> on <i class="fab fa-github"></i></h3>
        <div>
          <img class="github-avatar" v-for="avatar in arrayElement" :key="avatar" :src="[avatar]" alt="github avatar">
        </div>
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
import axios from 'axios'
export default {
  components: {
    AppLogo,
    LandingHelp,
    LandingWork
  },
  data () {
    return {
      number: '',
      arrayElement: []
    }
  },
  methods: {
    fetchStarsOnGithub () {
      axios.get('https://api.github.com/repos/oliviapycz/apifood/stargazers')
        .then((res) => {
          console.log('res', res)
          this.number = res.data.length
          res.data.forEach(el => {
            this.arrayElement.push(el.avatar_url)
          })
          console.log(this.arrayElement)
        })
    }
  },
  beforeMount () {
    this.fetchStarsOnGithub()
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

.github-avatar {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-left: 15px;
}

</style>

