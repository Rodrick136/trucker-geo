<template>
  <div class="layout-container">
    <pageHeader/>
    <nuxt/>
  </div>
</template>

<script>
import pageHeader from "~/components/pageHeader.vue";

export default {
  components: {
    pageHeader
  }
};
</script>


<style>
/* variables pertaing to everything
https://www.w3schools.com/css/css_rwd_mediaqueries.asp
*/

:root {
}
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.layout-container {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 10% auto 10%;
  grid-template-rows: 20% auto 10%;
  justify-content: stretch;
  align-items: center;
  text-align: center;
}
.page-container {
  grid-column: 2;
  grid-row: 2;
  justify-self: center;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
  display: inline-flex;
  align-self: center;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
