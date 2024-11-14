<template>
  <div :class="['sidebar', { 'sidebar-open': isOpen }]">
    <button @click="closeSidebar">Close Sidebar</button>
    <ul>
      <li>
        <router-link to="/" class="menu-item" @click="closeSidebar">Tugas</router-link>
      </li>
      <li>
        <router-link to="/profile" class="menu-item" @click="closeSidebar">Profil</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
  },
  methods: {
    closeSidebar() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
/* Styling Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #333;
  color: white;
  transform: translateX(-100%); /* Sidebar tersembunyi secara default */
  transition: transform 0.3s ease;
  padding: 20px;
  z-index: 2;
}

.sidebar-open {
  transform: translateX(0); /* Sidebar muncul ketika isOpen = true */
}

button {
  background-color: #ff4d4d;
  color: #fff;
  border: none;
  padding: 10px;
  margin-bottom: 20px;
  cursor: pointer;
}

button:hover {
  background-color: #e03e3e;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 20px; /* Space antar item menu */
}

.menu-item {
  display: block;
  padding: 15px;
  background-color: #444;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s, transform 0.3s;
  margin-bottom: 10px; /* Jarak antar kotak menu */
}

.menu-item:hover {
  background-color: #ff4d4d;
  transform: scale(1.05); /* Efek memperbesar saat hover */
}

.menu-item:active {
  background-color: #e03e3e;
}
</style>
