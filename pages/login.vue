<template>
  <section class="container" style="min-height:70vh">
    <h2 class="title">
        Sign In
    </h2>
    
    <div class="columns is-centered">
      <form @submit.prevent="onSubmit" class=" column is-half">

        <div class="field">
          <label class="label">Username</label>
          <div class="control has-icons-left">
            <input
              class="input is-success"
              type="text"
              name="username"
              placeholder="Your username"
              v-model="username">
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
            <!-- <p class="help is-danger">This email is invalid</p> -->
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control has-icons-left">
            <input
              class="input is-success"
              type="text"
              name="password"
              placeholder="Your password"
              v-model="password"
              >
            <span class="icon is-small is-left">
              <i class="fas fa-key"></i>
            </span>
          </div>
            <!-- <p class="help is-danger">This email is invalid</p> -->
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-success is-link">Submit</button>
          </div>
          <div class="control">
            <button class="button is-text">Cancel</button>
          </div>
        </div>

      </form>
    </div>
  </section>
</template>

<script>
// import axios from 'axios'
// import Cookie from 'js-cookie'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      let formData = {
        username: this.username,
        password: this.password
      }
      console.log('formData', formData)
      this.$store.dispatch('login', {
        username: formData.username,
        password: formData.password
      })
        .then(() => {
          if (this.$store.state.authUser) {
            this.$router.replace('/')
          }
        })
    }
  }
}
</script>

<style>
  .title {
    display: flex;
    justify-content: center;
  }
</style>

