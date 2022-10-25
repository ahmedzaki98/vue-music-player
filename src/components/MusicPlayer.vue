<template>
  <div class="grid-container">
    <base-card>
      <cover-wrapper>
        <img :src="current.cover" />
      </cover-wrapper>
      <section class="player">
        <h2 class="song-title">
          {{ current.title }}
        </h2>
        <section class="song-artist">
          <span>{{ current.artist }}</span>
        </section>
        <div class="controls">
          <music-button @click="prev" mode="prev"></music-button>
          <music-button v-if="!isPlaying" @click="play"> </music-button>
          <music-button v-else @click="pause" mode="pause"></music-button>
          <music-button @click="next" mode="next"></music-button>
        </div>
        <song-timer></song-timer>
      </section>
    </base-card>
    <div>
      <play-list></play-list>
    </div>
  </div>
</template>

<script>
import coverWrapper from "./cover-wrapper.vue";
import songs from "../songs";
import PlayList from "./PlayList.vue";
import SongTimer from "./SongTimer.vue";
export default {
  components: {
    coverWrapper,
    PlayList,
    SongTimer,
  },
  provide() {
    return {
      playSongs: this.songs,
      play: this.play,
      player: this.player,
      isPlaying: this.isPlaying,
    };
  },
  data() {
    return {
      current: {},
      index: 0,
      isPlaying: false,
      songs: songs,
      player: new Audio(),
    };
  },
  // barStyle() {
  //   let renderTime = 0;
  //   this.player.addEventListener("timeupdate", (event) => {
  //     const { currentTime, duration } = event.srcElement;
  //     this.progressTime = 0.1;
  //     let minDuration = 0;
  //     let secDuration = "00";
  //     if (!isNaN(duration)) {
  //       minDuration = Math.floor(duration / 60);
  //       secDuration = Math.floor(duration % 60);
  //       this.progressTime = Math.floor((currentTime / duration) * 100);
  //     }
  //     this.timeDuration = `${minDuration}:${secDuration}`;
  //     let minCurrentTime = Math.floor(currentTime / 60);
  //     let secCurrentTime = Math.floor(currentTime % 60);
  //     if (secCurrentTime < 10) {
  //       secCurrentTime = `0${secCurrentTime}`;
  //     }
  //     this.currentTime = `${minCurrentTime}:${secCurrentTime}`;
  //   });
  //   if (renderTime != this.progressTime) {
  //     renderTime = this.progressTime;
  //     console.log(renderTime);
  //     // return { width: `100%` };
  //   }
  //   return (renderTime != this.progressTime) ? { width: renderTime + "%" } : {};
  // },
  methods: {
    play(song) {
      if (typeof song.src != "undefined") {
        this.current = song;
        this.player.src = this.current.src;
      }
      this.player.play();
      this.isPlaying = true;
      this.player.addEventListener("ended", () => {
        this.player.pause();
        this.isPlaying = false;
        this.index++;
        this.current = this.songs[this.index];
        this.player.src = this.current.src;
        this.player.play(this.current);
      });
    },
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    next() {
      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
    prev() {
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
  },
  created() {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
}
header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: #212121;
  color: #fff;
}
main {
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 25px;
}
img {
  border-radius: 20px;
  max-width: 100%;
  max-height: 100%;
  object-fit: "contain";
}
.song-title {
  font-size: 30px;
  font-weight: 700;
  text-transform: capitalize;
  text-align: center;
  text-shadow: 0px 0px 5px 7px #00000073;
  background: -webkit-linear-gradient(#1474ec, rgb(75, 74, 74));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.song-artist {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #53565a;
  font-size: 18px;
  font-weight: 600;
  font-family: sans-serif;
  text-align: center;
}

.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 15px;
}
.next,
.prev {
  font-size: 16px;
  font-weight: 700;
  padding: 10px 20px;
  margin: 0px 15px;
  border-radius: 6px;
  color: #fff;
  background-color: #ff5858;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}
</style>
