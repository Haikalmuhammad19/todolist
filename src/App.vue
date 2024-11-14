<template>
  <div id="app">
    <!-- Tombol hamburger hanya terlihat ketika sidebar tertutup -->
    <HamburgerMenu v-if="!isSidebarOpen" @toggle="toggleSidebar" />

    <!-- Sidebar -->
    <Sidebar :isOpen="isSidebarOpen" @close="toggleSidebar" />

    <div :class="['content', { 'content-shifted': isSidebarOpen }]">
      <!-- Halaman yang sesuai dengan rute yang dipilih akan ditampilkan di sini -->
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import HamburgerMenu from './components/HamburgerMenu.vue';

export default {
  components: {
    Sidebar,
    HamburgerMenu,
  },
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>

<style>
#app {
  display: flex;
  position: relative;
}

.content {
  flex: 1;
  padding: 20px;
  transition: transform 0.3s ease;
  z-index: 1; /* Konten utama berada di bawah sidebar */
}

.content-shifted {
  transform: translateX(250px); /* Geser konten ketika sidebar terbuka */
}
</style>
