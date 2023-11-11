<template>
  <div class="photo-gallery-page">
    <h1 class="heading">Photo Gallery</h1>

    <section class="photo-gallery section-x-padding">
      <nav class="sidebar">
        <button
          class="nav-button"
          @click="updateYear(2023)"
          :class="{ active: selectedYear === 2023 }"
        >
          <span class="month">Sept 03</span> <span class="year">2023</span>
        </button>
        <button
          class="nav-button"
          @click="updateYear(2006)"
          :class="{ active: selectedYear === 2006 }"
        >
          <span class="month">Sept 04</span> <span class="year">2006</span>
        </button>
      </nav>

      <TransitionGroup name="fade" tag="div">
        <ul class="photo-gallery-list" key="photo-gallery-list">
          <li v-for="(image, index) in galleryImages" :key="image.id">
            <button @click="handleOpenModal(index)" class="image-button">
              <NuxtImg
                class="photo"
                :src="image.src"
                :alt="image.alt"
                quality="80"
                width="350"
                height="263"
                fit="outside"
                sizes="175px sm:350px"
              />
            </button>
          </li>
        </ul>
      </TransitionGroup>
    </section>

    <section class="image-modal" v-if="showImageModal">
      <NuxtImg
        ref="modalTarget"
        class="image-modal-image"
        :src="selectedImg?.src"
        :alt="selectedImg?.alt"
        quality="80"
      />
      <button @click="handleCloseModal" class="close-modal-button">
        <span class="sr-only">Close image modal</span>
      </button>

      <nav class="pagination-btns" aria-label="Image Pagination">
        <button @click="handlePreviousImage" class="prev-btn">
          <span class="sr-only">Next Image</span>
          <img
            src="../assets/images/icons/previous.svg"
            alt=""
            role="presentation"
            width="50"
            height="50"
          />
        </button>
        <button @click="handleNextImage" class="next-btn">
          <span class="sr-only">Next Image</span>
          <img
            src="../assets/images/icons/next.svg"
            alt=""
            role="presentation"
            width="50"
            height="50"
          />
        </button>
      </nav>
    </section>
  </div>
</template>

<script lang="ts" setup>
// import { onClickOutside } from '@vueuse/core';
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

const galleryImages = computed(() => {
  return images.value.map((image, index) => {
    return {
      id: `${selectedYear.value}-${index + 1}`,
      src: `/images/${selectedYear.value}/${image}`,
      alt: `Kramer Fish Fry ${selectedYear.value} Image ${index + 1}`,
      index: index,
    };
  });
});

const imageIndex = ref(0);

const selectedImg = computed(() =>
  galleryImages.value.find((item) => item.index === imageIndex.value)
);

const showImageModal = ref(false);
const modalTarget = ref(null);

const handleOpenModal = (selectedImgIndex: number) => {
  imageIndex.value = selectedImgIndex;
  showImageModal.value = true;
};

const handleNextImage = () => {
  if (imageIndex.value + 1 < galleryImages.value.length) {
    imageIndex.value = imageIndex.value + 1;
  } else {
    imageIndex.value = 0;
  }
};

const handlePreviousImage = () => {
  if (imageIndex.value - 1 >= 0) {
    imageIndex.value = imageIndex.value - 1;
  } else {
    imageIndex.value = galleryImages.value.length - 1;
  }
};

const handleCloseModal = () => (showImageModal.value = false);

// onClickOutside(modalTarget, () => (showImageModal.value = false));
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
  grid-template-columns: minmax(100px, 200px) 1fr;
  gap: 1rem;
  justify-items: center;
  margin: 0 auto;
  max-width: var(--sectionMaxWidthXl);
}

.sidebar {
  padding: 3rem 2rem;
  border-right: 1.5px dashed #94cff4;
  border-radius: var(--rounded);
  min-height: calc(100vh - 300px);
}

.nav-button {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 0.85;
  text-transform: uppercase;
  text-align: center;
  font-family: var(--decorativeFont);
  margin: 0 auto 4rem auto;
}

.active::before {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  content: '';
  background-color: #c8e3f2;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  width: 135px;
  z-index: -1;
}
.month {
  font-size: 2rem;
  white-space: nowrap;
}

.year {
  font-size: 3.25rem;
}
.photo-gallery-list {
  -webkit-column-count: 4;
  -moz-column-count: 4;
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

.image-modal {
  position: fixed;
  display: grid;
  place-content: center;
  inset: 0;
  width: 100%;
  height: 100dvh;
  background-color: rgba(0 0 0 / 85%);
  z-index: 10;
}

.image-modal-image {
  height: 100%;
  max-height: 90vh;
  max-width: 80vw;
  width: 100%;
  object-fit: contain;
  border-radius: var(--rounded);
  filter: drop-shadow(5px 5px 25px rgba(0 0 0 / 50%));
  opacity: 0;
  transform: scale(0.9);
  animation: grow 150ms linear forwards;
  z-index: 10;
}

@keyframes grow {
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.close-modal-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 50px;
  height: 50px;
}

.close-modal-button::before,
.close-modal-button::after {
  position: absolute;
  display: block;
  inset: 0;
  margin: auto;
  content: '';
  width: 100%;
  height: 5px;
  background-color: white;
  transform: rotate(-45deg);
  transform-origin: center;
  border-radius: 2rem;
}
.close-modal-button::after {
  transform: rotate(45deg);
}

.pagination-btns {
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 0 1rem;
}

.next-btn,
.prev-btn {
  width: 55px;
  height: 55px;
  border: 5px solid white;
  border-radius: 50%;
}

.pagination-btns img {
  width: 100%;
  height: 100%;
  padding: 0.75rem;
  object-fit: contain;
}

@media screen and (max-width: 1200px) {
  .photo-gallery-list {
    column-count: 3;
  }
}

@media screen and (max-width: 800px) {
  .photo-gallery-list {
    column-count: 2;
  }

  .image-modal-image {
    max-height: 90vh;
    max-width: 90vw;
  }

  .pagination-btns {
    position: absolute;
    justify-content: space-around;
    width: 100%;
    padding: 1rem;
    bottom: 0;
    top: unset;
    transform: translate(-50%, 0);
  }
}

@media screen and (max-width: 600px) {
  .heading {
    margin: 0 0 0.75rem 0;
  }
  .photo-gallery {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .sidebar {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    min-height: 0;
    padding: 0.75rem 0;
    border-top: 1px solid #aaaaaa;
    border-bottom: 1px solid #aaaaaa;
    margin: 0 auto 1.5rem auto;
  }

  .nav-button {
    margin: 0 auto;
    transform: scale(0.6);
  }
}
</style>
