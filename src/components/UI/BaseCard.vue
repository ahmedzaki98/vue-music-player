<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  width: 450px;
  padding: 1rem;
  margin: 1.5rem auto;
  max-width: 200rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  transition: border-radius cubic-bezier(0.075, 0.82, 0.165, 1) 1s,
    transform cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
  background: white;
  border-radius: 50px;
}
</style>
