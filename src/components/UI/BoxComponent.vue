<template>
  <div
    class="my-5 p-5 px-10 border border-gray-800 rounded-md shadow-sm text-gray-300"
  >
    <div>
      <slot name="header"></slot>
    </div>
    <slot />
  </div>
</template>

<script setup></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
