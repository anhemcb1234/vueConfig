import Vue from "vue";
import Vuex from "vuex";
// import {homeService} from "../services/homeService";

Vue.use(Vuex);

export const store = new Vuex.Store({
        state: {
            count: 0,
        },
        mutations: {
            increment(state) {
                state.count++;
            },
            decrement(state) {
                state.count--;
            },

        },
    }
)
