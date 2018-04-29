<template>
  <div>
    <my_menu/>
  <div class="wrapper">
    <div class="card">
      <div class="card_image" :style="'background: url(https://image.tmdb.org/t/p/w370_and_h556_bestv2' + backdrop_path + ')'"></div>
      <div class="description">
        <div class="title-block">
          <div class="title">
              <h1>{{ title }}</h1>
              <p class ="data">{{ release_date }}</p>
          </div>
          <div class="text">
            <h3>Overview</h3>
            <p>{{ overview }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>

  import my_menu from './my_menu.vue'

  export default {
    name: 'movie',
    components: {
      my_menu,
    },

    data () {
      return {
        title: '',
        release_date: '',
        overview: '',
        backdrop_path: '',
      }
    },

    created: function () {
      let myRequest = new Request('https://api.themoviedb.org/3/movie/' + this.$route.params.id + '?api_key=d287f7efa21397cd3e24683fc931cfb4');
      fetch(myRequest).then((resp) => {
        resp.json().then((json) => {
          this.title = json.title;
          console.log(json);
          this.release_date = json.release_date;
          this.overview = json.overview;
          this.backdrop_path = json.backdrop_path;
        });
      });

    },

  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  .wrapper{
    background-color: darkcyan;
    display: flex;
    justify-content: center;
    height: 100vh;
  }

  .card {
    display: flex;
    justify-content: space-between;
    min-width: 250px;
    width: 90vw;
    height: 80%;
    background-color: #ffffff;
    padding:50px;
    margin:auto;
  }

  .card_image {
    width: 30%;
    height: 96%;
    background-repeat : no-repeat;
    background-size: cover;
  }

  .description {
    min-width: 250px;
    width: 60%;
    display: flex;
    justify-content: space-between;
  }

  .title-block {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  .text {
    height: 60%;
  }

  @media (max-width: 768px) {
    .card {
      flex-direction: column;
      align-items: center;
      height: 100%;

    }

    .card_image {
      width: 60%;
      height: 300%;
      margin-bottom: 40px;
    }
  }

</style>
