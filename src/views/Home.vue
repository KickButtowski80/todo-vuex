<template>
  <div class="home">
   <v-container fill-height>
      <v-row >

        <v-col md="6" class="primary">
          {{title1}}
         
           <v-text-field
            name=""
            label="enter your todo " 
            ref="newtask"
            v-bind:value= newtaskVal
            solo
          ></v-text-field>
           
          <v-btn v-on:click="add()"> Add </v-btn>         
 
        <ul >
          <li v-for="(task,index) in this.$store.state.tasks"
              v-bind:key="`${index}`"
            >
              {{task.name}}
           <span class="d-flex justify-end" >  
             <v-btn color="error" 
                    v-on:click="removeTask(index)"
                    editable
             >remove</v-btn>
          </span>
          </li>
        </ul>
        </v-col>


        <v-col md="6" class="success">
          {{getTitle2}}  
          <hr>  
          Number of Todos: 
        <v-chip
            class="ma-2"
            color="secondary"
            text-color="white"
          >
            {{countTodos}}
          </v-chip>
        </v-col>
      
      </v-row>
    </v-container>

  </div>
</template>

<script>
 import {mapState, mapActions} from 'vuex'
export default {
 
  name: "home",
  components: {
    // HelloWorld
  },
  methods:{
 
    ...mapActions({
      addNewTask: 'addNewTask', 
      cleanInput: 'cleanInput'
    }),
    add(){
     console.log(this.$refs.newtask.$refs.input.value)
      // this.$store.state.tasks.push(
      //   { name: this.$refs.newtask.$refs.input.value
      //   })

      const newTask = this.$refs.newtask.$refs.input.value
      // this.$store.dispatch('addNewTask', newTask)
      this.addNewTask(newTask)
       this.cleanInput()
            
    },
    removeTask(currentTask){
      this.$store.dispatch('removeTask', currentTask)
     
      
    }
  },
  computed:{
    
      ...mapState({
         newtaskVal: state => state.inputvalue,
         title1: state => state.title1,

     }),
      getTitle2(){
       return  this.$store.state.title2
     },
     countTodos(){
       return this.$store.getters.countTodos
     }
  }
}
</script>
<style scoped>

</style>



