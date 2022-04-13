<template>
<div>
  <button @click="increment()">Tăng</button>
  <button @click="decrement">Giảm</button>
</div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: "ControlCounter",
  methods: {
    ...mapMutations(["increment", "decrement"])
  }
}
</script>

<style scoped>

</style>