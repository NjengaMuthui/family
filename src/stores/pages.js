import { defineStore } from "pinia";
function createLinks(productName) {
  let arr = [
    {
      one: {
        title: `Explore ${productName}`,
        links: [{ title: "Explore All " + productName }]
      }
    },
    { two: {} },
    { three: {} }
  ];
}

export const useLinkStore = defineStore("ProductLinks", () => {
  const apple = [];
});
