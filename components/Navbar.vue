<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">AπFood</a>
        <button class="button navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-end" @click="showNav = !showNav">
          <nuxt-link v-if="!$store.state.authUser" class="navbar-item" to="/login">Sign In</nuxt-link>
          <nuxt-link v-if="!$store.state.authUser" class="navbar-item" to="/register">Sign Up</nuxt-link>
          <nuxt-link v-if="$store.state.authUser" class="navbar-item" to="/dashboard">Dashboard</nuxt-link>
          <a v-if="$store.state.authUser" class="navbar-item"   @click="onLogout">Logout</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showNav: false
    }
  },
  methods: {
    onLogout () {
      console.log('onLogout')
      this.$store.dispatch('logout')
        .then(() => {
          this.$store.state.authUser = null
        })
        .then(() => {
          this.$router.push({'path': '/'})
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
