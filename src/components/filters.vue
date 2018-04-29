<template>

  <div class="top_block">
    <div class="block">
      <h2>Popular movies</h2>
    </div>

    <div class="right_panel">
      <div class="drop-down">
        <button>Filter</button>
        <ul>
          <li><a v-on:click="show_fave">Show only favourite</a></li>
        </ul>
      </div>

      <div class="drop-down">
        <button>Sort by</button>
        <ul>
          <li><a v-on:click="popular" v-bind:class="[sort_by==='popularity.desc' ? 'active': '']">Popularity</a></li>
          <li><a v-on:click="year" v-bind:class="[sort_by==='release_date.desc' ? 'active': '']">Year</a></li>
          <li><a v-on:click="topic" v-bind:class="[sort_by==='revenue.desc' ? 'active': '']">Revenue</a></li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'filters',

    data () {
      return {
        sort_by: 'popularity.desc',
      }
    },

    methods: {
      show_fave: function(event){
        console.log('favorite');
      },
      year: function(){
        this.sort_by = 'release_date.desc';
        this.$emit('change-order',this.sort_by)
      },
      popular: function(){
        this.sort_by = 'popularity.desc';
        this.$emit('change-order',this.sort_by)

      },
      topic: function(){
        this.sort_by = 'revenue.desc';
        this.$emit('change-order',this.sort_by)
      }
    }


  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

  .top_block{
    margin-top: 30px;
    margin-bottom: 70px;
    display: flex;
    justify-content: space-around;
  }

  .right_panel {
    display: flex;
  }

  .drop-down > button {
    width: 80px;
    height: 40px;
    border-radius: 5px;
    position: relative;
    outline: none;
  }

  .drop-down > ul {
    position: absolute;
    list-style: none;
  }

  .drop-down + .drop-down {
    margin-left: 15px;
  }


  .drop-down:not(:hover) >ul {
    display: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: grey;
  }

  .active {
    font-weight: bold;
  }

  @media (max-width: 425px) {
    .top_block {
      flex-direction: column;
      align-items: center;
    }

    .block {
      margin-bottom: 30px;
    }
  }

</style>
