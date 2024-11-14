<template>
    <div class="hamburger-menu" @click="toggleSidebar">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      toggleSidebar() {
        this.$emit('toggle'); // Emit event untuk toggle sidebar
      },
    },
  };
  </script>
  
  <style scoped>
  .hamburger-menu {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    padding: 10px;
    z-index: 3; /* Hamburger berada di atas sidebar dan konten */
  }
  
  .bar {
    width: 30px;
    height: 4px;
    background-color: #333;
    margin: 5px 0;
  }
  </style>
  