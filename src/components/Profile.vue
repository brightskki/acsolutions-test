<template>
  <div>
    <template v-if="Object.keys(data).length">
      <header class="flex gap-4 items-center">
        <img class="rounded-full w-10 h-10 bg-gray-200" :src="data.thumbnail" alt="Avatar">

        <div>
          <h5 class="font-semibold">{{ data.name }}</h5>

          <div class="flex gap-2 text-xs text-gray-700">
            <span>📍 {{ data.city }}, {{ data.country }}</span>
          </div>
        </div>
      </header>

      <div class="flex flex-col mt-4 text-xs">
        <Link :href="`mailto:${data.email}`">{{ data.email }}</Link>
        <Link :href="`tel:${data.phone}`">{{ data.phone }}</Link>
      </div>

      <footer class="flex flex-wrap gap-1 justify-between items-center text-xs mt-4">
        <div class="flex gap-2 items-center ">
          <div>{{ data.gender === 'male' ? '🚹 Male' : '🚺 Female' }}</div>
          <div>{{ data.age }} years old</div>
        </div>

        <div>{{ data.registeredDate }}</div>
      </footer>
    </template>

    <div v-else class="text-gray-600">
      В API не реализован поиск по идентификатору, но предположим что он будет.
    </div>
  </div>
</template>

<script>
import Link from '@/components/ui/Link.vue';

export default {
  components: {
    Link,
  },
  props: {
    data: Object,
  },
};
</script>
