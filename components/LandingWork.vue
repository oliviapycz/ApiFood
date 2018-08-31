<template>
    <section id="landingpage1" class="landingpage1">
      <div class="title--card">
        <h2>How it works</h2>
      </div>
      <!-- <br>
      <ul v-for="food in foods" :key="food._id">
        <li>food : {{ food.food }}</li>
        <br>
      </ul> -->
      <div class="cards">
        <div class="card">
          <header class="card-header">
            <div class="card-header-title is-centered">
              <h4>3 different available requests</h4>
            </div>
          </header>
          <div class="card-content">
            <div class="content">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis aperiam ex et adipisci expedita eum iusto aspernatur natus voluptatem autem deleniti voluptate distinctio, sed quibusdam minima eligendi illum saepe sit?</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis aperiam ex et adipisci expedita eum iusto aspernatur natus voluptatem autem deleniti voluptate distinctio, sed quibusdam minima eligendi illum saepe sit?</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis aperiam ex et adipisci expedita eum iusto aspernatur natus voluptatem autem deleniti voluptate distinctio, sed quibusdam minima eligendi illum saepe sit?</p>
            </div>
          </div>
          <footer>
            <a
            href="/register"
            class="button--green">Sign Up</a>
          </footer>
        </div>

        <div class="card" style="background-color: lightgrey">
          <header class="card-header">
            <div class="card-header-title is-centered">
              <h4>Fork it on Github</h4>
            </div>
          </header>
          <div class="card-content">
            <div class="content">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis aperiam ex et adipisci expedita eum iusto aspernatur natus voluptatem autem deleniti voluptate distinctio, sed quibusdam minima eligendi illum saepe sit?</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis aperiam ex et adipisci expedita eum iusto aspernatur natus voluptatem autem deleniti voluptate distinctio, sed quibusdam minima eligendi illum saepe sit?</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis aperiam ex et adipisci expedita eum iusto aspernatur natus voluptatem autem deleniti voluptate distinctio, sed quibusdam minima eligendi illum saepe sit?</p>
            </div>
          </div>
          <footer>
            <a
            href="https://github.com/oliviapycz/ApiFood"
            target="_blank"
            class="button--green"><i class="fab fa-github fa-2x"></i></a>
          </footer>
        </div>
      </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      foods: []
    }
  },
  methods: {
    getFoods () {
      return axios.get('api/foods')
        .then((res) => {
          this.foods = res.data
          console.log(res.data)
        })
    }
  },
  mounted () {
    this.getFoods()
  }
}
</script>

<style lang="scss">
  .landingpage1 {
    background-color: lightgrey;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    .title--card {
      display: flex;
      justify-content: center;
      text-align: center;
      margin: 3vh;
    }
    .content {
      margin: auto 2vh 3vh;
    }
    .cards {
      display: flex;
      justify-content: space-around;

      .card {
      width: 35vw;
      min-height: 80vh;
      footer a {
        margin-bottom: 2vh;
      }
      }
    }
    footer {
      display: flex;
      justify-content: center;
      text-align: center;
    }
  }
</style>

