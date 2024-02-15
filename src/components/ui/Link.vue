<template>
  <a
    class="transition text-blue-800 hover:text-blue-900"
    :href="href"
    title="Перейти"
    @click="($event) => $event.stopPropagation()"
  >
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    href: String,
  },
};
</script>
