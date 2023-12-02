<template>
  <section class="banner-section">
    <div class="header">
      <h1 class="title section-x-padding">
        <span class="sr-only">Kramer Fish Fry</span>
        <img src="/images/kramer-fish-fry.svg" alt="" />
      </h1>
      <div class="water"></div>
    </div>

    <h2 class="last-held section-x-padding">
      <span class="sr-only">Last held September 03, 2023 in Vincennes, Indiana.</span>
      <img src="/images/last-held.svg" alt="" />
    </h2>

    <section class="banner-content section-x-padding">
      <div class="banner-content-left">
        <h3 class="attendance">In Attendance</h3>

        <p class="attendees">
          Gilbert Kramer • Connie Kramer • Kenny Kramer • January • Brenda &amp; Chris Cameron • Pam
          &amp; Dale Langferman • Ben &amp; Mary Kramer • Eric &amp; Brandi Cameron • Cate &amp; Joe
          Szafranski • Hannah Cameron • Riley Beauregard • Zach Szafranski • Cathy Langferman • Lee
          Langferman • Charlotte Langferman • Amy &amp; Heath Fisher • Reece Fisher • Jasmine Fisher
          • Julie &amp; Matt Dobbs • Drew Dobbs • Andrea &amp; David Mair • Evan Mair • Ella Mair •
          Melanie Dupuy • Derek &amp; Anna Kramer • Ben Kramer
        </p>

        <ButtonLink class="button" href="/photos">View Pics</ButtonLink>
      </div>

      <div class="gilbert">
        <img src="/images/smoke.gif" alt="" class="smoke" />
        <img
          src="/images/gilbert-2.png"
          alt="Alois Kramer"
          class="gilbert-img"
          width="390"
          height="827"
        />
      </div>
    </section>
  </section>
</template>

<script setup></script>

<style scoped>
.banner-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20rem;
}

.header {
  width: 100%;
  text-align: center;
  position: relative;
}

.water {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 30px;
  background-image: url('/images/water.png');
  background-repeat: repeat-x;
  background-position: bottom;
  animation: float 10s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
}

@keyframes float {
  0% {
    transform: translateY(15px) rotate(0);
  }
  33% {
    transform: translateY(0) rotate(0.75deg);
  }

  66% {
    transform: translateY(0) rotate(-0.75deg);
  }
  100% {
    transform: translateY(15px) rotate(0);
  }
}

.title img {
  max-width: 800px;
}

.kramer {
  font-size: clamp(6.875rem, 18vw, 18.375rem);
}
.fish-fry {
  font-size: clamp(6rem, 15.5vw, 15.875rem);
}

.last-held {
  max-width: 425px;
  width: 100%;
  margin: 1.5rem 0 10rem 0;
}

.last-held img {
  max-width: 425px;
}

.banner-content {
  position: relative;
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.banner-content > * {
  margin: 0 1rem;
}

.banner-content-left {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.attendance {
  font-family: 'Public Sans', sans-serif;
  font-weight: bold;
  text-transform: none;
  font-size: 1.875rem;
}

.attendees {
  font-family: 'Public Sans', sans-serif;
  line-height: 2.25;
  max-width: 550px;
  margin: 1rem 0 3rem 0;
  padding-right: 1rem;
}

.gilbert {
  position: absolute;
  right: -9vw;
  width: 30vw;
  max-width: 400px;
  top: -15rem;
}

.gilbert img {
  width: 100%;
  height: auto;
}

.gilbert::before {
  position: absolute;
  content: url('/images/gilbert-name.svg');
  width: 25%;
  top: 45%;
  right: 5%;
  transform: rotate(-20deg);
}

.smoke {
  position: absolute;
  top: 20%;
  filter: brightness(1.25);
}

@media screen and (max-width: 1150px) {
  .banner-section {
    padding-bottom: 18rem;
  }
  .last-held {
    max-width: 425px;
    width: 100%;
    margin: 1rem 0 2rem 0;
  }
  .banner-content {
    display: flex;
    flex-direction: column-reverse;
  }

  .banner-content > * {
    margin: 1rem 0;
  }

  .gilbert {
    position: relative;
    width: 60vw;
    top: 0;
    right: unset;
    margin: 0 auto;
  }

  .attendance {
    padding-right: unset;
  }
}

@media screen and (max-width: 600px) {
  .banner-section {
    padding-bottom: 12rem;
  }

  .header {
    margin-top: 0;
  }
  .water {
    top: 100px;
    background-position: top;
    animation: float 6s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
  }

  .gilbert::before {
    position: absolute;
    content: url('/images/gilbert-name.svg');
    width: 40%;
    top: 40%;
    right: -10%;
    transform: rotate(-20deg);
  }
}
</style>
