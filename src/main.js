import { createApp } from 'vue'
import App from './App.vue'
import BaseCard from "./components/UI/BaseCard.vue";
import MusicButton from './components/UI/MusicButton.vue';

const app = createApp(App);
app.component("base-card", BaseCard);
app.component("music-button", MusicButton);
app.mount("#app");


