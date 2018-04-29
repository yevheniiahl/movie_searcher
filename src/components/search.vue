<template>


    <div class="search">
      <span>
      <input v-model.lazy="text" placeholder="Search for a movie, TV show, person..." autocomplete="off">
      </span>
    </div>
</template>

<script>

  export default {
    name: 'search',
    data () {
      return {
        text: ''
      }
    },

    watch: {
      text: function(val){
        console.log(val);
        this.$emit('search-by-text', val);
      }
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>


  .search {
    width: 1180px;
    height: 46px;
    /*background: lightblue;*/
    border-bottom: 1px solid #dedede;
    position: relative;
    margin: 0 auto;
  }

  .search input {
    border: none;
    width: 100%;
    height: 46px;
    font-family: Arial, sans-serif;
    font-style: italic;
    font-size: 100%;
    line-height: 1.2em;
    color: #acacac;
    padding: 0 30px;
    border-radius: 0;
    outline: none;
  }

  .search span:before {
    content: " ";
    background: url("../images/serch.png") no-repeat;
    background-size: contain;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    width: 30px;
    left: 0;
    top: 14px;
    font-size: 1em;
    color:#acacac;
  }



</style>
