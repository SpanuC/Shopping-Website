<template>
  <div class="outer-card">
    <div class="card">
      <div class="cart">
        <div class="cart-header">
          <div class="cart-close" @click="toggleCartButton">X</div>
          <div class="subtotal">
            Subtotal:
            <div class="subtotal-text">${{ cartTotalPrice }}</div>
          </div>
        </div>
        <div class="cart-body">
          <CartItem />
        </div>
        <router-link class="cart-footer" to="/checkout">
          <div class="checkout">Checkout</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "@/components/CartItem.vue";
export default {
  components: { CartItem },
  name: "Cart",
  emits: ["toggleCart"],
  computed: {
    ...mapGetters(["cartItemCount", "cartTotalPrice"]),
  },
  methods: {
    toggleCartButton() {
      this.$emit("toggleCart");
    },
  },
};
</script>

<style scoped>
.outer-card {
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  justify-content: right;
  align-items: top;
  width: 100%;
  height: 100%;
  top: 90px;
  z-index: 1;
}
.outer-card.open {
  display: none;
}
.outer-card .cart {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 15vw;
  transition: 0.5s;
  height: 50vh;
  background-color: #dedede;
  transform: translateX(-4%);
  border-radius: 10px;
  border: 0.1em solid #333;
}
.outer-card .cart .cart-header {
  position: relative;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
  width: 100%;
  background-color: #cccccc;
  align-self: center;
  text-align: center;
  top: 0;
  border-radius: 10px;
}
.outer-card .cart .cart-header:before {
  content: "";
  position: fixed;
  height: 0px;
  width: 0px;
  right: 28px;
  top: -32px;
  border-width: 15px;
  border-color: transparent white transparent transparent;
  border-style: solid;
  transform: rotate(90deg);
  transition: 0.5s;
  z-index: -6;
}
.outer-card .cart .cart-header .cart-close {
  display: block;
  transition: 0.5s;
  border: none;
  color: rgb(0, 0, 0);
  font-size: 1.1rem;
  font-family: "Magisho", sans-serif;
  position: relative;
  cursor: pointer;
  border-radius: 0.4em;
  width: 1vw;
  margin: 0 1em;
  align-self: center;
  text-align: center;
}
.outer-card .cart .cart-header .subtotal {
  position: relative;
  font-family: "Magisho", sans-serif;
  font-size: 0.8rem;
  width: 10vw;
  padding: 1em 0em;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.outer-card .cart .cart-header .subtotal-text {
  display: flex;
  flex-direction: row;
  font-size: 0.9rem;
  padding-left: 1em;
  letter-spacing: 0.1em;
  color: black;
  font-family: "Valverde", sans-serif;
  font-weight: 100;
}

.outer-card .cart .cart-body {
  background-color: #dedede;
  overflow: auto;
  height: 38.3vh;
}

.outer-card .cart .cart-footer {
  position: fixed;
  bottom: 0;
  display: flex;
  align-self: center;
  border-top: 0.12em solid black;
  width: 15.1vw;
  height: 7vh;
  border-radius: 2em 2em 1em 1em;
  justify-content: center;
  background-color: #cccccc;
}
.outer-card .cart .cart-footer .checkout {
  margin-bottom: 0.2em;
  display: block;
  transition: 0.5s;
  border: none;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0.8em 2em;
  align-self: center;
  text-align: center;
  bottom: 0;
  font-size: 1rem;
  font-family: "Magisho", sans-serif;
  width: 10vw;
  position: fixed;
  z-index: -1;
  cursor: pointer;
  border-radius: 0.4em;
}
</style>
