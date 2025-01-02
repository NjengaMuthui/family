<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted, onUnmounted, computed, useTemplateRef } from "vue";
import { useProductsStore } from "./stores/products";
import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Footer from "./components/Footer.vue";

const open = ref(false);
const opacity = ref(1);
const side = ref(true);
const search_input = ref(null);
const show_items = ref(false);
const store = useProductsStore();
const myDiv = useTemplateRef("myDiv");
const divHeight = ref(0);
const iconSize = ref("50px");

const updateIconSize = () => {
  const screenWidth = window.innerWidth;
  iconSize.value = `${Math.max(20, screenWidth / 20)}px`;
};

const magTop = ref(0);

onMounted(() => {
  updateIconSize();
  window.addEventListener("resize", updateIconSize);
  magTop.value = myDiv.value.offsetHeight + 5 + "px";
});

onUnmounted(() => {
  window.removeEventListener("resize", updateIconSize);
});

const iconStyle = ref(() => ({
  fontSize: iconSize.value
}));

function searchClick() {
  open.value = !open.value;
  opacity.value = 0.0;

  setTimeout(() => {
    opacity.value = 1;
    search_input.value.focus();
  }, 300);
}
function openCart() {
  router.push({
    name: "Cart"
  });
}
</script>

<template>
  <header>
    <nav ref="myDiv">
      <div class="top">
        <div class="top-logo">
          <RouterLink to="/">
            <img alt="Family logo" class="logo" src="@/assets/familylogo.png" />
          </RouterLink>
        </div>
      </div>
      <div class="center">
        <div class="container">
          <div class="hide-search">
            <div class="buts">
              <div class="search-wrapper">
                <input
                  type="text"
                  ref="search_input"
                  class="search-input"
                  :class="{ active: open }"
                />
                <button
                  @click="searchClick"
                  class="search-btn"
                  :class="{ active: open }"
                  :style="{ opacity: opacity }"
                >
                  <FontAwesomeIcon v-if="open" icon="fa-solid fa-xmark" />
                  <FontAwesomeIcon v-else icon="fa-solid fa-magnifying-glass" />
                </button>
              </div>
              <button @click="openCart" class="items_cart">
                <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                <div v-show="store.cartItems.length > 0" class="items_num">
                  {{ store.cartItems.length }}
                </div>
              </button>

              <button @click="side = !side">
                <FontAwesomeIcon icon="fa-solid fa-bars-staggered" />
              </button>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="menu">
            <ul class="menu-items">
              <li class="menu-item"><a href="#">Apple</a></li>
              <li class="menu-item"><a href="#">Google</a></li>
              <li class="menu-item"><a href="#">Huawei</a></li>
              <li class="menu-item"><a href="#">Samsung</a></li>
              <li class="menu-item"><a href="#">Infinix</a></li>
              <li class="menu-item"><a href="#">OnePlus</a></li>
              <li class="menu-item"><a href="#">Nothing</a></li>
              <li class="menu-item"><a href="#">Oppo</a></li>
              <li class="menu-item"><a href="#">RealMe</a></li>
              <li class="menu-item"><a href="#">Techno</a></li>
              <li class="menu-item"><a href="#">Vivo</a></li>
              <li class="menu-item">
                <a href="#"
                  >Laptops <FontAwesomeIcon icon="fa-solid fa-chevron-down"
                /></a>
                <ul class="dropdown">
                  <li><a href="#">Dell</a></li>
                  <li><a href="#">HP</a></li>
                  <li><a href="#">Lenovo</a></li>
                  <li><a href="#">Apple</a></li>
                  <li><a href="#">Asus</a></li>
                  <li><a href="#">Acer</a></li>
                  <li><a href="#">MSI</a></li>
                  <li><a href="#">Samsung</a></li>
                  <li><a href="#">Toshiba</a></li>
                  <li><a href="#">Microsoft</a></li>
                </ul>
              </li>
              <li class="menu-item">
                <a href="#"
                  >Accessories <FontAwesomeIcon icon="fa-solid fa-chevron-down"
                /></a>
                <ul class="dropdown">
                  <li><a href="#">Keyboards</a></li>
                  <li><a href="#">Mice</a></li>
                  <li><a href="#">Monitors</a></li>
                  <li><a href="#">Headphones</a></li>
                  <li><a href="#">Webcams</a></li>
                  <li><a href="#">Phone Accessories</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div class="side-panel" :class="{ close_panel: side }">
      <button class="close-menu" @click="side = !side">
        <FontAwesomeIcon icon="fa-solid fa-xmark" />
      </button>
      <ul class="side-list">
        <li class="menu-item"><a href="#">Apple</a></li>
        <li class="menu-item"><a href="#">Google</a></li>
        <li class="menu-item"><a href="#">Huawei</a></li>
        <li class="menu-item"><a href="#">Samsung</a></li>
        <li class="menu-item"><a href="#">Infinix</a></li>
        <li class="menu-item"><a href="#">OnePlus</a></li>
        <li class="menu-item"><a href="#">Nothing</a></li>
        <li class="menu-item"><a href="#">Oppo</a></li>
        <li class="menu-item"><a href="#">RealMe</a></li>
        <li class="menu-item"><a href="#">Techno</a></li>
        <li class="menu-item"><a href="#">Vivo</a></li>
        <li class="menu-item"><a href="#">RealMe</a></li>
      </ul>
    </div>
    <div
      class="overlay"
      :class="{ show: !side, hide: side }"
      @click="side = !side"
    ></div>
  </header>
  <div class="body-footer" :style="{ marginTop: magTop }">
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>
.bottom {
  display: flex;
  justify-content: center;
}
.items_num {
  position: absolute;
  top: 0px;
  right: -2px;
  background: var(--genz-color-brand-1);
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 14px;
}
.items_cart {
  position: relative;
}
.body-footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  position: relative;
}
.close_panel {
  transform: translateX(300px);
}
.side-list {
  list-style: none;
}
.side-list li::after {
  content: "";
  display: block;
  height: 1px;
  margin-bottom: 10px;
  margin-top: 10px;
  width: 100%;
  background: linear-gradient(
    to right,
    var(--color-link-hover),
    var(--color-background)
  );
}
.close-menu {
  border: 0;
  font-size: 30px;
  background: transparent;
  color: var(--color-text);
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  padding: 5px;
}
.close-menu:hover {
  color: var(--genz-color-brand-1);
}

