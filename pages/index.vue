<template>
 <div>
   <input v-model="newTodo" type="text">
<button @click="addTodo" class="add-btn">追加</button>
   <li v-for="(todo, i) in todos"  :key="i" >{{ todo }}</li>
</div>
</template>

<script>
export default {
  data() {
    return {
      todos: ['前田慶次'],
      newTodo: ''
    }
  },
  methods: {
    addTodo: function ()  {
      if (this.newTodo === '') {
        alert('空欄です')
        return
      }
      this.todos.push(this.newTodo)
      this.newTodo = ''
    }
  }
  }
</script>

