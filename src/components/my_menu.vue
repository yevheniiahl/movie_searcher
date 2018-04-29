<template>
    <div class="menu">
      <ul>
        <li><a class="logo" href="/"></a></li>
        <li><a href="/">DISCOVER</a></li>
        <li><a href="#">MOVIES</a></li>
        <li><a href="#">TV SHOWS</a></li>
        <li><a href="#">PEOPLE</a></li>
      </ul>
    </div>
</template>

<script>

  export default {
    name: 'my_menu',
  }

</script>

<style scoped>
  .menu {
    background-color: #ffffff;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: flex-start;
    padding-left: 50px;
    border-bottom: 12px solid lightblue;
  }

  .menu ul {
    display: flex;
    list-style: none;
    color: #ffffff;
    justify-content: flex-start;
    align-items: center;
  }

  .menu ul li a{
    padding-right: 20px;
    color: #000000;
    text-decoration: none;
  }

  .logo {
    background: url('../images/logo480.png') no-repeat;
    background-size: contain;
    width: 50px;
    height: 50px;
    margin-right: 20px;
    display: inline-block;

  }
</style>
