<template>
  <div>
    <TopSliding />
    <div class="flex-container">
      <TopLanding v-for="img in imgs" :phone="img" class="flex-item" />
      <multipurpose title="Latest Products" :prods="products" />
      <multipurpose title="Iphone Offers" :prods="products" />
      <multipurpose title="Samsung Offers" :prods="products" />
      <multipurpose title="Acessories" :prods="products" />
    </div>
  </div>
</template>

<script setup>
import TopSliding from "@/components/TopSliding.vue";
import TopLanding from "@/components/TopLanding.vue";
import { filename } from "../../scripts/helper";
import multipurpose from "@/components/multipurpose.vue";
import { ref } from "vue";
const imgs = ref([
  { name: "Galaxy Fit 3", img: filename("Samsung-Galaxy-Fit-3.jpg") },
  { name: "Vivo v40", img: filename("images.jpeg") }
]);

const products = ref([]);
for (let i = 0; i < 10; i++) {
  products.value.push({
    imgs: [
      filename("Vivo-V40-Lite-4G-a-1.jpg"),
      filename("Vivo-V40-Lite-4G-a-1.jpg"),
      filename("Vivo-V40-Lite-4G-a-1.jpg")
    ],
    name: "Oppo A3X",
    price: 5000,
    description:
      "The Oppo A3X is a sleek and modern smartphone designed to deliver a seamless user experience. It features a 6.56-inch HD+ display with a 120Hz refresh rate for smooth visuals, housed in a stylish lavender finish with a shimmering effect. The phone is powered by the MediaTek Dimensity 700 chipset, offering 5G connectivity and efficient performance, paired with 4GB/6GB of RAM and 64GB/128GB of expandable storage. Its dual rear camera setup includes a 50MP primary lens and a 2MP depth sensor, while the 8MP front camera ensures crisp selfies. The device runs on Android 12 with ColorOS 12.1, supported by a long-lasting 5000mAh battery with 33W fast charging. Additional features include a side-mounted fingerprint sensor, dual-SIM support, and USB-C charging, making it a versatile option for everyday use",
    features: [
      "6.56-inch HD+ LCD display",
      "Resolution: 1612 x 720 pixels",
      "120Hz refresh rate for smoother visuals",
      "Dual rear cameras: 50MP (primary) + 2MP (depth sensor)",
      "8MP front camera for selfies",
      "MediaTek Dimensity 700 chipset",
      "4GB/6GB RAM options",
      "64GB/128GB internal storage, expandable via microSD",
      "5000mAh battery with 33W fast charging",
      "Android 12 with ColorOS 12.1",
      "Side-mounted fingerprint sensor",
      "Dual-SIM support",
      "5G connectivity",
      "Bluetooth 5.1 and Wi-Fi 802.11ac",
      "USB-C charging port",
      "3.5mm headphone jack"
    ]
  });
}
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 96%;
  margin: 20px auto;
}

.flex-item {
  flex: 1 1 calc(48% - 8px);
  max-width: calc(48% - 8px);
}

@media (max-width: 768px) {
  .flex-container {
    flex-direction: column;
  }

  .flex-item {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>
