<template>
    <Teleport to="body">
      <Transition name="modal-fade">
        <div class="modal-wrapper">
          <component :is="" />
        </div>
      </Transition>
    </Teleport>
  </template>
  
  <script setup></script>
  
  <style scoped>
  .modal-wrapper {
    position: fixed;
    left: 0;
    top: 0;
  
    z-index: 500;
  
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
  
    display: grid;
    place-items: center;
  }
  
  .modal-fade-enter-from,
  .modal-fade-leave-to {
    opacity: 0;
  }
  
  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: 0.25s ease all;
  }
  </style>