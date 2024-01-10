<template>
  <footer
    class="w-full border-b border-gray-700 bg-black text-white px-5 flex items-center text-center justify-between"
  >
    <a id="fb" target="_blank" href="https://www.facebook.com/LEDUXALED">
      <i class="fab fa-facebook text-gradient" style="font-size: 30px"></i>
    </a>

    <p>
      <router-link exact to="/">Brand</router-link>
      <router-link exact to="/us">About Us</router-link>
      <router-link exact to="/contact">Contact</router-link>
    </p>

    <p id="copy">
      <!-- <button
        id="cookie-btn"
        @click="hideCookies"
        class="btn-primary mr-2 hide-mobile"
      >
        Cookies
      </button> -->
      &copy; 2023 - Leduxa
    </p>
  </footer>
</template>

<script setup>
// async function hideCookies() {
//   const cookieBtn = document.getElementById("cookie-btn");
//   cookieBtn.innerText = "Thanks";
//   // thank for 2sec
//   await new Promise((r) => setTimeout(r, 2000));
//   cookieBtn.style.display = "none";
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  font-family: "Noto Sans JP", sans-serif !important;
  height: 50px;
  position: sticky;
  bottom: 0;
  padding: 0 !important;
  /* map ukraine flag uses z-index 1000 */
  z-index: 9999;
}

footer p a:hover {
  text-decoration: none;
  color: white;
}

p a:nth-child(2) {
  margin-inline: 1rem;
}
button {
  width: 75px;
}

#fb,
#copy {
  width: 120px;
}
</style>
