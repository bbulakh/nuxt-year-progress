// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  // electron: {
  //   build: [
  //     {
  //       // Main-Process entry file of the Electron App.
  //       entry: 'electron/main.ts',
  //     },
  //   ],
  // },
});