<template>
  <h2 class="text-gradient text-5xl m-auto">Wat vinden jullie?</h2>

  <div id="carousel" class="carousel slide mt-5" data-ride="carousel">
    <!-- Indicators -->
    <ul class="carousel-indicators">
      <li data-target="#carousel" data-slide-to="0" class="active"></li>
      <li data-target="#carousel" data-slide-to="1"></li>
      <li data-target="#carousel" data-slide-to="2"></li>
      <li data-target="#carousel" data-slide-to="3"></li>
      <li data-target="#carousel" data-slide-to="4"></li>
    </ul>

    <!-- The slideshow -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="card">
          <cite> A positive cite about working with Leduxa </cite>
          <p>
            - BRM VNDR<br />
            Profolux
          </p>
        </div>
      </div>

      <div class="carousel-item">
        <div class="card">
          <cite> Snelle levering, goed verpakt, mooie prijs </cite>
          <p>
            - BRM VNDR<br />
            Leduxa
          </p>
        </div>
      </div>

      <div class="carousel-item">
        <div class="card">
          <cite> Leuk design, makkelijk in gebruik </cite>
          <p>
            - BRM VNDR<br />
            Koopled
          </p>
        </div>
      </div>

      <div class="carousel-item">
        <div class="card">
          <cite> Bieden goede hulp bij aansluiting of technische info </cite>
          <p>
            - BRM VNDR<br />
            light inc
          </p>
        </div>
      </div>

      <div class="carousel-item">
        <div class="card">
          <cite> Fel licht, precies wat ik nodig had </cite>
          <p>
            - BRM VNDR<br />
            light inc
          </p>
        </div>
      </div>
    </div>

    <!-- Left and right controls -->
    <a class="carousel-control-prev" href="#carousel" data-slide="prev">
      <button><img id="left" src="@/assets/icon/arrow-left.png" /></button>
    </a>
    <a class="carousel-control-next" href="#carousel" data-slide="next">
      <button><img id="right" src="@/assets/icon/arrow-left.png" /></button>
    </a>
  </div>
</template>

<style>
.card {
  color: white;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  text-align: center;
}

.card cite {
  font-size: 2rem;
  padding: 1rem;
}

cite::before,
cite::after {
  font-family: "Font Awesome 5 Free";
  font-size: 2rem;
  font-weight: 900;
  content: "\22";

  /* gradient */
  background-color: #0a0a0a;
  background-image: var(--gradient-dusk);
  background-size: 100%;
  background-repeat: repeat;

  /* use text to mask background */
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}

#carousel {
  width: 25%;
  height: 300px;
  margin: auto;
}

#right {
  transform: scaleX(-1);
}

nav.p-5 {
  padding: 20px !important;
}

@media (max-width: 1024px) {
  #carousel {
    width: 80%;
  }

  .card cite {
    font-size: 14px;
    padding: 0;
  }

  .carousel-control-prev,.carousel-control-next {
    margin: auto;
  }
}
</style>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";

let link;

// on mount we import scripts / styles to not polute js / css
onMounted(() => {
  const myHead = document.getElementsByTagName("head")[0];
  link = document.createElement("link");

  // dynamically load bootstrap CSS
  link.href =
    "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css";
  link.rel = "stylesheet";
  myHead.insertBefore(link, myHead.firstChild);

  // dynamically load jQuery and Popper.js scripts
  const script1 = document.createElement("script");
  script1.src =
    "https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.slim.min.js";
  document.body.appendChild(script1);

  const script2 = document.createElement("script");
  script2.src =
    "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js";
  document.body.appendChild(script2);

  // dynamically load bootstrap JS script
  const script3 = document.createElement("script");
  script3.src =
    "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js";
  document.body.appendChild(script3);
});

// unload on leaving page to prevent css leak
onBeforeUnmount(() => {
  link.parentNode.removeChild(link);
});
</script>
