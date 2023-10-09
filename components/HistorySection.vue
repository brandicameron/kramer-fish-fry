<template>
  <section class="history" id="history">
    <header class="header">
      <h2>
        History of the <br />
        Kramer Fish Fry
      </h2>
    </header>

    <div class="content">
      <p>
        On a late summer morning in 1955 three brothers went fishing. Gilbert, Walter and James
        Kramer only caught five fish that day, but that was enough to kick off what is now a 70 year
        tradition — <span class="bold">The Kramer Family Fish Fry</span>.
      </p>

      <figure>
        <img
          src="../assets/images/kramer-bros.jpg"
          alt="Gilbert, Walter and James Kramer at the annual Kramer Fish Fry, 1957."
          width="1000"
          height="483"
        />
        <figcaption>Gilbert, Walter & James Kramer | Annual Fish Fry 1957</figcaption>
      </figure>

      <p>
        Typically held over Labor Day weekend, the families of Gilbert, James and Walter gather in
        the park for games, sport, beer, and of course fish! There are no shortage of fun prizes and
        no child leaves empty-handed.
      </p>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.history {
  position: relative;
  margin-top: -6rem;
  z-index: -1;
}
.header {
  position: relative;
  background-color: var(--secondary);
  padding-block: 2rem;
}

.header::after {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -15px;
  content: '';
  height: 35px;
  width: 35px;
  border-radius: 0.3rem;
  background-color: var(--primary);
  transform: rotate(45deg);
  z-index: -1;
}

.header h2 {
  font-size: 3.5rem;
  line-height: 1;
  font-weight: normal;
  text-shadow: var(--textShadow);
  text-align: center;
  text-transform: uppercase;
}

.content {
  display: grid;
  gap: 2rem;
  max-width: var(--sectionMaxWidth);
  margin-inline: auto;
  margin-block: 4rem;
}

.content img {
  width: 100%;
  height: auto;
  filter: drop-shadow(5px 5px 10px rgba(0 0 0 / 30%));
}

figcaption {
  font-weight: 600;
  border: 2px solid var(--primary);
  padding: 0.75rem 0.25rem 0.25rem 0.25rem;
  text-align: center;
  width: 97%;
  margin-inline: auto;
  margin-top: -1rem;
}
</style>
