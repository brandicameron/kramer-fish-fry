<template>
  <section class="quote-section section-x-padding">
    <blockquote class="quote">
      <p>
        Give a man a fish <br />
        and he will eat for a day.
      </p>
      <p>
        Teach him to fish
        <span class="highlight">and he will sit in a boat and drink beer all day.</span>
      </p>
    </blockquote>
  </section>
</template>

<script setup></script>

<style scoped>
.quote-section {
  position: relative;
  display: grid;
  place-content: center;
  height: 400px;
  background-color: var(--white);
  outline: 1px solid var(--white);
}

.quote {
  text-align: center;
  font-weight: 900;
  max-width: 450px;
  margin-top: -2rem;
}

.quote p {
  font-size: 1.75rem;
  line-height: 1.25;
  margin: 1.75rem 0;
}

.highlight {
  color: var(--primary);
}
</style>
