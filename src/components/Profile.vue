<template>
  <div class="profile-page">
    <div class="profile-card">
      <div class="profile-header">
        <h2>Profil Saya</h2>
      </div>
      <div class="profile-content">
        <div class="profile-avatar">
          <!-- Menggunakan foto lokal -->
          <img src="@/assets/images/Kalll.jpg" alt="Avatar" />
        </div>
        <div class="profile-info">
          <p><strong>Nama:</strong> Haikal Muhammad Kurniawan</p>
          <p><strong>Kelas:</strong> TI22M</p>
          <p><strong>Mata Kuliah:</strong> Pemrograman Aplikasi Berbasis Web</p>
          <p><strong>Tahun Ajaran:</strong> 2022</p>
          <!-- Konten profil lainnya -->
        </div>
      </div>
    </div>
  </div>
</template>

  
  <script>
  export default {
    name: 'ProfilePage',
  };
  </script>
  
  <style scoped>
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Arial, sans-serif; /* Mengatur font default */
  }
  
  .profile-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Mengambil tinggi penuh dari viewport */
    width: 100vw; /* Mengambil lebar penuh dari viewport */
    background-color: #e9ecef; /* Warna latar belakang */
  }
  
  .profile-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    width: 600px; /* Lebar kartu */
    overflow: hidden;
    transition: transform 0.2s;
  }
  
  .profile-card:hover {
    transform: translateY(-5px); /* Efek hover */
  }
  
  .profile-header {
    background-color: #6c63ff;
    color: white;
    padding: 20px;
    text-align: center;
  }
  
  .profile-content {
    display: flex;
    padding: 20px;
  }
  
  .profile-avatar {
    flex: 1;
    text-align: center;
  }
  
  .profile-avatar img {
    border-radius: 50%;
    width: 120px; /* Ukuran avatar */
    height: 120px;
    object-fit: cover;
  }
  
  .profile-info {
    flex: 2;
    padding-left: 20px;
  }
  
  .profile-info p {
    margin: 10px 0;
    font-size: 18px; /* Ukuran font */
    color: #333;
  }
  
  .profile-footer {
    padding: 20px;
    text-align: center;
    border-top: 1px solid #ddd;
  }
  
  .btn-edit {
    background-color: #6c63ff;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .btn-edit:hover {
    background-color: #5a52e0; /* Warna saat hover */
  }
  </style>
