<template>
    <div class="task-page">
      <h2 class="task-page__title">Daftar Tugas</h2>
  
      <!-- Input Tugas -->
      <div class="task-input-container">
        <TaskInput @add-task="addTask" />
      </div>
  
      <!-- Daftar Tugas -->
      <div class="task-list-container">
        <TaskList :tasks="tasks" @delete-task="deleteTask" />
      </div>
    </div>
  </template>
  
  <script>
  import TaskInput from './TaskInput.vue';
  import TaskList from './TaskList.vue';
  
  export default {
    components: {
      TaskInput,
      TaskList,
    },
    data() {
      return {
        tasks: [],
      };
    },
    methods: {
      addTask(newTask) {
        const task = {
          id: Date.now(),
          name: newTask,
          completed: false,
        };
        this.tasks.push(task);
      },
      deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
      },
    },
  };
  </script>
  
  <style scoped>
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Arial, sans-serif; /* Mengatur font default */
  }
  
  .task-page {
    display: flex;
    flex-direction: column;
    justify-content: center; /* Memusatkan konten secara vertikal */
    align-items: center; /* Memusatkan konten secara horizontal */
    height: 100vh; /* Mengambil tinggi penuh dari viewport */
    width: 100vw; /* Mengambil lebar penuh dari viewport */
    background-color: #f4f7fa; /* Warna latar belakang */
  }
  
  .task-page__title {
    font-size: 36px;
    font-weight: 600;
    color: #333;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .task-input-container {
    width: 100%;
    max-width: 600px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
  }
  
  .task-list-container {
    width: 100%;
    max-width: 600px;
    padding: 10px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Bayangan lebih halus */
  }
  
  .task-list-container ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .task-list-container li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    margin-bottom: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  
  .task-list-container li:hover {
    background-color: #eef2f7;
    transform: scale(1.03);
  }
  
  .task-list-container li .task-name {
    font-size: 18px;
    color: #333;
    word-wrap: break-word;
    flex-grow: 1;
  }
  
  .task-list-container li .delete-btn {
    background-color: #ff4d4d;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .task-list-container li .delete-btn:hover {
    background-color: #e03e3e;
  }
  
  .task-list-container li.completed .task-name {
    text-decoration: line-through;
    color: #aaa;
  }
  
  .task-list-container li.completed {
    background-color: #e6f7e6;
  }
  
  .task-list-container li.completed .delete-btn {
    background-color: #7cbe7c;
  }
  </style>