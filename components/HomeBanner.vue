<template>
  <section class="banner">
    <div class="header">
      <h1 class="title">
        <span class="kramer">Kramer</span>
        <span class="fish-fry">Fish Fry</span>
      </h1>
      <div class="water"></div>
    </div>

    <h2 class="most-recent">
      <span class="last-held">Last held</span>
      <span class="date">09.03.23</span>
      <span class="city">Vincennes</span>
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
}

.water {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50px;
  background-image: url('../assets/images/water.png');
  background-repeat: repeat-x;
  background-position: bottom;
  animation: float 10s ease-in-out infinite;
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

.title {
  display: flex;
  flex-direction: column;
  line-height: 0.8;
}

.kramer {
  font-size: clamp(6.875rem, 18vw, 18.375rem);
}
.fish-fry {
  font-size: clamp(6rem, 15.5vw, 15.875rem);
}

.most-recent {
  display: flex;
  flex-direction: column;
  line-height: 0.9;
  text-align: center;
  margin: 9rem 0;
}

.last-held {
  font-family: 'Public Sans', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 3px;
  border: 2px solid;
  padding: 0.25rem 2rem;
  border-radius: 0.25rem;
  margin: 0 auto 0.5rem auto;
  width: fit-content;
}

.date {
  /* font-size: clamp(6rem, 8vw, 8rem); */
  font-size: clamp(6rem, 8vw, 7.5rem);
}
.city {
  position: relative;
  /* font-size: clamp(5rem, 6vw, 8rem); */
  font-size: clamp(5rem, 6vw, 6rem);
  margin-top: 1rem;
}

.city::before {
  position: absolute;
  top: -0.75rem;
  left: 0;
  content: '';
  width: 100%;
  height: 5px;
  background-color: black;
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
  .most-recent {
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
  .water {
    top: -120px;
    background-position: top;
  }
}
</style>
