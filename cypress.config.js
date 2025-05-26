const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://serverest.dev", // ou http://localhost:3000, conforme seu ambiente
  },
});