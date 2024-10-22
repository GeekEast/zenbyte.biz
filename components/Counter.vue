<template>
  <div class="counter">
    <div class="display">{{ count.toString().padStart(4, '0') }}</div>
    <div class="controls">
      <button @click="decrement" class="btn minus">-</button>
      <button @click="increment" class="btn plus">+</button>
    </div>
    <button @click="reset" class="btn reset">Reset</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  if (count.value > 0) {
    count.value--
  }
}

const reset = () => {
  count.value = 0
}

const handleKeydown = (event) => {
  if (event.key === 'ArrowUp') {
    increment()
  } else if (event.key === 'ArrowDown') {
    decrement()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
}

.display {
  background-color: #333;
  color: white;
  font-size: 2em;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}

.controls {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.btn {
  font-size: 1.2em;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.minus {
  background-color: #f0f0f0;
}

.plus {
  background-color: #90EE90;
}

.reset {
  background-color: #f0f0f0;
}
</style>
