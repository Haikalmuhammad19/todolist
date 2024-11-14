<template>
    <div>
      <h2>Motivasi Harian</h2>
      <p>{{ randomQuote }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        quotes: [
          "Setiap langkah kecil mendekatkan Anda pada tujuan besar.",
          "Jangan menyerah. Keajaiban terjadi pada mereka yang tidak menyerah.",
          "Tugas yang sulit adalah peluang besar untuk tumbuh.",
        ],
      };
    },
    computed: {
      randomQuote() {
        return this.quotes[Math.floor(Math.random() * this.quotes.length)];
      },
    },
  };
  </script>
  