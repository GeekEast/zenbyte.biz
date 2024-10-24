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

  <div class="reset" @click="reset">
    RESET
  </div>
</div>

<style scoped>
.counter {
  text-align: center;
  margin-top: 30px;
}
.display {
  font-size: 96px;
  background-color: #226666;
  color: white;
  padding: 50px;
  margin-bottom: 20px;
  border-radius: 10px;
}
.reset {
  font-size: 20px;
  font-weight: bold;
  background-color: #FF960A;
  color: black;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;

  width: 25%;
  margin: 0 auto
}
.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
button {
  font-size: 48px;
  margin: 0 10px;
  padding: 10px;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

button:nth-child(1) {
  background-color: #BC95A8;
}
button:nth-child(2) {
  background-color: #B6CBA2;
}
button:nth-child(3) {
  font-size: 30px;
  width: auto;
  height: auto;
  border-radius: 10px;
  padding: 10px 20px;
}



@media (max-width: 480px) {
  .display {
    font-size: 72px;
    padding: 30px;
  }
  button {
    font-size: 36px;
    width: 60px;
    height: 60px;
    margin: 0 5px;
  }
  button:nth-child(3) {
    font-size: 24px;
  }
}
</style>
