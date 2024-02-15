<template>
  <div class="flex flex-1 gap-2 mx-2 overflow-x-auto mb-2">
    <Column
      v-for="(column, index) in columns"
      :key="index"
      :content="column"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Column from '@/components/Column.vue';

export default {
  components: {
    Column,
  },
  computed: {
    ...mapGetters(['columns']),
  },
};
</script>
