<template>
<div>
  <div>
    {{count}}
    {{getTodoById(2)}}
    <input v-model="data1"/>
    <button @click="handlerTest">Submid</button>
    <button @click="show">showTestData</button>
    <button @click="handlerTestSomeThing">TestSomthin</button>
  </div>
  <div>
    <input v-model="mess"/>
    <button @click="handlerPush">Push</button>
    <button @click="hehe">show</button>
    <div>
      {{this.data}}
    </div>
  </div>
</div>
</template>

<script>
import {mapState, mapGetters,mapMutations, mapActions } from 'vuex'
import {TEST} from "../store/mutation-types"
export default {
  name: "DisplayCounter",
  data(){
    return{
      data1: '',
      mess : ''
    }
  },
  methods: {
    ...mapMutations(['increment','decrement',TEST, 'getData']),
    ...mapActions(['incrementAsync', 'getDatas']),
    show(){
      console.log(this.count)
    },
    handlerTest() {
      this.TEST({
        id: 2,
        data: this.data
      })
    },
    handlerTestSomeThing() {
      this.incrementAsync()
    },
    handlerPush() {
      console.log(this.mess)
      this.getDatas(this.mess)
    },
    hehe() {
      console.log('data',this.data)
      console.log(this.hihi)
    }
  },
  computed: {
    ...mapState(['count','hihi', 'data']),
    ...mapGetters(['getTodoById'])
  }
}
</script>

<style scoped>

</style>