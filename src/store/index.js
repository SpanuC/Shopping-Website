import { createStore } from "vuex";

const removerAcentos = (string) => {
  const mapaAcentosHex = {
    a: /[\xE0-\xE6]/g,
    e: /[\xE8-\xEB]/g,
    i: /[\xEC-\xEF]/g,
    o: /[\xF2-\xF6]/g,
    u: /[\xF9-\xFC]/g,
    c: /\xE7/g,
  };
  for (let letra in mapaAcentosHex) {
    var expressaoRegular = mapaAcentosHex[letra];
    string = string.replace(expressaoRegular, letra);
  }
  return string;
};

export default createStore({
  state: {
    women: [
      {
        title: "Black Snake Dress",
        src: require("@/assets/img/women/1.jpeg"),
        price: 1849.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Black",
        brand: "Gucci",
        gender: "women",
        id: 1,
      },

      {
        title: "Tattered Silk Coat",
        src: require("@/assets/img/women/2.jpeg"),
        price: 1379.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Grey",
        brand: "Maison Margiela",
        gender: "women",
        id: 2,
      },
      {
        title: "Royal Gold Gown",
        src: require("@/assets/img/women/3.jpeg"),
        price: 859.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Blue",
        brand: "Luisa Beccaria",
        gender: "women",
        id: 3,
      },
      {
        title: "Fine Ripped Shirt",
        src: require("@/assets/img/women/4.jpeg"),
        price: 1319.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Black",
        brand: "Maison Margiela",
        gender: "women",
        id: 4,
      },
      {
        title: "Renaissance Dress",
        src: require("@/assets/img/women/5.jpeg"),
        price: 2899.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "White",
        brand: "Simone Rocha",
        gender: "women",
        id: 5,
      },
      {
        title: "Black Buttoned Overcoat",
        src: require("@/assets/img/women/6.jpeg"),
        price: 659.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Black",
        brand: "Yohji Yamamoto",
        gender: "women",
        id: 6,
      },
      {
        title: "Black Layered Top",
        src: require("@/assets/img/women/7.jpeg"),
        price: 779.99,
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Black",
        brand: "Anne Sofie Madsen",
        gender: "women",
        id: 7,
      },
      {
        title: "White Bracelet Sneakers",
        src: require("@/assets/img/women/8.jpeg"),
        price: 579.99,
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Shoes",
        color: "White",
        brand: "Comme De Garcons",
        gender: "women",
        id: 8,
      },
      {
        title: "Gold and Black Heels",
        src: require("@/assets/img/women/9.jpeg"),
        price: 739.99,
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Shoes",
        color: "Gold",
        brand: "Dolce & Gabbana",
        gender: "women",
        id: 9,
      },

      {
        title: "Gold and Pink Floral Heels",
        src: require("@/assets/img/women/10.jpeg"),
        price: 1239.99,
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Shoes",
        color: "Gold",
        brand: "Dolce & Gabbana",
        gender: "women",
        id: 10,
      },
      {
        title: "Stitched Mouse Top",
        src: require("@/assets/img/women/11.jpeg"),
        price: 669.99,
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "White",
        brand: "Dolce & Gabbana",
        gender: "women",
        id: 11,
      },
      {
        title: "Black Emblem Bag",
        src: require("@/assets/img/women/12.jpeg"),
        price: 279.99,
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Accessories",
        color: "Black",
        brand: "Jean Paul Gaultier",
        gender: "women",
        id: 12,
      },
      {
        title: "Glitter Skull Bag",
        src: require("@/assets/img/women/13.jpeg"),
        price: 339.99,
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Accessories",
        color: "Blue",
        brand: "Manish Arora",
        gender: "women",
        id: 13,
      },
      {
        title: "Portrait Bag",
        src: require("@/assets/img/women/14.jpeg"),
        price: 489.99,
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Accessories",
        color: "Gold",
        brand: "Moschino",
        gender: "women",
        id: 14,
      },
      {
        title: "Gold Bow Heels",
        src: require("@/assets/img/women/15.jpeg"),
        price: 1239.99,
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Shoes",
        color: "Gold",
        brand: "Versace",
        gender: "women",
        id: 15,
      },
      {
        title: "Black Lace Dress",
        src: require("@/assets/img/women/16.jpeg"),
        price: 2579.99,
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Black",
        brand: "Valentino",
        gender: "women",
        id: 16,
      },
      {
        title: "Aged Snake Bag",
        src: require("@/assets/img/women/17.jpeg"),
        price: 899.99,
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Accessories",
        color: "Gold",
        brand: "Valentino",
        gender: "women",
        id: 17,
      },
      {
        title: "Transparent Stitched Dress",
        src: require("@/assets/img/women/18.jpeg"),
        price: 1529.99,
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Gold",
        brand: "Valentino",
        gender: "women",
        id: 18,
      },
    ],
    men: [
      {
        title: "Butterfly Suit",
        src: require("@/assets/img/men/1.jpeg"),
        price: 979.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Black",
        brand: "Alexander McQueen",
        gender: "men",
        id: 19,
      },
      {
        title: "Balenciaga Boots",
        src: require("@/assets/img/men/2.jpeg"),
        price: 779.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Shoes",
        color: "Black",
        brand: "Balenciaga",
        gender: "men",
        id: 20,
      },
      {
        title: "Burberry Jacket",
        src: require("@/assets/img/men/3.jpeg"),
        price: 779.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Brown",
        brand: "Burberry",
        gender: "men",
        id: 21,
      },
      {
        title: "Gold Leaf Jacket",
        src: require("@/assets/img/men/4.jpeg"),
        price: 3779.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Gold",
        brand: "Dolce & Gabbana",
        gender: "men",
        id: 22,
      },
      {
        title: "Snake Coat",
        src: require("@/assets/img/men/5.jpeg"),
        price: 3779.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Blue",
        brand: "Dries Van Noten",
        gender: "men",
        id: 23,
      },
      {
        title: "Bee Pin",
        src: require("@/assets/img/men/6.jpeg"),
        price: 279.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Accessories",
        color: "Gold",
        brand: "Gucci",
        gender: "men",
        id: 24,
      },
      {
        title: "React Shoes",
        src: require("@/assets/img/men/7.jpeg"),
        price: 349.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Shoes",
        color: "Red",
        brand: "Nike",
        gender: "men",
        id: 25,
      },
      {
        title: "Brown costume",
        src: require("@/assets/img/men/8.jpeg"),
        price: 234.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Brown",
        brand: "Nordstorm",
        gender: "men",
        id: 26,
      },
      {
        title: "Archive Redux",
        src: require("@/assets/img/men/9.jpeg"),
        price: 93.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Brown",
        brand: "Raf Simons",
        gender: "men",
        id: 27,
      },
      {
        title: "Red Girl Shirt",
        src: require("@/assets/img/men/10.jpeg"),
        price: 1349.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Red",
        brand: "Raf Simons",
        gender: "men",
        id: 28,
      },
      {
        title: "RS Pink Jacket",
        src: require("@/assets/img/men/11.jpeg"),
        price: 1149.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Red",
        brand: "Raf Simons",
        gender: "men",
        id: 29,
      },
      {
        title: "Playing Card Pants",
        src: require("@/assets/img/men/12.jpeg"),
        price: 949.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Bottom",
        color: "Black",
        brand: "Undercover",
        gender: "men",
        id: 30,
      },
      {
        title: "Castle Backpack",
        src: require("@/assets/img/men/13.jpeg"),
        price: 699.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Accessories",
        color: "Grey",
        brand: "Undercover",
        gender: "men",
        id: 31,
      },
      {
        title: "Black Portrait Jacket",
        src: require("@/assets/img/men/14.jpeg"),
        price: 1299.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Black",
        brand: "Undercover",
        gender: "men",
        id: 32,
      },
      {
        title: "Red Portrait Girl",
        src: require("@/assets/img/men/15.jpeg"),
        price: 699.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Red",
        brand: "Yohji Yamamoto",
        gender: "men",
        id: 33,
      },
    ],
    cart: [],
    product: {},
    searchWord: null,
    filteredProducts: null,
    tax: 5,
    shipping: 15,
  },
  getters: {
    allProducts: (state) => state.women.concat(state.men),
    getWomen: (state) => state.women,
    getMen: (state) => state.men,

    getCart: (state) => state.cart,
    cartItemCount: (state) => state.cart.length,

    getSearchWord: (state) => state.searchWord,

    getFilteredProduct: (state) => state.filteredProducts,

    getProductByIdWomen: (state) => (id) =>
      state.women.find((women) => women.id === parseInt(id)),

    getProductByIdMen: (state) => (id) =>
      state.men.find((men) => men.id === parseInt(id)),

    cartTotalPrice: (state) => {
      let total = 0;
      state.cart.forEach((item) => {
        total += item.quantityPrice;
      });
      return total.toFixed(2);
    },

    getTax: (state) => state.tax,
    getShipping: (state) => state.shipping,

    cartCheckoutPrice: (state) => {
      let total = 0;

      state.cart.forEach((item) => {
        total = item.quantityPrice + state.shipping;
        total = total + (total * state.tax) / 100;
      });
      return total.toFixed(2);
    },
  },
  mutations: {
    ADD_TO_CART: (state, { product, quantity, size, quantityPrice }) => {
      let productInCart = state.cart.find((item) => {
        return item.product.id === product.id;
      });
      if (productInCart) {
        productInCart.quantity += quantity;
        productInCart.quantityPrice += productInCart.product.price;
        productInCart.quantityPrice =
          Math.round(productInCart.quantityPrice * 100) / 100;
        return;
      }
      state.cart.push({ product, quantity, size, quantityPrice });
    },

    REMOVE_FROM_CART: (state, product) => {
      state.cart = state.cart.filter((item) => {
        return item.product.id !== product.id;
      });
    },

    GET_PRODUCT_DETAILS: (state, product) => {
      state.productDetails.push(product);
    },

    FILTERED_PRODUCTS(state, word) {
      if (!word || word === "{}") {
        state.searchWord = null;
        state.filteredProducts = null;
      } else {
        state.searchWord = word;
        word = removerAcentos(word.trim().toLowerCase());
        state.filteredProducts = state.women
          .concat(state.men)
          .filter((product) => {
            return (
              product.title.toLowerCase().includes(word) ||
              product.brand.toLowerCase().includes(word) ||
              product.color.toLowerCase().includes(word) ||
              product.type.toLowerCase().includes(word)
            );
          });
      }
    },

    ORDER_SUCCESSFUL(state) {
      state.cart = [];
    },
  },
  actions: {
    addProductToCart: (
      { commit },
      { product, quantity, size, quantityPrice }
    ) => {
      commit("ADD_TO_CART", { product, quantity, size, quantityPrice });
    },
    removeProductFromCart: ({ commit }, product) => {
      commit("REMOVE_FROM_CART", product);
    },
    filterProducts({ commit }, word) {
      commit("FILTERED_PRODUCTS", word);
    },
    orderSuccess({ commit }) {
      commit("ORDER_SUCCESSFUL");
    },
  },
  modules: {},
});
