<template>
  <section class="banner">
    <div class="header">
      <h1 class="title section-x-padding" aria-label="Kramer Fish Fry">
        <img src="../assets/images/kramer-fish-fry.svg" alt="" />
      </h1>
      <div class="water"></div>
    </div>

    <h2
      class="last-held section-x-padding"
      aria-label="Last held September 03, 2023 in Vincennes, Indiana."
    >
      <img src="../assets/images/last-held.svg" alt="" />
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
        <img src="../assets/images/smoke.gif" alt="" class="smoke" />
        <img
          src="../assets/images/gilbert.png"
          alt="Alois Kramer"
          class="gilbert-img"
          width="420"
          height="822"
        />
      </div>
    </section>
  </section>
</template>

<script setup></script>

<style scoped>
.banner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  width: 100%;
  text-align: center;
  position: relative;
  margin-top: -2rem;
}

.water {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50px;
  background-image: url('../assets/images/water.png');
  background-repeat: repeat-x;
  background-position: bottom;
  animation: float 10s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
}

@keyframes float {
  0% {
    transform: translateY(15px) rotate(0);
  }
  25% {
    transform: translateY(0) rotate(0.75deg);
  }
  50% {
    transform: translateY(0) rotate(0);
  }
  75% {
    transform: translateY(0) rotate(-0.75deg);
  }
  100% {
    transform: translateY(15px) rotate(0);
  }
}

.title img {
  max-width: 850px;
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
  margin: 2rem 0 10rem 0;
}

.last-held img {
  max-width: 425px;
}

.banner-content {
  display: flex;
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
}

.gilbert {
  position: relative;
  width: 30vw;
  max-width: 420px;
  margin-top: -5rem;
}

.gilbert img {
  width: 100%;
  height: auto;
}

.gilbert::before {
  position: absolute;
  content: url('../assets/images/gilbert-name.svg');
  width: 25%;
  top: 35%;
  left: 5%;
  transform: rotate(-20deg);
}

.smoke {
  position: absolute;
  top: 20%;
}

@media screen and (max-width: 1024px) {
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
    width: 90vw;
    margin: 0 auto;
  }

  .attendance {
    padding-block: 1rem 1rem;
  }
}

@media screen and (max-width: 600px) {
  .header {
    margin-top: 0;
  }
  .water {
    top: -120px;
    background-position: top;
  }
}
</style>
