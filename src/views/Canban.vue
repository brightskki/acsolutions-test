<template>
  <div class="flex flex-1 gap-2 mx-2 overflow-x-auto mb-2">
    <section
      v-for="(column, columnIndex) in columns" :key="columnIndex"
      :style="{ 'flex': '0 0 24rem' }"
      class="draggable-card bg-white rounded-xl p-4 overflow-x-auto"
      :data-column-index="columnIndex"
      @drop="drop"
      @dragover="allowDrop"
    >
      <header class="mb-4">
        <h4 class="font-semibold text-xs text-gray-600">{{ column[0] }}</h4>
      </header>

      <div class="flex flex-col gap-2 my-2">
        <div
          v-for="(card, cardIndex) in column[1]"
          :key="cardIndex"
          class="transition rounded-md bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer border border-gray-100"
          :data-column-index="columnIndex"
          :data-card-index="cardIndex"
          :draggable="true"
          @dragstart="drag"
        >
          <router-link
            :to="card.id"
            :draggable="false"
          >
            <header class="flex gap-4 items-center">
              <img class="rounded-full w-10 h-10 bg-gray-200" :src="card.thumbnail" alt="Avatar">

              <div>
                <h5 class="font-semibold">{{ card.name }}</h5>

                <div class="flex gap-2 text-xs text-gray-700">
                  <span>📍 {{ card.city }}, {{ card.country }}</span>
                </div>
              </div>
            </header>
            
            <div class="flex flex-col mt-4 text-xs">
              <a class="transition text-blue-800 hover:text-blue-900" :href="`mailto:${card.email}`" @click="($event) => $event.stopPropagation()">{{ card.email }}</a>
              <a class="transition text-blue-800 hover:text-blue-900" :href="`tel:${card.phone}`" @click="($event) => $event.stopPropagation()">{{ card.phone }}</a>
            </div>

            <footer class="flex flex-wrap gap-1 justify-between items-center text-xs mt-4">
              <div class="flex gap-2 items-center ">
                <div>{{ card.gender === 'male' ? '🚹 Male' : '🚺 Female' }}</div>
                <div>{{ card.age }} years old</div>
              </div>
              
              <div>{{ card.registeredDate }}</div>
            </footer>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Canban',
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['columns'])
  },
  methods: {
    ...mapActions(['getUser']),
    ...mapMutations(['MOVE_CARD']),
    drag(event) {
      const cardIndex = event.target.getAttribute('data-card-index');
      const columnIndex = event.target.getAttribute('data-column-index');
      
      event.dataTransfer.setData('text', JSON.stringify({
        fromColumnIndex: columnIndex,
        cardIndex,
      }));
    },
    drop(event) {
      event.preventDefault();

      const {
        fromColumnIndex,
        cardIndex
      } = JSON.parse(event.dataTransfer.getData("text"));
      const columnIndex = event.target.getAttribute('data-column-index');

      if (columnIndex && columnIndex !== fromColumnIndex && +columnIndex !== 0) {
        this.MOVE_CARD([ fromColumnIndex, columnIndex, cardIndex ])

        if (+fromColumnIndex === 0) {
          this.getUser();
        }
      }
    },
    allowDrop(event) {
      event.preventDefault();
    },
  },
};
</script>

<style lang="scss">
.draggable-card {
  img, a {
    user-select: none;
    -webkit-user-drag: none;
  }
}
</style>
