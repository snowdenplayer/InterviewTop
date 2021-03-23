import { createStore } from 'vuex'

import {person} from "@/data/data.person";

export default createStore({
  state: {
    person
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters:{
    PERSON(state){
      return state.person;
    }
  }
})
