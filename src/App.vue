<template>
  <div id="app">
    <router-view></router-view>
    <DisplayCounter></DisplayCounter>
  </div>
</template>

<script>
import DisplayCounter from "@/components/DisplayCounter";
export default {
  name: 'App',
  components: {
  DisplayCounter
  }
}
</script>

<style>

</style>
