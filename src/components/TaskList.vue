<template>
    <div class="task-list">
      <h2>Daftar Tugas</h2>
      <ul>
        <TaskItem 
          v-for="task in tasks" 
          :key="task.id" 
          :task="task" 
          @delete-task="deleteTask"
          @toggle-completion="toggleCompletion"
        />
      </ul>
    </div>
  </template>
  
  <script>
  import TaskItem from './TaskItem.vue';
  
  export default {
    components: {
      TaskItem,
    },
    props: {
      tasks: Array, // Daftar tugas yang diterima dari parent (App.vue)
    },
    methods: {
      // Menghapus tugas
      deleteTask(taskId) {
        this.$emit('delete-task', taskId); // Emit event untuk menghapus tugas
      },
      // Toggle status selesai untuk tugas
      toggleCompletion(taskId) {
        this.$emit('toggle-completion', taskId); // Emit event untuk menandai tugas selesai
      }
    },
  };
  </script>
  
  <style>
  .task-list {
    width: 100%;
    max-width: 600px;
    margin-left: 50px;
    padding: 15px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .task-list ul {
    list-style: none;
    padding: 0;
  }
  
  .task-list h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  </style>
  