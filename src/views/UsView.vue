<template>
  <section class="hero-us"></section>

  <section>
    <h1 class="text-gradient m-auto">Connected Partners</h1>
    <PartnerComponent></PartnerComponent>
  </section>

  <hr />

  <section id="testimonial-section">
    <TestimonialComponent></TestimonialComponent>
  </section>

  <hr />

  <section>
    <TimelineComponent></TimelineComponent>
  </section>

  <hr />

  <section>
    <p>more sections</p>
    <p>more sections</p>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </section>
</template>

<script setup>
import TestimonialComponent from "@/components/TestimonialComponent.vue";
import TimelineComponent from "@/components/TimelineComponent.vue";
import PartnerComponent from "@/components/PartnerComponent.vue";
// import BoxComponent from "@/components/UI/BoxComponent.vue";
</script>

<style scoped>
.hero-us {
  background-image: url("@/assets/img/hello.png");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 1000px;
}

#carousel {
  max-width: 350px;
}

@media (max-width: 1000px) {
  #carousel {
    width: 100%;
  }
}

@media (max-width: 769px) {
  .hero-us {
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: contain;
  }
}
</style>
