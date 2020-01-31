import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title1: "Todo List",
    title2: "General Info",
    tasks:[],
    
  },
  getters:{
    countTodos: state => {
      return state.tasks.length
    }  
  },
  mutations: {
    pushNewTask(state, task){       
      state.tasks.push({
        name: task
      })
    },
    delCurrentTask(state, currTask){
      // indexCurrTask = state.tasks.findIndex(currTask)
      console.log("item  is " + currTask)      
      state.tasks.splice(currTask, 1)        
    } ,
    clearList(state){
      state.tasks = []
    }
  },
  actions: {
    addNewTask(context, task){
      context.commit("pushNewTask", task)
    },
    removeTask(context, currTask){
      context.commit("delCurrentTask", currTask)
    },
    cleanInput(context){
      context.commit('clearInput')
    },
    cleanList(context){
      context.commit('clearList')
    }
  } 
});
