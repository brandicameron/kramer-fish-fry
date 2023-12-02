<template>
  <section class="history-section" id="history">
    <header class="header">
      <h2>History</h2>
    </header>

    <div class="content section-x-padding">
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
        <figcaption>
          Gilbert, Walter & James Kramer
          <span class="break"><span class="hide">|</span> Annual Fish Fry 1957</span>
        </figcaption>
      </figure>

      <p>
        Typically held over Labor Day weekend, the families of Gilbert, James and Walter gather in
        the park for games, sport, beer, and a feast of fried chicken &amp; fish. Fun prizes abound
        and no child leaves empty-handed.
      </p>
    </div>

    <div class="wave">
      <svg
        data-name="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.history-section {
  position: relative;
  z-index: -1;
  background-color: var(--secondary);
  padding-bottom: 10rem;
  scroll-margin-top: 8rem;
}
.header {
  position: absolute;
  display: flex;
  left: 50%;
  transform: translateX(-50%);
  height: 135px;
  margin-top: -8.4rem;
}

.header h2 {
  position: relative;
  font-size: clamp(6rem, 6.5vw, 8rem);
  color: var(--secondary);
  line-height: 1;
  text-align: center;
  text-transform: uppercase;
  height: fit-content;
  margin-top: auto;
  margin-bottom: -1.25rem;
}

.content {
  display: grid;
  gap: 2rem;
  max-width: var(--sectionMaxWidth);
  margin-inline: auto;
  padding-top: 5rem;
}

.content img {
  width: 100%;
  height: auto;
  border: 1.25rem solid var(--white);
  border-bottom: 2.5rem solid var(--white);
  border-radius: var(--rounded);
  filter: drop-shadow(5px 5px 5px rgba(0 0 0 / 25%));
}

.content figure {
  position: relative;
}

figcaption {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  font-weight: 600;
  text-align: center;
  bottom: 1.15rem;
  line-height: 1;
}

.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.wave svg {
  position: relative;
  display: block;
  width: calc(144% + 1.3px);
  height: 84px;
  transform: scaleY(-1);
}

.wave .shape-fill {
  fill: var(--white);
}

@media screen and (max-width: 600px) {
  .history-section {
    padding-bottom: 8rem;
  }
  .content {
    padding-top: 3.5rem;
  }
  .content img {
    border: 1rem solid var(--white);
    border-bottom: 2.5rem solid var(--white);
  }

  figcaption {
    bottom: 0.65rem;
  }

  .break {
    display: block;
  }
}
</style>
