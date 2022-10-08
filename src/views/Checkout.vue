<template>
  <div class="search-page">
    <div class="gradient-section">
      <h1 class="search-title">Checkout</h1>
    </div>
    <img class="hero-image" src="@/assets/img/heroSearch.jpg" />
    <div class="section">
      <orderSuccess v-if="order" />
      <!-- if checkout = true -->
      <div class="card-section" v-if="!order">
        <!-- if checkout = false -->
        <div v-for="item in getCart" :key="item.product.id" class="outer-card">
          <router-link
            :to="{
              name: 'ProductDetails',
              params: { gender: item.product.gender, id: item.product.id },
            }"
            class="card"
          >
            <img class="card-image" :src="item.product.src" />
            <div class="card-text">
              <p class="item-brand">{{ item.product.brand }}</p>
              <p class="item-title">{{ item.product.title }}</p>
              <p class="item-quantity">Quantity: {{ item.quantity }}</p>
              <div class="item-size-text">
                Size
                <p class="item-size">: {{ item.size }}</p>
              </div>
              <p class="item-price">${{ item.quantityPrice }}</p>
            </div>
          </router-link>
          <div class="cancel">
            <i
              class="uil uil-trash-alt"
              @click.prevent="removeProductFromCart(item.product)"
            ></i>
          </div>
        </div>
      </div>
      <div class="checkout-card">
        <div class="header-checkout">
          <p class="checkout-title">ORDER SUMMARY</p>
        </div>
        <div class="body-checkout">
          <p class="text-box">Subtotal : ${{ cartTotalPrice }}</p>
          <p class="text-box">Shipping : ${{ getShipping }}</p>
          <p class="text-box">Tax: {{ getTax }}%</p>
          <p class="text-total">Total ${{ cartCheckoutPrice }}</p>
        </div>
        <div class="footer-checkout" to="/checkout">
          <div class="checkout" @click.prevent="orderSuccess()">Checkout</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import orderSuccess from "@/components/orderSuccess.vue";
import { mapGetters } from "vuex";
export default {
  components: { orderSuccess },
  name: "Checkout",
  data() {
    return {
      order: false,
    };
  },
  computed: {
    ...mapGetters([
      "cartTotalPrice",
      "cartCheckoutPrice",
      "getTax",
      "getShipping",
      "getCart",
    ]),
  },
  methods: {
    removeProductFromCart(product) {
      this.$store.dispatch("removeProductFromCart", product);
    },
    orderSuccess() {
      if (this.getCart.length > 0) {
        this.order = true;
        this.$store.dispatch("orderSuccess");
      } else if ((this.getCart.length = 0)) {
        this.order = false;
      }
    },
  },
};
</script>

<style scoped>
.search-page {
  position: absolute;
  top: 0;
  z-index: -1;
  background-color: black;
  height: 100%;
}

.gradient-section {
  display: flex;
  position: absolute;
  width: 100vw;
  height: 26em;
  background-image: linear-gradient(transparent, rgb(0, 0, 0));
  text-align: center;
  justify-content: center;
  align-content: center;
}

.search-title {
  position: absolute;
  align-self: center;
  text-align: center;
  letter-spacing: 0.3em;
  font-family: light;
  font-weight: 100;
  text-indent: 0.3em;
  font-size: 3rem;
  color: #fff;
  text-transform: uppercase;
  font-family: "Magisho", sans-serif;
}

.hero-image {
  position: relative;
  width: 100vw;
  height: 26em;
  top: 0;
  object-fit: cover;
  display: block;
  z-index: -2;
  object-position: center;
  animation: fade-in 0.5s forwards;
}

.section {
  display: flex;
  flex-direction: row;
  background-color: black;
  justify-content: center;
  width: 100vw;
  position: relative;
}

