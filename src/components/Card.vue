<template>
  <div
    class="transition rounded-md bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer border border-gray-100"
    :data-column-index="columnKey"
    :data-card-index="$vnode.key"
    :draggable="true"
    @dragstart="drag"
  >
    <router-link
      :to="content.id"
      :draggable="false"
      @mousedown.native="SET_CURRENT_USER(content)"
    >
      <Profile :data="content" />
    </router-link>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

import Profile from '@/components/Profile.vue';

export default {
  components: {
    Profile,
  },
  props: {
    content: Object,
    columnKey: Number,
  },
  methods: {
    ...mapMutations(['SET_CURRENT_USER']),
    drag(event) {
      const cardIndex = event.target.getAttribute('data-card-index');
      const columnIndex = event.target.getAttribute('data-column-index');

      event.dataTransfer.setData('text', JSON.stringify({
        fromColumnIndex: columnIndex,
        cardIndex,
      }));
    },
  },
};
</script>
