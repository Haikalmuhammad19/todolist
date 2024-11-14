<template>
    <div :class="['task-input', { 'task-input-shifted': isShifted }]">
      <h2>Tambah Tugas Baru</h2>
      <input v-model="newTask" placeholder="Masukkan nama tugas" />
      <button @click="addTask">Tambahkan Tugas</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isShifted: Boolean, // Prop untuk memeriksa apakah konten perlu bergeser
    },
    data() {
      return {
        newTask: '',
      };
    },
    methods: {
      addTask() {
        if (this.newTask) {
          // Emit event ke parent (App.vue)
          this.$emit('add-task', this.newTask);
          this.newTask = ''; // Reset input setelah menambahkan tugas
        }
      },
    },
  };
  </script>
  
  <style>
  .task-input {
    width: 100%;
    max-width: 600px;
    margin-left: 50px;
    padding: 15px;
    background-color: #f4f4f4;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .task-input input {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 16px;
  }
  
  .task-input button {
    margin-top: 10px;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .task-input button:hover {
    background-color: #0056b3;
  }
  
  .task-input-shifted {
    transform: translateX(20px);
  }
  </style>
  