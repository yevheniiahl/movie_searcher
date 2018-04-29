<template>

  <div class="card">
    <div class="card_image" :style="'background: url(https://image.tmdb.org/t/p/w370_and_h556_bestv2' + backdrop_path + ')'"></div>
    <div class="description">
      <div class="title-block">
        <div class="title">
          <h3>{{ title }}</h3>
          <p class ="data">{{release_date}}</p>
        </div>
        <a  class = "liked" href="#"></a>
      </div>
      <div class="text">
        <p>{{overview}}</p>
      </div>
      <div class="hor-line"></div>
      <span><a :href="'#/movie/' + id">More info</a></span>
    </div>
  </div>


</template>

<script>

  export default {
    name: 'movie_card',
    props: ['title', 'release_date', 'overview', 'id', 'backdrop_path']
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

  .card{
    min-width: 250px;
    width: 40vw;
    height: 50vh;
    /*height: 100%;*/
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;

  }

  .card_image {
    width: 40%;
    min-width: 40%;
    background-size: contain;
  }

  .description{
    padding: 36px 16px 16px 10px;
    margin-bottom: 30px;
  }

  .description .title-block {
    display: flex;
    justify-content: space-between;
  }

  .title-block .liked {
    background: url("../images/star.png") no-repeat;
    background-size: contain;
    height: 46px;
    width: 30px;
  }

  .description .data {
    color: grey;
  }

  .description .title {
    margin-bottom: 20px;
  }

  .description .text {
    margin-bottom: 30px;
    font-size: 0.9em;
  }

  .hor-line{
    border-bottom: 1px  lightgrey solid;
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: grey;
  }
</style>
