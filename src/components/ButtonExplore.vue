<template>
  <button>
    {{ title }}
    <div class="arrow-wrapper">
      <div class="arrow"></div>
    </div>
  </button>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: false,
  }
})
</script>

<style scoped>
button {
  --arrow-width: 10px;
  --arrow-stroke: 2px;
  box-sizing: border-box;
  border: 0;
  border-radius: 5px;
  color: #0f5;
  padding: 10px 20px;
  background: transparent;
  display: flex;
  transition: 0.1s background;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  border: solid 2px #0f5;
  margin-top: 2rem
}

button .arrow-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

button .arrow {
  margin-top: 1px;
  width: var(--arrow-width);
  background: transparent;
  height: var(--arrow-stroke);
  position: relative;
  transition: 0.1s;
}

button .arrow::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  border: solid #0f5;
  border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
  display: inline-block;
  top: -3px;
  right: 3px;
  transition: 0.1s;
  padding: 3px;
  transform: rotate(-45deg);
}

button:hover {
  background-color: #111;
  color: #0f5;
}

button:hover .arrow {
  background: #0f5;
}

button:hover .arrow::before {
  border-color: #0f5;
  /* Flecha fica verde quando o botão está em hover */
  right: 0;
}
</style>
