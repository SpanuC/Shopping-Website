<template>
  <div class="success">
    <div class="success-header">
      <p class="success-title">
        <i class="uil uil-shield-check">ORDER SUCCESSFUL</i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderSuccess",
};
</script>

<style scoped>
.success {
  display: flex;
  flex-direction: column;
  border: 0.1em solid white;
  border-radius: 0.25em;
  text-align: center;
  width: 52vw;
  height: 15em;
  align-items: center;
  justify-content: center;
  animation: fade-in 0.5s forwards 0.5s;
  color: white;
}

.success-header {
  display: flex;
  align-items: center;
  justify-items: center;
  text-align: center;
  color: white;
}

.uil {
  margin-right: 0.5em;
  color: white;
  align-self: center;
  justify-self: center;
}

.success-title {
  font-size: 2rem;
}
</style>
