<template>
  <body>
    <main>
      <music-player></music-player>
    </main>
  </body>
</template>

<script>
import MusicPlayer from "./components/MusicPlayer.vue";

export default {
  components: {
    MusicPlayer,
  },
};
</script>

<style scoped>
body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: Lato, sans-serif;
  background: linear-gradient(235deg, #ffffff 0%, #000f25 100%),
    linear-gradient(180deg, #6100ff 0%, #000000 100%),
    linear-gradient(
      235deg,
      #ffa3ac 0%,
      #ffa3ac 40%,
      #00043c calc(40% + 1px),
      #00043c 60%,
      #005d6c calc(60% + 1px),
      #005d6c 70%,
      #00c9b1 calc(70% + 1px),
      #00c9b1 100%
    ),
    linear-gradient(
      125deg,
      #ffa3ac 0%,
      #ffa3ac 40%,
      #00043c calc(40% + 1px),
      #00043c 60%,
      #005d6c calc(60% + 1px),
      #005d6c 70%,
      #00c9b1 calc(70% + 1px),
      #00c9b1 100%
    );
  background-blend-mode: soft-light, screen, darken, normal;

  animation: gradient 15s ease infinite;
  -webkit-font-smoothing: antialiased;
}
</style>
