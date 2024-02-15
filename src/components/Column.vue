<template>
  <section
    class="draggable-section bg-white rounded-xl p-4 overflow-x-auto"
    :data-column-index="$vnode.key"
    @drop="drop"
    @dragover="allowDrop"
  >
    <header class="mb-4">
      <h4 class="font-semibold text-xs text-gray-600">{{ content[0] }}</h4>
    </header>

    <div class="flex flex-col gap-2 my-2">
      <Card
        v-for="(card, index) in content[1]"
        :key="index"
        :column-key="$vnode.key"
        :content="card"
      />
    </div>
  </section>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

import Card from '@/components/Card.vue';

export default {
  components: {
    Card,
  },
  props: {
    content: Array,
  },
  methods: {
    ...mapActions(['getUser']),
    ...mapMutations(['MOVE_CARD']),
    allowDrop(event) {
      event.preventDefault();
    },
    drop(event) {
      event.preventDefault();

      const {
        fromColumnIndex,
        cardIndex,
      } = JSON.parse(event.dataTransfer.getData('text'));
      const columnIndex = event.target.getAttribute('data-column-index');

      if (columnIndex && columnIndex !== fromColumnIndex && +columnIndex !== 0) {
        this.MOVE_CARD([fromColumnIndex, columnIndex, cardIndex]);

        if (+fromColumnIndex === 0) {
          this.getUser();
        }
      }
    },
  },
};
</script>

<style lang="scss">
.draggable-section {
  flex: 0 0 24rem;

  img, a {
    user-select: none;
    -webkit-user-drag: none;
  }
}
</style>
