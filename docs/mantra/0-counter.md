
# 计数器

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const count = ref(0)

function increment() {
  if (count.value < 9999) {
      count.value++
  }
}

function decrement() {
  if (count.value > 0) {
      count.value--
  }
}

function reset() {
  count.value = 0
}

function handleKeydown(event) {
  if (event.code === 'NumpadAdd') {
    increment()
  }

  if (event.code === 'NumpadSubtract') {
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



<div class="counter">
  <div class="display">{{ count.toString().padStart(4, '0') }}</div>
  <div class="buttons">
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
  <button @click="reset">Reset</button>
</div>

<style scoped>
.counter {
  text-align: center;
  margin-top: 30px;
}
.display {
  font-size: 96px;
  background-color: #333;
  color: white;
  padding: 50px;
  margin-bottom: 0;
  border-radius: 10px;
}
.buttons {
  margin: 50px;
}
button {
  font-size: 48px;
  margin: 0 40px;
  padding: 20px;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

button:nth-child(1) {
  background-color: #FFB6C1;
}
button:nth-child(2) {
  background-color: #90EE90;
}
button:nth-child(3) {
    font-size: 30px;
}
</style>
