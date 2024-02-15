<!-- <template>
  <div
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
</template>

<script>

</script> -->