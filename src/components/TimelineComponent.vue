<template>
  <h1 class="text-white text-center">Ontwikkeling</h1>

  <div id="stripe"></div>
  <div id="placeholder-stripe"></div>

  <section class="flex flex-col items-center justify-center">
    <div class="point"></div>

    <div class="cloud left">
      <div class="content">
        <h3>2004</h3>
        <p>
          Moederbedrijf opgericht met een heldere visie voor ogen: quality
          lighting en design samenbrengen. Onze passie, toewijding en
          klantgerichtheid zijn de grond geweest voor onze groei en inmiddels is
          onze naam op het gebied van verlichting gevestigd. Met trots kijken we
          terug op bijna twee decennia succes.
        </p>
      </div>
    </div>

    <div class="point"></div>

    <Transition name="textcloud">
      <div v-if="y5" class="cloud right">
        <div class="content">
          <h3>2005</h3>
          <p>
            Begonnen met de bouw van ons eigen warenhuis. Door onze groei is er
            behoefte aan een eigen, grotere opslagruimte.
          </p>
        </div>
      </div>
    </Transition>

    <div class="point"></div>

    <Transition name="textcloud">
      <div v-if="y6" class="cloud left">
        <div class="content">
          <h3>2006</h3>
          <p>
            Het warenhuis is af en wordt dan ook meteen in gebruik genomen.
            Prettig om alles centraal en in eigen handen te hebben.
          </p>
        </div>
      </div>
    </Transition>

    <div class="point"></div>

    <Transition name="textcloud">
      <div v-if="y19" class="cloud right">
        <div class="content">
          <h3>2019</h3>
          <p>
            Inmiddels lopen de zaken zo goed dat we op zoek zijn naar een stuk
            grond ten behoeve van meer opslagruimte. Een nieuw, groter magazijn.
            Helaas hebben we wat vertraging opgelopen door corona en de bouw
            moeten stilleggen.
          </p>
        </div>
      </div>
    </Transition>

    <div class="point"></div>

    <Transition name="textcloud">
      <div v-if="y21" class="cloud left">
        <div class="content">
          <h3>2021</h3>
          <p>
            Oprichting Leduxa. We merken op dat luxe design lampen erg in trek
            zijn, maar vaak een klein fortuin kosten. Hier proberen wij op in te
            spelen met ons eigen merk van goedkopere luxe led lampen: Leduxa
            werd geboren.
          </p>
        </div>
      </div>
    </Transition>

    <div class="point"></div>

    <Transition name="textcloud">
      <div v-if="y23" class="cloud right">
        <div class="content">
          <h3>2023</h3>
          <p>
            Afronding bouw nieuw pand. In de tweede helft van het jaar in kunnen
            trekken.
          </p>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

let y5 = ref(false);
let y6 = ref(false);
let y19 = ref(false);
let y21 = ref(false);
let y23 = ref(false);

function timelineScroll() {
  const position = window.scrollY;

  console.log(position);
  // 2250 = timeline in view

  const stripe = document.getElementById("stripe");
  if (position >= 2000 && position <= 5000) {
    stripe.style.height = position - 2250 + "px";
  }

  // if(position>=1600 && position<=1900) y4.value = true;
  if (position >= 2640 && position <= 2820) y5.value = true;
  if (position >= 2821 && position <= 3000) y6.value = true;
  if (position >= 3001 && position <= 3235) y19.value = true;
  if (position >= 3222 && position <= 3475) y21.value = true;
  if (position >= 3476) y23.value = true;

  // stop timeline execution on completion
  if(y23.value) {document.removeEventListener("scroll", timelineScroll)}
}

onMounted(() => {
  document.addEventListener("scroll", timelineScroll);
});

onUnmounted(() => {
  document.removeEventListener("scroll", timelineScroll);
});
</script>

<style scoped>
#stripe {
  position: absolute;
  left: 50%;
  z-index: 4;
  max-height: 1230px;
  border-left: 0;
  border-top: 0;
  border-bottom: 0;
  border-width: 2px;
  border-style: solid;
  border-image-slice: 10;
  border-image-source: linear-gradient(#cd77a3, #a483dc, #77b0c1);
}
#placeholder-stripe {
  position: absolute;
  height: 1000px;
  left: 50%;
  z-index: 1;
  min-height: 4rem;
  border-width: 2px;
  border-style: dashed;
  border-style: solid;
  border-color: #808080;
}

.cloud {
  width: 50%;
}

.content {
  width: 45%;
  color: #4f46e5;
  background-color: white;
  position: relative;
  padding: 20px 30px;
  /* margin-block: 4rem; */
  border-radius: 6px;
}

/* time points */
.point {
  content: "";
  position: relative;
  width: 25px;
  height: 25px;
  top: 75px;
  z-index: 3;
  margin-left: 5px;
  border-radius: 50%;
  background-color: white;
  border: 4px solid #4f46e5;
}

.left {
  text-align: start;
  margin-right: 10px;
}
.right {
  display: flex;
  justify-content: flex-end;
  margin-left: 20px;
  /* text-align: end; */
}

/* > */
.left::before {
  content: " ";
  display: flex;
  position: relative;
  width: 25px;
  height: 25px;
  top: 50px;
  left: 45%;
  z-index: 999;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

/* < */
.right::before {
  content: " ";
  display: flex;
  position: relative;
  width: 25px;
  height: 25px;
  top: 50px;
  right: 0px;
  z-index: 999;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
  transform: scaleX(-1);
}

.textcloud-enter-active,
.textcloud-leave-active {
  transition: opacity 2s ease;
}

.textcloud-enter-from,
.textcloud-leave-to {
  opacity: 0;
}
@media (max-width: 1024px) {
  .cloud {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .right, .left {
    justify-content: flex-start;
    margin: 0;
  }

  .right::before {
    display: none;
  }

  .right::after {
    content: " ";
    display: flex;
    position: relative;
    width: 25px;
    height: 25px;
    top: 50px;
    right: 0px;
    z-index: 999;
    border: medium solid white;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent white;
  }

  .content {
    width: 80%;
  }

  #stripe, #placeholder-stripe {
    position: absolute;
    left: 85%;
  }
  
  .point {
    left: 40%;
  }

  .left::before {
    left: 80%;
  }
}

</style>
