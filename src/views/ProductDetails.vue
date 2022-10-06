<template>
  <div v-if="product" class="product">
    <div class="gradient-section"></div>
    <img class="back-image" :src="product.src" />
    <div class="container">
      <div class="details">
        <p class="brand">{{ product.brand }}</p>
        <h1 class="title">{{ product.title }}</h1>
        <p class="price">${{ product.price }}</p>
        <p class="description">{{ product.description }}</p>
        <form class="cart">
          <select
            class="select"
            defaultValue="ceva"
            v-model="this.size"
            :class="{ error: error }"
          >
            <option value="Size" disabled>Size</option>
            <option value="xs">xs</option>
            <option value="s">s</option>
            <option value="m">m</option>
            <option value="l">l</option>
            <option value="xl">xl</option>
            <option value="xxl">xxl</option>
          </select>
          <button class="cart-button" @click.prevent="addToCart()">
            Add to cart
          </button>
        </form>
      </div>
      <i class="uil uil-arrow-left" @click="$router.go(-1)"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  props: ["gender", "id"],
  data() {
    return {
      size: "Size",
      product: [],
      error: false,
    };
  },
  mounted() {
    if (this.gender == "women") {
      this.product = this.$store.getters.getProductByIdWomen(this.id);
    } else {
      this.product = this.$store.getters.getProductByIdMen(this.id);
    }
  },
  methods: {
    addToCart() {
      if (this.size != "Size") {
        this.$store.dispatch("addProductToCart", {
          product: this.product,
          quantity: 1,
          quantityPrice: this.product.price,
          size: this.size,
        });
      } else {
        this.error = true;
      }
    },
  },
};
</script>

<style scoped>
@import url("http://fonts.cdnfonts.com/css/valverde");
option:first-child {
  display: none;
}
.product {
  display: flex;
  position: fixed;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: black;
  right: 0;
  bottom: 0;
  z-index: -5;
}
.gradient-section {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 40%;
  height: 100%;
  background-image: linear-gradient(to right, transparent, black 80%);
  z-index: -1;
  text-align: center;
  align-items: center;
  justify-content: top;
  left: 0;
}
.back-image {
  position: fixed;
  width: 40%;
  height: 100%;
  object-fit: cover;
  display: block;
  z-index: -2;
  left: 0;
  object-position: top;
  animation: fade-in 0.5s forwards;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
.container {
  color: #fff;
  display: flex;
  flex-direction: row;
  padding: 0;
  justify-content: center;
  width: auto;
  align-self: center;
}
.container > img {
  font-size: 2em;
  height: 32px;
  margin-left: 2em;
  cursor: pointer;
}
.details {
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 0;
  /* margin-left: 10em; */
  justify-content: center;
  width: auto;
}
.details .brand {
  margin: 0;
  font-size: 1.2srem;
  text-indent: 0.6em;
  color: rgb(196, 196, 196);
  font-family: "Valverde", sans-serif;
  letter-spacing: 0.1em;
  text-shadow: 1px 1px 2px black;
}
.details .title {
  align-self: left;
  letter-spacing: 0.2em;
  font-weight: 100;
  text-indent: 0.3em;
  width: auto;
  margin: 0;
  font-size: 2rem;
  color: #fff;
  text-transform: uppercase;
  font-family: "Magisho", sans-serif;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.034);
}
.details .price {
  margin: 0;
  font-size: 1.2rem;
  letter-spacing: 0.2em;
  text-indent: 0.5em;
  color: rgb(219, 219, 219);
  font-family: "Valverde", sans-serif;
  text-shadow: 1px 1px 2px black;
}
.details .description {
  font-size: 1rem;
  width: 30em;
  word-wrap: break-word;
  text-align: left;
  padding-bottom: 2em;
  border-bottom: 1px solid white;
  text-shadow: 1px 1px 2px black;
  font-family: "Magisho", sans-serif;
}
.details .select {
  display: block;
  transition: 0.5s;
  background-color: black;
  color: rgb(255, 255, 255);
  align-self: center;
  font-size: 1.2rem;
  padding: 0.4em 0;
  margin: 0.2em;
  margin-top: 0.2em;
  font-family: "Magisho", sans-serif;
  width: 12vw;
  height: 2.3em;
  position: relative;
  cursor: pointer;
  border-radius: 0.4em;
  text-transform: uppercase;
  border: 0.2em solid rgb(255, 255, 255);
}
.details .select.error {
  background-color: rgb(103, 0, 0);
}
.details .cart {
  display: flex;
  flex-direction: row;
  color: white;
}
.details .cart-button {
  display: block;
  transition: 0.5s;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  align-self: center;
  font-size: 1.2rem;
  padding: 0.4em 0;
  margin: 0.2em;
  margin-top: 0.2em;
  font-family: "Magisho", sans-serif;
  width: 12vw;
  height: 2.3em;
  position: relative;
  cursor: pointer;
  border-radius: 0.4em;
  text-transform: uppercase;
  border: 0.2em solid rgb(255, 255, 255);
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.details .cart-button:hover {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  border-radius: 0.5em;
  border: 0.2em solid rgb(0, 0, 0);
}
.uil {
  margin-left: 1em;
  font-size: 1.3rem;
  color: white;
  justify-self: center;
  cursor: pointer;
}
@media only screen and (max-width: 600px) {
  .uil {
    display: none;
    top: 0;
  }
  .back-image {
    width: 100%;
    height: 100%;
  }
  .gradient-section {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 212, 255, 0) 100%
    );
  }
  .details .cart,
  .details .description,
  .details .title,
  .details .price,
  .details .brand {
    justify-content: center;
    align-self: center;
    text-align: center;
    text-indent: 0;
  }
  .details .brand {
    text-indent: -10px;
  }
  .details .cart-button,
  .details .select {
    width: 20vh;
  }
}
</style>
