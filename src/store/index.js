import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        headerTitle: 'Prueba Tecnica Front End',
        dataDetail: {},
    },
    mutations: {

        setHeaderTitle(state, payload) {
            state.headerTitle = payload;
        },
        setDataDetail(state, payload) {
            state.dataDetail = payload;
        },
    },
    actions: {},
    modules: {},
});