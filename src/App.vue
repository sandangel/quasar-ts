<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <header></header>
    <main>
      <img src="~assets/quasar-logo-full.svg"
           alt="Quasar PWA">
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
/*
 * Root component
 */
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class App extends Vue {

}
</script>

<style lang="stylus">
@import '~variables';

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 50px;
  background-color: $primary;
}
</style>
