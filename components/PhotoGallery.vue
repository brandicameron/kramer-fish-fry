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

      <TransitionGroup name="fade" tag="ul" class="photo-gallery-list">
        <li v-for="(image, index) in images" :key="index">
          <button class="image-button">
            <NuxtImg
              class="photo"
              :src="`/images/${selectedYear}/${image}`"
              :alt="`Kramer Fish Fry ${selectedYear}`"
              quality="80"
              width="350"
              height="263"
              fit="outside"
              loading="lazy"
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

.heading {
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1;
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
  border: 1.5px solid #aaaaaa;
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
  white-space: nowrap;
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

@media screen and (max-width: 600px) {
  .heading {
    margin-bottom: 0;
  }
  .photo-gallery {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .sidebar {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border: none;
    min-height: 0;
    height: 90px;
    border-top: 1px solid #aaaaaa;
    border-bottom: 1px solid #aaaaaa;
    margin: 1rem 0 1.5rem 0;
  }

  .nav-button {
    margin: 0 auto;
    transform: scale(0.5);
  }

  .photo-gallery-list {
    column-count: 2;
  }
}
</style>
