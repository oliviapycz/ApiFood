<template>
    <section id="landingpage2" class="landingpage2">
      <div class="title--card">
        <h2>How to help</h2>
      </div>
      
      <div class="cards">
        <div class="card">
          <header class="card-header">
            <div class="card-header-title is-centered">
              <h4>Become a Member of the Community</h4>
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

        <div class="card">
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

<style lang="scss">

  .landingpage2 {
    background-color: lightblue;
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

/******DESKTOP******/

// @media (max-width: 768px) {
//   .cards {
//     display: flex;
//     flex-direction: column;
//     justify-content: center !important;
//     .card {
//     width: inherit !important;
//     min-height: 80vh;
//     margin: 2vh;
//     }
//   }
// }
</style>
