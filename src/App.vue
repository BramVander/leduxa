<template>
  <router-view/>
</template>

<script setup>
</script>

<!-- root component styling -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;300&display=swap');

:root {
  /* set color variables */
  --main-text: #6366f1;
  --secondary-text: #6f7f92;
  --gradient-text: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);
  --gradient-logo: linear-gradient(135deg, rgb(98,176,226) 0% rgb(145,67,151) 100%);
  --gradient-dusk: linear-gradient(135deg, rgba(6,147,227,1) 0%,rgba(155,81,224,1) 100%);

  /* set base styling */
  /* font-family: 'Raleway', sans-serif; */
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 500; 
  font-size: 16px;
  box-sizing: border-box;
  scroll-behavior: smooth;

  background-color: #0a0a0a !important;
}
</style>