.overlay {
  width: 100%;
  height: 100%;
  background: var(--vt-c-black);
  opacity: 0.8;
  z-index: 3;
  position: fixed;
}
.side-panel {
  width: 300px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 4;
  background: var(--color-background);
  height: 100%;
  padding-top: 100px;
  transition: transform 0.6s;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #888 #ccc;
}

.side-panel::-webkit-scrollbar {
  width: 8px;
}

.side-panel::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.side-panel::-webkit-scrollbar-track {
  background: #ccc;
}
.search-wrapper {
  position: relative;
  height: var(--round-button-size);
  margin-left: 5px;
}
.search-input {
  height: var(--round-button-size);
  width: var(--round-button-size);
  color: var(--color-link-hover);
  outline: none;
  border: 0;
  background: none;
  transition: width 0.3s ease;
  border-radius: 10px;
}
.hide-search {
  display: flex;
  gap: 30px;
}
.buts button {
  border: none;
  border-radius: 50%;
  width: var(--round-button-size);
  height: var(--round-button-size);
  font-size: 18px;
  background: transparent;
  cursor: pointer;
}
.search-btn {
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-out;
}
.active.search-input {
  width: 200px;
  border: 1px solid var(--genz-color-brand-1);
  margin-right: var(--round-button-size);
}
.active.search-btn {
  transform: translateX(200px);
  background: var(--close-color);
}
.active.socials {
  display: none;
}
.buts {
  gap: 10px;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background: white;
}
.top-logo {
  position: absolute;
  top: 10px;
  left: 20px;
  height: 40px;
}
.logo {
  width: 40px;
}
.dropdown {
  visibility: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  list-style: none;
  padding: 10px 30px 30px 30px;
  margin: 0;
  z-index: 1000;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.3s ease;
  background-color: white;
}

.dropdown li {
  padding: 0;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.menu-item:hover .dropdown {
  visibility: visible;
  transform: scaleY(1);
}

.menu-item:hover .dropdown li {
  opacity: 1;
  transform: translateY(0);
}

.menu-item svg {
  margin-left: 5px;
  transition: transform 0.3s;
}

.menu-item:hover svg {
  transform: rotate(180deg);
}
@media (min-width: 768px) {
  .logo {
    width: 60px;
  }
}
@media (min-width: 992px) {
  .logo {
    width: 80px;
  }
}

@media (min-width: 1200px) {
  .logo {
    width: 100px;
  }
}

.menu .menu-items,
.socials,
.buts,
.side,
.container {
  display: flex;
  flex-direction: row;
  position: relative;
}
.container {
  width: 80%;
  margin: 10px auto;
  justify-content: end;
  align-items: center;
}
.menu-items,
.socials {
  list-style-type: none;
}
.menu-item {
  margin: 5px 5px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
}
.socials a {
  color: var(--color-link-hover);
  padding: 0;
}
.socials a:hover {
  color: #fcb900;
}
.glass {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(10px) saturate(200%);
  -webkit-backdrop-filter: blur(10px) saturate(200%);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
@media (max-width: 768px) {
  .bottom {
    display: none;
  }
}
</style>
