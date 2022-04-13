<template>
<div>
  {{count}}
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "DisplayCounter",
  data(){
    return{

    }
  },
  computed: {
    ...mapState(['count'])
  }
}
</script>

<style scoped>

</style>