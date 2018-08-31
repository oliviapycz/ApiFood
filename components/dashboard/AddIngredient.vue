<template>
    <section class="cards">
        <div class="card backgroundCard">
            <header class="card-header">
                <div class="card-header-title is-centered">
                <h4>Propose a new ingredient</h4>
                </div>
            </header>
            <transition>
                <div v-if="!proposeIng && !ingredientAdded" class="card-content">
                    <div class="content">
                        <p class="subtitle">Thank you for helping the community!</p>
                        <div class="card">
                            <header class="card-header">
                                <div class="card-header-title flex--column">
                                <h5>First, verify if the new ingredient doesn't already exist in the database</h5>
                                <p class="subtitle">The ingredient must be in <strong>lowercase</strong> and in <strong>singular</strong></p>
                                </div>
                            </header>
                            <div class="card-content">
                                <div class="content">
                                    <form @submit.prevent="onSubmit" class=" columns flex--row">
                                        <input 
                                        class="input is-success column is-three-fifths"
                                        type="text"
                                        name="ingredient"
                                        placeholder="Search ingredients"
                                        v-model="ingredient"
                                        required
                                        @focus="onFocus()">
                                        <button class="button--green column is-one-fifth">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="marg"></div>
                        <div v-if="found || notFound || foundInProposed" class="card">
                            <header class="card-header">
                                <div class="card-header-title flex--column">
                                <h5 v-if="found" style="margin: auto"><strong>{{ingredient}}</strong> is already in the database, but you can try again!</h5>
                                <h5 v-if="foundInProposed"><strong>{{ingredient}}</strong> is not yet in the database, But was already proposed and is waiting for verification</h5>
                                <h5 v-if="notFound"><strong>{{ingredient}}</strong> is not yet in the database, Do you want to propose it?</h5>
                                </div>
                            </header>
                            <div v-if="notFound" class="card-content">
                                <div class="content flex--row">
                                    <button class="button--green" @click="proposeIng = !proposeIng">Yes</button>
                                    <button class="button--maroon" @click="resetSearch">No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="proposeIng && !ingredientAdded" class="card-content">
                    <div class="content">
                        <div class="card">
                            <header class="card-header">
                                <div class="card-header-title flex--column">
                                <h5>{{ingredient}}</h5>
                                <p class="subtitle"><strong>{{ingredient}}</strong>is the new ingredient you want to propose, are your sure?</p>
                                </div>
                            </header>
                            <div v-if="notFound" class="card-content">
                                <div class="content flex--row">
                                    <button class="button--green" @click="confirmIng = !confirmIng">Yes I'm sure</button>
                                    <button class="button--maroon" @click="resetSearch">No I'm not!</button>
                                </div>
                            </div>
                        </div>
                        <div class="marg"></div>
                        <div v-if="confirmIng" class="card">
                            <header class="card-header">
                                <div class="card-header-title flex--column">
                                <h5>{{ingredient}}</h5>
                                <p class="subtitle">Please confirm that the new ingredient is in<strong>lowercase</strong> and in <strong>singular</strong></p>
                                </div>
                            </header>
                            <div v-if="notFound" class="card-content">
                                <div class="content flex--row">
                                    <button class="button--green" @click="sendIng">Yes it's all good</button>
                                    <button class="button--maroon" @click="resetSearch">No I made a mistake</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="ingredientAdded">
                    <div class="marg"></div>
                    <h2 class="title"> All good! Thanks for your help!</h2>
                    <div class="marg"></div>
                    <div class="content flex--row">
                        <button class="button--green" @click="resetSearch">Propose a new ingredient</button>
                        <!-- <button class="button--maroon" >No I made a mistake</button> -->
                    </div>
                </div>
            </transition>
        </div>

    </section>
</template>

<script>
export default {
  data () {
    return {
      ingredient: '',
      found: false,
      foundInProposed: false,
      notFound: false,
      proposeIng: false,
      confirmIng: false,
      ingredientAdded: false
    }
  },
  methods: {
    onSubmit () {
      let ing = this.ingredient
      console.log('ingredient', ing)
      this.$store.dispatch('findIngredient', { food: ing })
        .then(() => {
          if (this.$store.state.findIngredient.data) {
            console.log('found it', ing)
            this.found = true
          } else if (this.$store.state.findProposedIngredient.data) {
            this.foundInProposed = true
          } else {
            console.log('no where to be found....', ing)
            this.notFound = true
          }
        })
        .catch((err) => {
          console.log(err)
        })
      this.found = false
      this.notFound = false
      this.foundInProposed = false
    },
    onFocus () {
      console.log('onFocus')
      this.found = false
      this.notFound = false
      this.foundInProposed = false
    },
    resetSearch () {
      this.found = false
      this.notFound = false
      this.foundInProposed = false
      this.proposeIng = false
      this.confirmIng = false
      this.ingredientAdded = false
    },
    sendIng () {
      console.log('in sendIng')
      let ing = this.ingredient
      this.$store.dispatch('addIngredient', { food: ing })
        .then(() => {
          console.log('ingredientAdded', this.ingredientAdded)
          this.ingredientAdded = true
          console.log('ingredientAdded***AFTER', this.ingredientAdded)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss">

section {
    display: flex;
    justify-content: space-around;

    .backgroundCard {
    width: 66vw;
    min-height: 80vh;
    }
}
.marg {
    margin-top: 5vh;
}
</style>