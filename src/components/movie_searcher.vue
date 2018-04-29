<template>

  <div>
    <my_menu/>

    <search v-on:search-by-text="searchByText"/>

    <div class="movies_wrapper">

    <filters v-on:change-order="onChangeOrder" v-if="text.length === 0"/>

      <div class="movies_cards">
        <movie_card v-for="item in items" v-bind:title="item.title" v-bind:release_date="item.release_date" v-bind:overview="item.overview" v-bind:id="item.id" v-bind:backdrop_path="item.backdrop_path" />
      </div>

      <button v-on:click="load_more" v-if="current_page <total_pages">Load more</button>

    </div>
  </div>
</template>

<script>
import search from '@/components/search'
import filters from '@/components/filters'
import movie_card from './movie_card.vue'
import my_menu from './my_menu.vue'

let load = function  (component) {
  let page = component.current_page;
  let sort = component.sort_by;
  let text = component.text
  let url = 'https://api.themoviedb.org/3/discover/movie?api_key=d287f7efa21397cd3e24683fc931cfb4&page=' + page +'&sort_by=' + sort;
  let url_search = 'https://api.themoviedb.org/3/search/movie?api_key=d287f7efa21397cd3e24683fc931cfb4&query=' + text + '&page=' + page;
  if(component.text !==''){
    url=url_search;
  }
  console.log(url);
  let myRequest = new Request(url);
  fetch(myRequest).then((resp) => {
    resp.json().then((json) => {
      component.total_pages = json.total_pages;

      console.log(json);
      for (let i = 0; i < json.results.length; i++) {
//          console.log(json.results[i]);
        let film = json.results[i];
        if (film.overview.length > 150) {
          film.overview = film.overview.slice(0, 150) + '...';
        }
        component.items.push(film);
      }

      component.current_page +=1;

    });
  });
}


export default {
  name: 'HelloWorld',
  components: {
    movie_card,
    search,
    filters,
    my_menu
  },

  data () {
    return {
      current_page: 1,
      total_pages: 0,
      items: [],
      sort_by: 'popularity.desc',
      text: ''
    };
  },

  created: function () {
    load(this);

  },

  methods: {
    load_more: function(event) {
      load(this);
    },

    onChangeOrder: function(sortby_fromFilters){
      if(sortby_fromFilters !== this.sort_by){
        this.sort_by = sortby_fromFilters;
        this.current_page=1;
        this.items.splice(0,this.items.length);
        load(this);
      }
    },

    searchByText: function(text_fromSearch){
      if(text_fromSearch!==this.text){
        this.text = text_fromSearch;
        this.current_page = 1;
        this.items.splice(0,this.items.length);
        load(this);
      }
    }
  }

}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>


  .movies_wrapper{
    /*margin: 0 auto;*/
    padding: 30px;
    background-color: aliceblue;
  }

  .movies_cards{
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    flex-basis: 100%;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: grey;
  }

  button {
    width: 100px;
    height: 40px;
    border-radius: 5px;
    background-color: #ffffff;
    font-size: 14px;
    outline: none;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media only screen (min-width: 768px) {

  }


</style>
