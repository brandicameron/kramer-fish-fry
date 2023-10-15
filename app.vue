<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'Kramer Fish Fry',
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    {
      name: 'description',
      content:
        'Learn all about the history of the Kramer Fish Fry! Be sure to check out the photo gallery.',
    },
    {
      name: 'msapplication-TileColor',
      content: '#2d89ef',
    },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      type: 'image/png',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#0000e7' },
  ],
});

useServerSeoMeta({
  title: 'Kramer Fish Fry',
  ogTitle: 'Kramer Fish Fry',
  description:
    'Learn all about the history of the Kramer Fish Fry! Be sure to check out the photo gallery.',
  ogDescription:
    'Learn all about the history of the Kramer Fish Fry! Be sure to check out the photo gallery.',
  ogImage: '/kramer-fish-fry-share.jpg',
  twitterCard: 'summary_large_image',
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 150ms;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
