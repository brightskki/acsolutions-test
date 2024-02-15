<template>
  <div class="mx-2">
    <router-link
      class="transition flex p-4 bg-white hover:bg-gray-100 rounded-md font-semibold flex-grow"
      to="/"
    >
      ⬅️ Назад
    </router-link>

    <div class="bg-white p-4 mt-2 rounded-md">
      <Profile :data="currentUser" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Profile from '@/components/Profile.vue';

export default {
  components: {
    Profile,
  },
  computed: {
    ...mapGetters(['currentUser']),
  },
};
</script>
