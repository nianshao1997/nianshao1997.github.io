<template>
  <div id="app">
    <Nav></Nav>
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav'
export default {
  components:{
    Nav
  }
}
</script>
<style>
html,body{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  min-width: 900px;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box; 
}
*{
  padding: 0;
  margin: 0;
}

.router-view{
  flex-grow: 1 !important;
  background-color: rgba(10, 10, 10, .4);
  box-sizing: border-box;
}
</style>
