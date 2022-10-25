<template>
  <div class="progressbar_container" id="progress_container">
    <div class="progressbar_duration_meter">
      <div id="current_time">{{ currentTime }}</div>
      <div id="duration">{{ timeDuration }}</div>
    </div>
    <div class="progress_div" id="progress_div">
      <div class="progress" id="progress" :style="timeIsChanged"></div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["playSongs", "player", "isPlaying"],
  data() {
    return {
      timeDuration: "0:00",
      currentTime: "0:00",
    };
  },
  computed: {
    timeIsChanged() {
      this.player.addEventListener("timeupdate", (event) => {
        const { currentTime, duration } = event.srcElement;
        let minDuration = 0;
        let secDuration = "00";
        if (!isNaN(duration)) {
          minDuration = Math.floor(duration / 60);
          secDuration = Math.floor(duration % 60);
        }
        this.timeDuration = `${minDuration}:${secDuration}`;
        let minCurrentTime = Math.floor(currentTime / 60);
        let secCurrentTime = Math.floor(currentTime % 60);
        if (secCurrentTime < 10) {
          secCurrentTime = `0${secCurrentTime}`;
        }
        this.currentTime = `${minCurrentTime}:${secCurrentTime}`;
      });
      return "";
    },
  },
  methods: {
    timeUpdate() {
      this.player.addEventListener("timeupdate", (event) => {
        const { currentTime, duration } = event.srcElement;
        console.log(currentTime);
        console.log(duration);
        // let progressTime = (currentTime / duration) * 100;
        // process.style.width =`${progressTime}`;
      });
    },
  },
};
</script>

<style scoped>
.progressbar_container {
  width: 80%;
  height: auto;
  padding: 1rem 0;
  margin-left: 3rem;
}

.progress_div {
  width: 100%;
  height: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 4rem;
  position: relative;
  margin-top: 0.5rem;
  transition: width 1s linear;
  -moz-transition: width 1s linear;
  -o-transition: width 1s linear;
  -webkit-transition: width 1s linear;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  background-color: #ccc;
}
.progress {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: #1474ec;
  border-radius: 4rem;
  transition: width 1s linear;
  -moz-transition: width 1s linear;
  -o-transition: width 1s linear;
  -webkit-transition: width 1s linear;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
}

.progressbar_duration_meter {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 500;
}
</style>
