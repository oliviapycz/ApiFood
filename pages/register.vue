<template>
  <section class="container" style="min-height:70vh">
    <h2 class="title">
        Sign Up
    </h2>
    
    <div class="columns is-centered">
      <form @submit.prevent="onSubmit" class="column is-half">

        <div class="field">
          <label class="label" for="username">Username</label>
          <div class="control has-icons-left">
            <input 
              class="input is-success" 
              type="text" 
              name="username" 
              placeholder="Your username"
              v-model="username"
              >
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
            <!-- <p class="help is-danger">This email is invalid</p> -->
        </div>

        <div class="field">
          <label class="label" for="email">Email</label>
          <div class="control has-icons-left">
            <input
              class="input is-success"
              type="email"
              name="email"
              placeholder="Your Email"
              v-model="email"
              >
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </div>
          <!-- <p class="help is-danger">This email is invalid</p> -->
        </div>

        <div class="field">
          <label class="label" for="password">Password</label>
          <div class="control has-icons-left">
            <input
              class="input is-success"
              type="password"
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

        <div class="field">
          <label class="label" for="repassword">Retape Password</label>
          <div class="control has-icons-left">
            <input
              class="input is-success"
              type="password"
              name="repassword"
              placeholder="Retape your password"
              v-model="repassword"
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
import axios from 'axios'

export default {
  data () {
    return {
      username: '',
      email: '',
      password: '',
      repassword: ''
    }
  },
  methods: {
    onSubmit () {
      let formData = {
        username: this.username,
        email: this.email,
        password: this.password,
        repassword: this.repassword
      }
      console.log('formData', formData)
      axios.post('/register', formData)
        .then(() => {
          console.log('done')
        })
    }
  }
}
</script>

