import Vue from "vue";
import Vuex from "vuex";
import {TEST} from "./mutation-types"
import {homeServices} from "../services/homeServices";
Vue.use(Vuex);

export const store = new Vuex.Store({
        state: {
            count: 0,
            todos: [
                { id: 1, text: '...', done: true },
                { id: 2, text: '...', done: false },
                { id: 3, text: '...', done: true }
            ],
            hihi: [                { id: 1, text: '...', done: true },],
            data : []
        },
        mutations: {
            increment(state) {
                state.count++;
            },
            decrement(state) {
                state.count--;
            },
            [TEST](state, payload) {
                console.log(payload)
                console.log(state.hihi)
                state.hihi = [...state.hihi, payload]
            },
            getData(state, payload) {
                console.log(payload)
                state.data = [payload]
            }
        },
        getters: {
            getTodoById: (state) => (id) => {
                return state.todos.find(todo => todo.id === id)
            }
        },
          actions: {
            incrementAsync ({ commit }) {
                setTimeout(() => {
                  commit('increment')
                }, 1000)
            },
            async getDatas({commit}, payload) {
                let reps = await homeServices.getArticles(payload)
                commit('getData', reps.data)
            },
            // async actionA ({ commit }) {
            //     commit('gotData', await getData())
            // }
          }
    }
)
