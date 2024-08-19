import { createStore } from 'vuex'
import axios from "axios"
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import {useCookies} from "vue-cookies"
import router from '@/router';


axios.defaults.headers = $cookies.get('token')
axios.defaults.withCredentials = true

export default createStore({
  state: {
    users:null,
    fruits:null
  },
  getters: {
  },
  mutations: {
    setUsers(state, payload){
      state.users = payload;
    },
    setFruits(state, payload){
      state.fruits = payload;
    }
  },
  actions: {
    async fetchUsers({commit}){
      let data = await fetch('http://localhost:5003/user/getData')
      let users = await data.json()
      commit('setUsers', users);
    },
    async addUser({commit},info){
      let data = await axios.post('http://localhost:5003/user/insert',info)
      console.log(data);
    },
    async loginUser({commit},info){
      let {data} = await axios.post(`http://localhost:5003/user/login`,info)
      console.log(data);
      $cookies.set('token', data.token)
      if (data.message) {
        toast("You have logged in successfully", {
          "theme": "auto",
          "type": "success",
          "position": "top-center",
          "autoClose": 2000,
          "dangerouslyHTMLString": true
        }
      )
    }
      else{
        toast("username or password  is incorrect! please try again ", {
          "theme": "auto",
          "type": "error",
          "position": "top-center",
          "autoClose": 2000,
          "dangerouslyHTMLString": true
        })
      }
      await router.push('/about')
      location.reload()
    },
    async getFruits({commit}){
      let {data} = await  axios.get('http://localhost:5003/fruit/getFruits')
      commit('setFruits',data)
     
    },
    async addToCart({commit},id_fruit){
      console.log(id_fruit);
      let {data} = await axios.post('http://localhost:5003/fruit/cart',{id:id_fruit})
  }
  },
  modules: {
  }
})


