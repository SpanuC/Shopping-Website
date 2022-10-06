<template>
  <div class="shop-page">
    <div class="gradient-section">
      <h1 class="shop-title">{{ category }}</h1>
    </div>
    <img class="hero-image" :src="require(`@/assets/img/${image}`)" />
    <div class="shop-section">
      <div v-for="p in product" :key="p.id" class="outer-card">
        <router-link
          :to="{
            name: 'ProductDetails',
            params: { gender: p.gender, id: p.id },
          }"
          class="card"
        >
          <img class="card-image" :src="p.src" />
          <div class="card-bottom">
            <div class="card-text">
              <p class="item-title">{{ p.title }}</p>
              <p class="item-brand">{{ p.brand }}</p>
              <p class="item-description">{{ p.description }}</p>
            </div>
          </div>
        </router-link>
        <div class="card-under">
          <p class="item-price">${{ p.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product", "image", "catImg", "category"],
  name: "Shop",
};
</script>

<style scoped>
.shop-page {
  position: absolute;
  top: 0;
  z-index: -1;
}
.gradient-section {
  display: flex;
  position: absolute;
  width: 100vw;
  height: 46em;
  background-image: linear-gradient(transparent, rgb(0, 0, 0));
  text-align: center;
  justify-content: center;
  align-content: center;
}
.shop-title {
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
  height: 46em;
  object-fit: cover;
  display: block;
  z-index: -2;
  object-position: center;
  animation: fade-in 0.5s forwards;
}
.shop-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, 20em);
  grid-gap: 0.4em;
  justify-content: center;
  height: fit-content;
  width: 100vw;
  padding: 0.5em 0em 5em 0em;
  background-color: rgba(0, 0, 0);
}
.outer-card {
  position: relative;
  transition: transform 0.6s;
  cursor: pointer;
  border: 0px solid rgba(56, 56, 56, 0);
  overflow: hidden;
  width: 20em;
}

.card {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 20em;
  height: 26em;
  background: rgb(7, 7, 7);
  cursor: pointer;
  border: none;
  border-bottom: inherit;
  overflow: hidden;
  transition: transform 0.6s;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0);
  text-decoration: none;
}

.outer-card:hover {
  transform: translateY(-0.5em);
}

.outer-card:hover > .card > .card-bottom {
  opacity: 1;
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
}

.outer-card:hover > .card > .card-image {
  transform: scale(1.1);
}

.card-bottom:hover > .card-image {
  transform: scale(1.1);
}

.card-bottom {
  display: flex;
  flex-direction: column;
  justify-self: center;
  position: relative;
  background: rgb(0, 0, 0);
  bottom: 0;
  left: 0;
  margin: 0;
  width: 20em;
  height: 11em;
  z-index: 1;
  opacity: 0;
  transition: opacity 1s;
  justify-content: center;
}

.card-text {
  padding: 1em 2em 1em 2em;
  font-size: 1rem;
  word-wrap: break-word;
  text-align: left;
  align-self: center;
}

.card-text > .item-title {
  font-size: 1.1rem;
  font-weight: 800;
  padding-bottom: 0.1em;
  color: rgb(214, 214, 214);
}

.card-text > .item-brand {
  font-size: 0.9rem;
  padding-bottom: 0.7em;
  color: rgb(214, 214, 214);
}

.card-text > .item-description {
  font-size: 0.7rem;
  color: rgb(214, 214, 214);
}

.card-under {
  padding: 0.5em 6.55em;
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  width: 12em;
  background-color: rgb(0, 0, 0);
  border: none;
  border-top: none;
  transition: background-color 0.5s, all 1s;
  color: white;
}

.outer-card:hover > .card-under {
  background-color: rgb(204, 204, 204);
  color: black;
  border-bottom-right-radius: 2em;
  border-bottom-left-radius: 2em;
}

.card-under > .item-price {
  display: flex;
  font-size: 0.8rem;
  padding-bottom: 0.1em;
  opacity: 0.8;
  margin-left: 0.5em;
}
</style>
