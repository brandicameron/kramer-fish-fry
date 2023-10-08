<template>
  <section class="photo-gallery section-x-padding">
    <h1 class="date"><span class="month">Sept 03</span> <span class="year">2023</span></h1>
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
  max-width: var(--sectionMaxWidthXl);
  margin-inline: auto;
}

.date {
  display: flex;
  flex-direction: column;
  line-height: 0.85;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 3rem;
}

.month {
  font-size: 3.5rem;
}

.year {
  font-size: 5.25rem;
}
.photo-gallery-thumbs {
  column-count: 4;
  /* max-width: var(sectionMaxWidthXl); */
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem; */
}

.photo {
  /* width: 150px;
  height: 150px;
  aspect-ratio: square;
  object-fit: cover; */
  width: 100%;
  max-width: 350px;
  height: auto;
  border-radius: 0.25rem;
}

.image-button:focus-visible {
  filter: drop-shadow(5px 5px 10px rgba(0 0 0 / 30%));
  border: 4px solid var(--primary);
  border-radius: 0.25rem;
}
</style>
