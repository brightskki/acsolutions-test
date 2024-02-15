<template>
  <div id="app" class="h-screen flex flex-col sm:px-32">
    <header class="p-4 bg-white rounded-md m-2">
      <h1 class="text-xl font-semibold">Тестовое задание для ACSolutions</h1>
      <p>Автор: Удальцов Кирилл</p>
    </header>

    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {};
  },
  async mounted() {
    await this.getUser();
  },
  methods: {
    ...mapActions(['getUser']),
  },
};
</script>

<style>
  body {
    background: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
</style>
