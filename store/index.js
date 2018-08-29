import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    authUser: null
  },

  mutations: {
    SET_USER: function (state, user) {
      state.authUser = user
    }
  },

  actions: {
    // nuxtServerInit is called by Nuxt.js before server-rendering every page
    nuxtServerInit ({ commit }, { req }) {
      if (req.user) {
        commit('SET_USER', req.user)
      }
    },
    async login ({ commit }, { username, password }) {
      if (!username || !password) throw new Error('Username and password are required')
      try {
        const { data } = await axios.post('/login', { username, password })
        commit('SET_USER', data)
      } catch (error) {
        throw new Error('Wrong username or password')
      }
    },
    async register ({ commit }, { email, password, username }) {
      if (!email || !password || !username) throw new Error('Email and password are required')
      try {
        const { data } = await axios.post('/register', { email, password, username })
        commit('SET_USER', data)
      } catch (error) {
        switch (error.response.status || 500) {
          case 409: throw new Error('Such email is already registered')
          case 500: throw new Error('Internal server error')
        }
      }
    },
    async logout ({ commit }) {
      console.log('[STORE] logout')
      await axios.post('/logout')
      commit('SET_USER', null)
    },
    async changePassword ({ commit }, { currentPassword, newPassword }) {
      if (!currentPassword || !newPassword) throw new Error('All fields are required')
      try {
        await axios.patch('/api/auth', { currentPassword, newPassword })
        commit('SET_USER', null)
      } catch (error) {
        throw new Error('Wrong password')
      }
    }
  }
})

export default store
