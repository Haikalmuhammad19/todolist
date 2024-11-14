<template>
    <li :class="{ completed: task.completed }">
      <input type="checkbox" v-model="task.completed" @change="toggleCompletion" />
      <span>{{ task.name }}</span>
      <button @click="deleteTask">Hapus</button>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      task: Object, // Mendapatkan tugas dari parent
    },
    methods: {
      deleteTask() {
        this.$emit('delete-task', this.task.id); // Emit event untuk menghapus tugas
      },
      toggleCompletion() {
        this.$emit('toggle-completion', this.task.id); // Emit event untuk toggle status selesai
      }
    },
  };
  </script>
  
  <style scoped>
  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #f4f4f4;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  li.completed {
    background-color: #d4f8d4; /* Background hijau muda untuk tugas selesai */
    text-decoration: line-through; /* Garis tengah untuk teks tugas selesai */
    color: green;
  }
  
  input[type="checkbox"] {
    margin-right: 10px;
  }
  
  button {
    margin-left: auto;
    padding: 5px 10px;
    background-color: #ff4d4d;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  
  button:hover {
    background-color: #e03e3e;
  }
  </style>
  