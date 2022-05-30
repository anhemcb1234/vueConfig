<template>
<div>
  {{message}}
</div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return {
      message:'home ',

    }
  },
  mounted() {
    console.log('mounted')
  },
}
</script>

<style scoped>

</style>