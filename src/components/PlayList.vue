<template>
  <div>
    <section class="playlist">
      <h2>Playlist <span> 🎵 </span></h2>
      <ul>
        <li
          v-for="song in playSongs"
          :key="song.src"
          class="song"
          @click="play(song)"
        >
          <div class="cover-playlist">
            <img class="cover" :src="song.cover" />
          </div>
          <div class="details">
            <h3 class="song-title">
              {{ song.title }}
            </h3>
            <p class="artist">{{ song.artist }}</p>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  props: ["title", "artist", 'mode'],
  inject: ["playSongs", "play"],
};
</script>

<style scoped>
ul {
  list-style: none;
}
.cover-playlist {
  height: 50px;
  width: 50px;
}
.cover {
  height: auto;
  width: auto;
  box-shadow: 0 24px 35px -16px rgba(107, 179, 237, 0.5);
  border-radius: 5px;
}
.cover-playlist > .cover {
  margin-right: 15px;
  width: auto;
}
.song-title {
  width: 100%;
  color: #53565a;
  font-size: 1.13em;
  text-align: center;
  margin-bottom: 5px;
}

.artist {
  font-family: Muli;
  width: 100%;
  font-weight: 400;
  text-align: center;
}

.details {
  margin-left: 10px;
  width: 100%;
}

.details > .song-title {
  color: #585858;
  font-size: inherit;
  text-align: left;
}

.details > .artist {
  color: #5d5555;
  text-align: left;
}
.playlist {
  width: 400px;
  max-height: 36rem;
  padding: 1rem;
  margin: 1.5rem auto;
  max-width: 200rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  transition: border-radius cubic-bezier(0.075, 0.82, 0.165, 1) 1s,
    transform cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
  background-color: #fff;
  background: linear-gradient(197.96deg, #fdcaca 0%, #f9e8e8 93.58108108108108%);
  border-radius: 10px;
  overflow: auto;
}

.playlist h2 {
  color: #212121;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
}

.playlist .song {
  display: flex;
  padding: 10px;
}

.playlist .song:hover {
  background-color: #fff;
  border-color: #ff8c8c;
  border-radius: 10px;
  border-style: solid;
  transform: scale(1.05);
}
#active {
  background: linear-gradient(
    125deg,
    #ecfcff 0%,
    #ecfcff 40%,
    #b2fcff calc(40% + 1px),
    #b2fcff 60%,
    #5edfff calc(60% + 1px),
    #5edfff 72%,
    #3e64ff calc(72% + 1px),
    #3e64ff 100%
  );
  transition: box-shadow 0.2s, background-color 0.3s;
}
@media (max-width: 768px) {
  .playlist {
    max-height: 200px;
  }
}
</style>
