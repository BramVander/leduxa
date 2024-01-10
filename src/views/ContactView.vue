<template>
  <section class="hero-contact flex items-center justify-center">
    <h1 class="text-white dark:text-white">Connecting...</h1>
  </section>

  <section>
    <div class="flex justify-center gap-10 stack-mobile">
      <BoxComponent>
        <template #header>
          <h2 class="text-gradient mb-10">Led's connect</h2>
        </template>

        <form
          class="flex flex-col gap-2"
          method="post"
          @submit.prevent="sendForm(form)"
        >
          <label for="email">Uw email</label>
          <input
            v-model="form.email"
            name="email"
            type="email"
            placeholder="info@profolux.com"
          />

          <label for="message">Uw bericht</label>
          <textarea
            v-model="form.msg"
            name="message"
            type="text"
            placeholder="Offerte, advies, inspiratie, informatie..."
            style="height: 10rem"
          />

          <br />
          <button v-show="!sent" type="submit" class="btn-primary">
            Mail ons
          </button>
          <button v-show="success" class="btn-success" disabled>
            MAIL IS VERSTUURD!
          </button>
          <button v-show="fail" class="btn-fail" disabled>
            ER GING IETS MIS!
          </button>

          <label class="text-center flex items-center">
            <input
              type="checkbox"
              name="subscribe"
              class="my-5 align-middle"
              style="width: 20px; height: 20px; accent-color: #6366f1"
            />
            &nbsp; Gelijk aanmelden voor de nieuwsbrief
          </label>
        </form>
      </BoxComponent>

      <BoxComponent>
        <template #header>
          <h2 class="text-gradient mb-10">Contact us</h2>
        </template>

        <div class="flex mb-8 gap-5 stack-mobile">
          <div class="p-2">
            <img class="icon" src="../assets/icon/location-dark.png" />
          </div>
          <div>
            <h3 class="text-gradient">Visit Our Office</h3>
            <a
              target="_blank"
              title="Klik om een route te maken"
              href="https://www.google.com/maps/dir//Van+Leeuwenhoekweg+8,+5482+TK+Schijndel/@51.6074153,5.4612046,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47c6e6d259c4dd59:0x38199a98a5988c97!2m2!1d5.4612046!2d51.6074153!3e0?entry=ttu"
              >Ekkersrijt 1005 <br />
              5692 AB Son & Breugel <br />
              The Netherlands</a
            >
          </div>
        </div>

        <div class="flex mb-8 gap-5 stack-mobile">
          <div class="p-2">
            <img class="icon" src="../assets/icon/phone-dark.png" />
          </div>
          <div>
            <h3 class="text-gradient">Call Us Anytime</h3>
            <a href="tel:+310735492350" title="Bel ons, waar wacht je op"
              >+31 (0)73 549 23 50</a
            >
          </div>
        </div>

        <div class="flex mb-8 gap-5 stack-mobile">
          <div class="p-2">
            <img class="icon" src="../assets/icon/mail-dark.png" />
          </div>
          <div>
            <h3 class="text-gradient">Request A Quote</h3>
            <a href="mailto:info@leduxa.com" title="Mail ons">info@leduxa.com</a
            ><br />
            <a href="mailto:sales@leduxa.com" title="Mail onze sales afdeling"
              >sales@leduxa.com</a
            >
          </div>
        </div>
      </BoxComponent>
    </div>

    <AlertBox v-show="success" class="success">
      Uw email is succesvol verstuurd, u kunt snel antwoord verwachten
    </AlertBox>

    <AlertBox v-show="fail" class="fail">
      Er ging iets mis met het versturen van de email :( probeer het nogmaals
    </AlertBox>
  </section>

  <hr />

  <section>
    <MapComponent></MapComponent>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as emailjs from "@emailjs/browser";

import BoxComponent from "@/components/UI/BoxComponent.vue";
import AlertBox from "@/components/UI/AlertBox.vue";
import MapComponent from "@/components/MapComponent.vue";

onMounted(() => {
  const script = document.createElement("script");

  // dynamically load EmailJS script
  script.src = "https://cdn.jsdelivr.net/npm/emailjs-com/dist/email.min.js";
  document.body.appendChild(script);
});

// Initialize EmailJS
(function () {
  emailjs.init("tcgbETS2DS5OxTJv9");
})();

let success = ref(false);
let fail = ref(false);
let sent = ref(false);

const form = {
  user_email: "",
  message: "",
  subscribe: false,
};

function confirmEmailMessage() {
  console.log("toggle succes");
  success.value = !success.value;
}

function confirmEmailError(error) {
  console.error(error);
  console.log("toggle fail");
  fail.value = !fail.value;
}

async function sendForm(form) {
  //   const serviceID = 'service_p152gxs';
  const serviceID = "service_p152gxs";
  const templateID = "template_z7zc71j";

  try {
    const templateParams = {
      user_email: form.email,
      message: form.msg,
      subscribe: form.subscribe,
    };

    const response = await emailjs.send(serviceID, templateID, templateParams);
    sent.value = !sent.value;

    console.log("mail sent!", response.status);
    confirmEmailMessage();
  } catch (error) {
    sent.value = !sent.value;

    console.error(error);
    confirmEmailError(error);
  }
}
</script>

<style scoped>
.hero-contact {
  background-image: url("@/assets/img/link.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 1000px;
}

.icon {
  width: 50px;
  height: 50px;
}
</style>
