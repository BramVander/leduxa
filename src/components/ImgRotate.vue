<template> 
    <div class="flex flex-col justify-center items-center">
        <div id="productspin">
            <img id="myImg" :src="imgSrc" alt="product" />
        </div>
        
        <br />
        <br />

        <div class="flex justify-center">
          <input type="checkbox" name="schakelaar" id="schakelaar" @change="light = !light, console.log(light)">
          <label for="schakelaar">Led there be light</label>
        </div>
        
        <div class="flex justify-center">
            <input id="value" type="range" v-model="imgIndex" min="1" max="10" step="1" @wheel="scroll()"/>
        </div>
    </div>
  </template>
  
  <script setup>
  import { useStore } from '@/store/index.js';
  import { ref, computed } from 'vue';

  let light = false;

  const store = useStore();
  const imgIndex = ref(store.imgIndex);
  
  const imgSrc = computed(() => {
    return require(`@/assets/rotate/${imgIndex.value}.png`);
  });

  function scroll() {
    event.preventDefault();

    // prevent scroll during disable
    if(!event.target.disabled) {
      
      // calc direction
      const delta = event.deltaY > 0 ? -1 : 1;
      const newValue = this.imgIndex + delta;
      // const newValue = imgIndex.value + delta;
      
      if (newValue >= 1 && newValue <= 10) {
        this.imgIndex = newValue;
      }
    }
  }
  </script>
  
  <style scoped>
  img {
    width: 400px;
    height: auto;
  }
  
  #value {
    width: 300px;
  }
  </style>