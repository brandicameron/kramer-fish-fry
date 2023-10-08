<template>
  <NuxtLink :to="href" class="button-link">
    <slot></slot>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  href: {
    type: String,
  },
});
</script>

<style scoped>
.button-link {
  background-color: white;
  border: 2px solid;
  padding: 0.5rem 1.5rem;
  border-radius: var(--rounded);
  box-shadow: black 4px 4px 0 0, black 4px 4px 0 1px;
  cursor: pointer;
  font-family: 'Londrina Solid', sans-serif;
  font-size: 2rem;
  line-height: 1;
  overflow: visible;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  transition: 100ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.button-link:focus {
  text-decoration: none;
}

.button-link:hover {
  text-decoration: none;
  box-shadow: black 6px 6px 0 0, black 6px 6px 0 1px;
}

.button-link:active {
  box-shadow: rgba(0, 0, 0, 0.125) 0 3px 5px inset;
  outline: 0;
}

.button-link:not([disabled]):active {
  box-shadow: black 2px 2px 0 0, black 2px 2px 0 1px;
  transform: translate(2px, 2px);
}
</style>
