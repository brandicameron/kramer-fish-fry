<template>
  <section class="photo-gallery section-x-padding">
    <nav class="sidebar">
      <button class="button">
        <span class="month">Sept 03</span> <span class="year">2023</span>
      </button>
      <button class="button">
        <span class="month">Sept 02</span> <span class="year">2007</span>
      </button>
    </nav>

    <ul class="photo-gallery-thumbs">
      <li v-for="image in images" :key="image">
        <button class="image-button">
          <img
            :src="`_nuxt${image}`"
            alt="Kramer Fish Fry 2023"
            height="3000"
            width="4000"
            class="photo"
          />
        </button>
      </li>
      <li></li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
const images = Object.keys(import.meta.glob('/assets/images/2023/*.jpg')).map((key) => key);

console.log(images);
</script>

<style scoped>
.photo-gallery {
  display: grid;
  grid-template-columns: minmax(150px, 250px) 1fr;
  gap: 1rem;
}

.sidebar {
  padding: 2rem 1rem;
  border: 2px solid black;
  border-radius: var(--borderRadius);
}

.button {
  display: flex;
  flex-direction: column;
  line-height: 0.85;
  text-transform: uppercase;
  text-align: center;
  font-family: var(--decorativeFont);
  margin: 0 auto 2rem auto;
}

.button {
  border-bottom: 1px solid;
  padding-bottom: 2rem;
}

.month {
  font-size: 3.5rem;
}

.year {
  font-size: 5.25rem;
}
.photo-gallery-thumbs {
  column-count: 4;
  /* max-width: var(sectionMaxWidthXl);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem; */
}

.photo {
  /* width: 250px;
  height: 250px;
  aspect-ratio: square;
  object-fit: cover; */
  width: 100%;
  max-width: 350px;
  height: auto;
  border-radius: 0.2rem;
}

.image-button:focus-visible {
  filter: drop-shadow(5px 5px 10px rgba(0 0 0 / 30%));
  border: 4px solid var(--primary);
  border-radius: var(--rounded);
}
</style>