.checkout-card {
  display: flex;
  flex-direction: column;
  width: 15vw;
  height: fit-content;
  background-color: rgb(240, 240, 240);
  border-radius: 1em;
  align-items: center;
  position: inherit;
  margin: 1em 2em;
  border: 4px solid #333;
}
.checkout-card .header-checkout {
  position: relative;
  top: 0;
  width: 100%;
  display: flex;
  align-self: center;
  width: 15vw;
  height: fit-content;
  border-radius: 1em 1em 1em 1em;
  justify-content: center;
  border-bottom: 1px solid black;
  background-color: #d4d4d4;
}
.checkout-card .header-checkout .checkout-title {
  position: relative;
  font-family: "Magisho", sans-serif;
  font-size: 1.3em;
  width: 10vw;
  height: fit-content;
  margin: 0.8em 0;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.checkout-card .body-checkout {
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  justify-content: center;
  margin: 0;
  padding: 0;
}
.checkout-card .body-checkout .text-box {
  position: relative;
  font-family: "Magisho", sans-serif;
  font-size: 0.9rem;
  width: 14vw;
  height: fit-content;
  padding: 0.8em 0em;
  margin: 0;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.checkout-card .body-checkout .text-total {
  position: relative;
  font-family: "Magisho", sans-serif;
  font-size: 1.2rem;
  /* width: 10vw; */
  padding: 2em 0em;
  margin: 0;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.checkout-card .footer-checkout {
  position: relative;
  bottom: 0;
  /* width: 100%; */
  display: flex;
  align-self: center;
  width: 15vw;
  height: 7vh;
  border-top-left-radius: 2em;
  border-top-right-radius: 2em;
  border-radius: 2em 2em 1em 1em;
  justify-content: center;
  border-top: 1px solid black;
  background-color: #eaeaea;
}
.checkout-card .footer-checkout .checkout {
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
  position: absolute;
  /* z-index: -1; */
  cursor: pointer;
  border-radius: 0.4em;
  margin-bottom: 0.5em;
}

.card-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  width: 52vw;
  padding: 0.5em 0em 5em 0em;
  background-color: rgba(0, 0, 0);
}
.card-section .outer-card {
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.6s;
  cursor: pointer;
  overflow: hidden;
}

.card-section .outer-card:first-child {
  border-top: 2px solid rgb(40, 40, 40);
}

.card-section .outer-card .card {
  display: flex;
  flex-direction: row;
  position: relative;
  width: 50vw;
  height: 14vh;
  background: rgb(7, 7, 7);
  cursor: pointer;
  border: none;
  border-bottom: inherit;
  overflow: hidden;
  transition: transform 0.6s;
  justify-content: flex-end;
  align-items: center;
  background-color: rgb(0, 0, 0);
  text-decoration: none;
  padding: 2em 0em;
  border-bottom: 2px solid rgb(40, 40, 40);
}

.outer-card:hover {
  transform: translateX(-0.6%);
}

.card-image {
  position: absolute;
  width: inherit;
  height: inherit;
  object-fit: cover;
  display: block;
  object-position: top;
  transition: transform 0.6s;
  filter: brightness(80%);
  position: relative;
  width: 15vw;
  height: 20vh;
  min-width: 5vw;
  padding: 4em 0em;
}

.outer-card:hover > .card > .card-image {
  transform: scale(1.1);
}

.card-text {
  display: flex;
  flex-direction: column;
  padding: 1em 2em 1em 2em;
  font-size: 1rem;
  word-wrap: break-word;
  text-align: left;
  align-self: right;
  color: white;
  width: 50vw;
}
.card-text > .item-title {
  font-size: 1.1rem;
  font-weight: 800;
  color: rgb(214, 214, 214);
  margin: 0;
  margin-bottom: 1em;
}
.card-text > .item-brand {
  margin: 0;
  font-size: 0.9em;
  color: rgb(180, 180, 180);
  font-family: "Valverde", sans-serif;
  letter-spacing: 0.1em;
  text-shadow: 1px 1px 2px black;
}
.card-text > .item-quantity {
  margin: 0;
  font-size: 0.9em;
  color: rgb(255, 255, 255);
  font-family: "Valverde", sans-serif;
  letter-spacing: 0.1em;
  text-shadow: 1px 1px 2px black;
}
.card-text > .item-size-text {
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 10px;
  font-size: 0.9rem;
  color: rgb(179, 179, 179);
  font-family: "Valverde", sans-serif;
}
.card-text .item-size-text .item-size {
  font-size: 0.9rem;
  color: rgb(179, 179, 179);
  font-family: "Valverde", sans-serif;
  text-transform: uppercase;
}
.card-text > .item-price {
  display: flex;
  justify-content: right;
  margin-top: 2em;
  font-size: 1rem;
  letter-spacing: 0.2em;
  color: white;
  font-family: "Valverde", sans-serif;
  font-weight: 100;
}

.cancel {
  transform: translateY(70%) translateX(-70%);
  position: absolute;
  right: 0;
  z-index: 3;
  font-size: 1.3em;
}
.cancel .uil {
  display: flex;
  position: relative;
  cursor: pointer;
  transition: 0.5s;
  color: rgb(194, 194, 194);
}
.cancel .uil:hover {
  color: #fff;
}
</style>
