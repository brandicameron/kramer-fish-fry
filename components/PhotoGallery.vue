<template>
  <main class="photo-gallery-page">
    <h1 class="heading">Photo Gallery</h1>
    <div class="photo-gallery section-x-padding">
      <nav class="sidebar">
        <button class="nav-button" @click="updateYear(2023)">
          <span class="month">Sept 03</span> <span class="year">2023</span>
        </button>
        <button class="nav-button" @click="updateYear(2006)">
          <span class="month">Sept 04</span> <span class="year">2006</span>
        </button>
      </nav>

      <!-- :src="`_nuxt${image}`" -->
      <!-- <img src="/images/2023/IMG_0882.jpg" alt="" /> -->
      <TransitionGroup name="fade" tag="ul" class="photo-gallery-list">
        <li v-for="(image, index) in images" :key="index">
          <button class="image-button">
            <img
              :src="`/images/${selectedYear}/${image}`"
              alt="Kramer Fish Fry 2023"
              height="3000"
              width="4000"
              class="photo"
            />
          </button>
        </li>
      </TransitionGroup>
    </div>
  </main>
</template>

<script lang="ts" setup>
const selectedYear = ref(2023);
const updateYear = (year: number) => (selectedYear.value = year);

const imageFolder = computed(() => {
  switch (selectedYear.value) {
    case 2023:
      return import.meta.glob('../assets/images/2023/*.jpg');
    case 2006:
      return import.meta.glob('../assets/images/2006/*.jpg');
    default:
      return import.meta.glob('../assets/images/2023/*.jpg');
  }
});

const images = computed(() => Object.keys(imageFolder.value).map((key) => key.split('/')[4]));

// console.log(images.value);
// const images = computed(() => Object.keys(imageFolder.value).map((key) => key));
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 250ms;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  /* position: absolute; */
  display: none;
}

.photo-gallery-page {
  margin-bottom: 5rem;
}

.photo-gallery-page h1 {
  text-align: center;
  margin-bottom: 2rem;
}
.photo-gallery {
  display: grid;
  grid-template-columns: minmax(150px, 200px) 1fr;
  gap: 1rem;
  justify-items: center;
  margin: 0 auto;
  max-width: var(--sectionMaxWidthXl);
}

.sidebar {
  padding: 2rem 0.5rem;
  border: 1.5px solid black;
  border-radius: var(--rounded);
  min-height: calc(100vh - 300px);
}

.nav-button {
  display: flex;
  flex-direction: column;
  line-height: 0.85;
  text-transform: uppercase;
  text-align: center;
  font-family: var(--decorativeFont);
  margin: 0 auto 2rem auto;
  transform: scale(0.75);
}

.month {
  font-size: 3.5rem;
}

.year {
  font-size: 5.25rem;
}
.photo-gallery-list {
  column-count: 4;
}

.photo-gallery-list li {
  padding-bottom: 1rem;
}

.photo {
  width: 100%;
  max-width: 350px;
  height: auto;
  border-radius: var(--rounded);
}

.image-button:focus-visible .photo {
  filter: drop-shadow(5px 5px 10px rgba(0 0 0 / 50%));
  border-radius: var(--rounded);
}
</style>
