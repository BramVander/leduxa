
<template>
  <section class="hero">
    <h1 class="text-8xl brand-title">
      <em class="text-gradient">Quality&nbsp;</em>Lighting
      <sub class="text-xs" style="color: #475569;"><br />| Trusted by 1000+ customers</sub></h1>
  </section>

  <section class="flex justify-center gap-10 stack-mobile">
    <div class="sp flex flex-row">
      <i class="fa-solid fa-business-time text-3xl" style="color: #cd77a3"></i>
      <div>
        <h3>Ervaring;</h3>
        <p>15+ jaar aan ervaring en kwaliteit staat voor u klaar</p>
      </div>
    </div>

    <div class="sp flex flex-row">
      <i class="fa-solid fa-warehouse text-3xl" style="color: #a483dc"></i>
      <div>
        <h3>Opslag;</h3>
        <p>
          Met een gloednieuw eigen warenhuis van 3600m&sup2; zijn wij er klaar
          voor
        </p>
      </div>
    </div>

    <div class="sp flex flex-row">
      <i class="fa-brands fa-sketch text-3xl" style="color: #77b0c1"></i>
      <div>
        <h3>Design;</h3>
        <p>Alleen de allermooiste lampen met de hoogste kwaliteit</p>
      </div>
    </div>
  </section>

  <hr />

  <section>
    <h2 class="text-gradient ml-[7rem] stack-mobile">Quality at Leduxa:</h2>
    <div class="flex justify-evenly stack-mobile">
      <ul class="flex flex-col justify-around qte-list">
        <li data-li="standout">Standing Out</li>
        <li data-li="brand">Individual Brand</li>
        <li data-li="shine">Custom Design</li>
        <li data-li="socials">Customer Connection</li>
      </ul>

      <div
        class="qli-container flex justify-center items-center"
        style="width: 400px; height: 400px"
      >
        <img
          class="quality-list-img"
          :src="require(`@/assets/img/luxurybrand.png`)"
          alt="Bulbs"
        />
      </div>
    </div>
  </section>

  <hr />

  <section>
    <h2 class="ml-[7rem] mb-10 stack-mobile text-gradient">Product Examples</h2>
    
    <div class="products flex flex-wrap flex-row justify-center gap-10">

      <ImgRotate></ImgRotate>

      <!-- <BoxComponent class="product">
        <img src="@/assets/products/industrieel-wandlamp.png">
      </BoxComponent>

      <BoxComponent class="product">
        <img src="@/assets/products/industrieel-plafondlamp-2.png">
      </BoxComponent>

      <BoxComponent class="product">
        <img src="@/assets/products/industrieel-plafondlamp-vierkant.png">
      </BoxComponent>

      <BoxComponent class="product">
        <img src="@/assets/products/industrieel-plafondlamp.png">
      </BoxComponent>

      <BoxComponent class="product">
        <img src="@/assets/products/Industrieel-hanglamp.png">
      </BoxComponent> -->

    </div>
  </section>

  <hr />

  <!-- <section>
    <h2 class="ml-[7rem] mb-10 stack-mobile">nog een titel</h2>
  </section> -->
</template>

<script setup>
// @ is an alias to /src
import { onMounted } from "vue";
// import BoxComponent from "@/components/UI/BoxComponent.vue";
import ImgRotate from "@/components/ImgRotate.vue";

onMounted(() => {
  const list = document.querySelector(".qte-list");
  const img = document.querySelector(".quality-list-img");

  list.addEventListener("mouseover", (e) => {
    e.preventDefault();
    if (!e.target.dataset.li) {
      return;
    } else {
      for (let i = 0; i < list.children.length; i++) {
        list.children[i].style.color = "#475569";
        e.target.style.color = "#ffffff";
      }
      img.src = require(`@/assets/img/` + e.target.dataset.li + ".png");
      e.target.dataset.li == "standout" || e.target.dataset.li == "shine"
        ? (img.style.rotate = "5deg")
        : (img.style.rotate = "-5deg");
    }
  });
});
</script>

<style scoped>
.hero {
  background-image: url("@/assets/img/background-1300x800.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: contain;
  min-height: 1000px;
}

h1 {
  padding-top: 40px;
  padding-right: 100px;
  font-size: 5rem;
  line-height: 4.5rem;
}

li {
  color: #475569;
  font-size: 2rem;
  opacity: 0.75;
  padding-block: 2rem;
  display: flex;
  justify-content: flex-start;
}
li:not(:last-child) {
  border-bottom: 1px solid lightgray;
}
li:hover {
  cursor: pointer;
  color: white;
}

.quality-list-img {
  rotate: -5deg;
}

.brand-title {
  padding-top: 200px;
  float: right;
  color: white;
}

.sp {
  max-width: 400px;
  background: #0a0a0a;
  padding: 30px;
  gap: 30px;
}

.sp h3 {
  margin-bottom: 15px;
}
.sp p {
  color: #475569;
}

.products img {
  width: 100px;
  height: auto;
}

.product {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

li:last-child {
  text-align: start !important;
}

@media (max-width: 768px) {
  .hero {
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: contain;
  }
  .brand-title {
    float: left;
    padding: 0;
  }

  .brand-title {
    display: flex;
    flex-direction: column;
  }

  .quality-list-img {
    width: 80%;
  }

  .qli-container img {
    width: 250px; height: 200px;
  }
}
</style>
