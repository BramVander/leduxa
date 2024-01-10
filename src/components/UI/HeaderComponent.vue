<template>
  <header class="bg-black text-white border-b border-gray-700">
    <nav class="flex flex-row justify-center items-center text-center p-5">
      <!-- <div class="hide-mobile">
          <a href="/">
            <img alt="Leduxa logo" src="./cropped-Logo-leduxa-100x100.png">
          </a>
        </div> -->

      <!-- nav items -->
      <div class="flex gap-5" id="nav">
        <router-link exact class="nav-item" id="brand" to="/"
          >Brand</router-link
        >
        <router-link exact class="nav-item" id="us" to="/us"
          >About Us</router-link
        >
        <router-link exact class="nav-item" id="contact" to="/contact"
          >Contact</router-link
        >
        <router-link exact class="nav-item" to="/test">test</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
// const navItems = document.querySelector('#nav');
// cant use e.preventDefault() so we manually check for active link

// navItems.addEventListener('click', (e) => {
//   e.preventDefault();
//   window.location.pathname = e.target.getAttribute('id');
// for (let i = 0; i < navItems.children.length; i++) {
//   navItems.children[i].classList.remove('active');
//   e.target.classList.add('active');
// }
// e.target.id == nav ? '' : e.target.classList.add('active');
// })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.nav-item {
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: "Noto Sans JP", sans-serif;
}

.nav-item::after {
  content: "";
  background: white;
  display: block;
  width: 0px;
  height: 3px;
  position: relative;
  top: 20px;
  transition: width 150ms ease-in-out;
}
.nav-item:hover::after {
  width: 100%;
  background: linear-gradient(
    135deg,
    rgb(255, 206, 236) 0%,
    rgb(152, 150, 240) 100%
  );
}

.nav-item:hover {
  font-weight: 700;
  background: linear-gradient(
    135deg,
    rgb(255, 206, 236) 0%,
    rgb(152, 150, 240) 100%
  );
  background-image: var(--gradient-text);
  background-size: 100%;
  background-repeat: repeat;

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}

/* add css to tailwind.css so footer has access as well */

/* .router-link-exact-active {
  background: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
} */

/* .router-link-exact-active::after {
  background: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);
  background-image: var(--gradient-text);
  background-repeat: repeat;  width: 100%;
  background-size: 100%;
} */
</style>
