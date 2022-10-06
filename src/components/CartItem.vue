<template>
  <div v-for="item in cart" :key="item.product.id" class="outer-card">
    <router-link
      :to="{
        name: 'ProductDetails',
        params: { gender: item.product.gender, id: item.product.id },
      }"
      class="cart-item"
    >
      <img :src="item.product.src" />
      <div class="detais">
        <h3>{{ item.product.title }}</h3>
        <div class="productDetails">
          <p class="size">{{ item.size }}</p>
          <span class="quantity">{{ item.quantity }}</span>
        </div>
        <span class="price">${{ item.quantityPrice }}</span>
      </div>
      <div class="cancel">
        <i
          class="uil uil-times"
          @click.prevent="removeProductFromCart(item.product)"
        ></i>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    removeProductFromCart(product) {
      this.$store.dispatch("removeProductFromCart", product);
    },
  },
};
</script>

<style scoped>
.outer-card {
  width: 100%;
  border-top: solid 1px #333;
}
.outer-card:first-child {
  border-top: 0;
}

.cart-item {
  display: grid;
  grid-template-columns: 3fr 6fr 1fr;
  padding: 1em 0.8em;
  overflow-x: hidden;
  text-decoration: none;
  color: black;
  height: 50%;
  transition: 0.5s;
}
.cart-item:hover {
  background-color: rgb(100, 100, 100);
}

.cart-item img {
  position: relative;
  width: 4vw;
  height: 10vh;
  display: block;
  left: 0;
  object-position: top;
  animation: fade-in 0.5s forwards;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
.cart-item h3 {
  display: flex;
  position: relative;
  align-self: left;
  letter-spacing: 0.05em;
  width: auto;
  margin: 0;
  padding-left: 0.2em;
  font-size: 0.9rem;
  color: black;
  text-transform: uppercase;
  font-family: "Clab Personal Use", sans-serif;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.034);
  transition: 0.5s;
}
.cart-item h3:hover {
  color: #dedede;
}
.cart-item .price {
  display: flex;
  justify-content: right;
  margin-top: 1.3em;
  font-size: 1rem;
  letter-spacing: 0.2em;
  color: black;
  font-family: "Valverde", sans-serif;
  font-weight: 100;
}

.cart-item .productDetails {
  display: flex;
  flex-direction: row;
}
.cart-item .productDetails .size {
  display: block;
  text-transform: uppercase;
  margin: 0.3em 0.3em;
  padding: 0em 1.5em;
  font-size: 0.9em;
  border-radius: 2em;
  border: 1px solid black;
  font-family: sans-serif;
  font-family: "ITC Cheltenham Std", sans-serif;
}
.cart-item .productDetails .quantity {
  display: block;
  text-transform: uppercase;
  margin: 0.3em 0.3em;
  padding: 0em 1.5em;
  font-size: 0.9em;
  border-radius: 2em;
  border: 1px solid black;
  font-family: "ITC Cheltenham Std", sans-serif;
}

.cancel {
  text-align: right;
  transform: translateY(-3%) translateX(30%);
  position: relative;
  font-size: 1.2em;
}
.cancel .uil {
  display: flex;
  position: fixed;
  cursor: pointer;
  transition: 0.5s;
}
.cancel .uil:hover {
  color: #dedede;
}
</style>
