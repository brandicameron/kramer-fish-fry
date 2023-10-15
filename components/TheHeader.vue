<template>
  <header class="header">
    <NuxtLink to="/" class="logo">
      <img
        class="logo-img"
        src="/images/fish.png"
        alt="Kramer Fish Fry Home"
        width="212"
        height="121"
      />
    </NuxtLink>

    <nav class="nav">
      <NuxtLink class="nav-link home" to="/">Home</NuxtLink>
      <NuxtLink class="nav-link" to="#history">History</NuxtLink>
      <NuxtLink class="nav-link" to="photos">Photos</NuxtLink>
      <NuxtLink class="nav-link" to="family-tree">Family Tree</NuxtLink>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped>
.header {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  width: 100%;
}
.nav {
  display: flex;
  align-self: flex-start;
}

.nav-link {
  font-size: 1.25rem;
  font-weight: bold;
  padding-inline: 0.75rem;
}

.nav-link::after {
  display: block;
  content: '';
  position: relative;
  width: 100%;
  height: 3.5px;
  margin-top: -1px;
  border-radius: 2px;
  background: black;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 150ms linear;
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.home {
  display: none;
}

/* .router-link-exact-active {
  color: green;
} */

@media screen and (max-width: 600px) {
  .nav {
    display: none;
  }

  .logo {
    width: 150px;
  }

  .logo-img {
    width: 100%;
    height: auto;
  }
}
</style>
