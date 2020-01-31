<template>
  <div class="home">
   <v-container fill-height>
      <v-row >
        <v-col md="6" class="primary">
          {{title1}}
        <v-form ref="form">
           <v-text-field
            name=""
            label="enter your todo " 
            ref="newtask"
            value=""
            v-bind:rules="[rules.required, rules.min]"           
            solo >
            </v-text-field> 
          <v-btn 
        
          v-on:click="add()"> Add </v-btn>         
        </v-form>
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
          <v-btn class="error" v-on:click="emptyList"> Clear List </v-btn>
        </v-col>      
      </v-row>
    </v-container>

  </div>
</template>

<script>
 import {mapState, mapActions} from 'vuex'
export default {
  data(){
    return{
      
       rules:{
        required: v => !!v || 'field cannot be empty',
        min: v => v.length >=8 || 'Min must be 8 characters'
     }
    }

  },
  methods:{
 
    ...mapActions({
      addNewTask: 'addNewTask', 
      cleanInput: 'cleanInput'
    }),
    add(){
      if(this.$refs.form.validate()){ 
        const newTask = this.$refs.newtask.$refs.input.value       
        this.addNewTask(newTask)        
        this.$refs.newtask.reset()
      }     
            
    },
    removeTask(currentTask){
      this.$store.dispatch('removeTask', currentTask)           
    },
    emptyList(){
      this.$store.dispatch('cleanList')
    },
    clearInput(){
        console.log("input is cleared")
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
<style>
.v-messages__message{
  font-size: 18px
}
</style>



