<template>
  <h1>History</h1>

  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>

  <section>
    <div>Div One</div>
    <div>Div Two</div>
    <div>Div Three</div>
    <a href="/">Link</a>
  </section>

  <div>I'm a div after the section</div>
  <div>I'm a div after the section</div>
</template>

<script setup></script>

<style scoped>
li:first-child {
  color: red;
}

section {
  margin-top: 3rem;
}

/* I only select the first div after the section */
section + div {
  background-color: lightblue;
}

/* I select all divs after the section */
section ~ div {
  border: 2px solid blue;
}
</style>
