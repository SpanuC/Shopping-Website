<template>
  <div class="navbar" :class="{ change_color: scrollPosition > 200 }">
    <a class="left" href="https://github.com/SpanuC">
      <img src="@/assets/Github.png" />
      <p>Spanu Claudiu</p>
    </a>
    <div class="center">
      <div class="logo">BRAND</div>
      <div class="navlink">
        <router-link class="nav-page" to="/">Home</router-link>
        <router-link class="nav-page" to="/women">Women</router-link>
        <router-link class="nav-page" to="/men">Men</router-link>
        <router-link class="nav-page" to="/about">About</router-link>
      </div>
    </div>
    <div class="right">
      <div class="search">
        <router-link class="searchBox" to="/search"
          ><i class="uil uil-search search-icon"></i
        ></router-link>
      </div>
      <div class="cart">
        <i class="uil uil-shopping-bag" @click="toggleCart"></i>
        <span class="notification-counter">{{ cartItemCount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navbar",
  emits: ["toggle"],
  data() {
    return {
      scrollPosition: null,
    };
  },
  computed: {
    ...mapGetters(["cartItemCount"]),
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    toggleCart() {
      this.$emit("toggle");
    },
  },
};
</script>

<style scoped>
.notification-counter {
  position: absolute;
  top: -2px;
  left: 32px;
  background-color: rgba(212, 19, 13, 1);
  color: #fff;
  border-radius: 1em;
  padding: 0.3em 0.6em;
  font-family: "Valverde", sans-serif;
  font-size: 0.7em;
}

.navbar {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: transparent;
  width: 100%;
  height: 6em;
  top: 0;
  left: 0;
  position: fixed;
  margin: 0;
  padding: 0;
  transition: 0.3s all linear;
  z-index: 1;
}
.navbar.change_color {
  background-color: black;
}
.navbar:hover {
  background-color: black;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}
.navbar .left {
  display: flex;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: left;
  text-shadow: 1px 1px 2px black;
  text-decoration: none;
}
.navbar .left img {
  display: flex;
  margin-left: 3em;
  width: 1.1em;
  margin-right: 0.4em;
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.3);
}
.navbar .left p {
  font-family: "Magisho", sans-serif;
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
}
.navbar .center {
  display: grid;
  align-items: center;
  justify-content: center;
  text-shadow: 1px 1px 2px black;
}
.navbar .center .logo {
  display: flex;
  color: #f8f8f8;
  font-size: 30px;
  font-family: "Hjet", sans-serif;
  text-decoration: none;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0em 0.6em;
  font-size: 3em;
  letter-spacing: 0.1em;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently*/
}
.navbar .center .navlink {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-family: "Magisho", sans-serif;
  text-indent: 0.4em;
  margin-top: -1em;
  text-decoration: none;
  letter-spacing: 0.2em;
}
.navbar .center .navlink .nav-page {
  text-decoration: none;
  color: #fff;
  font-size: 0.8rem;
  padding: 0em 0.4em;
}
.navbar .right {
  display: flex;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: right;
  padding-right: 2em;
}
.navbar .right .searchBox {
  height: 1em;
  display: flex;
  cursor: pointer;
  padding: 1em 1em;
  background: #fff;
  border-radius: 5em;
  align-items: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  position: relative;
}
.navbar .right .searchBox .search-icon {
  color: black;
  font-size: 18px;
  padding-right: 0.1em;
}
.navbar .right .cart {
  height: 1em;
  display: flex;
  cursor: pointer;
  padding: 0.86em 0.86em;
  margin-left: 0.2em;
  background: #fff;
  border-radius: 5em;
  align-items: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  position: relative;
  color: black;
  font-size: 18px;
}
.nav-page {
  padding: 0 1.3em 0 1.3em;
  position: relative;
  transition: 1s;
}
.nav-page::after {
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0.7em);
  content: "";
  position: absolute;
  display: block;
  background-color: white;
  border-radius: 100%;
  width: 0.3em;
  height: 0.3em;
  text-align: center;
  box-sizing: border-box;
  opacity: 0;
  transition: 0.5s;
}
.nav-page:hover::after {
  opacity: 100%;
}

@media only screen and (max-width: 600px) {
  .navbar {
    /* transform: translateX(17%); */
    display: flex;
    justify-content: center;
  }
  .navbar .center {
    transform: translateX(4%);
  }

  .navbar .left {
    display: none;
  }
  .navbar .right {
    display: flex;
    justify-content: right;
    padding: 0;
    margin-left: 1em;
  }
  .navbar .right .search {
    display: none;
  }
  .navbar .right .cart {
    justify-content: right;
  }
}
</style>
