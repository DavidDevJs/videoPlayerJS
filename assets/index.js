import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "../assets/plugins/AutoPlay.js";

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay()],
});
const buttonPlay = document.querySelector("#buttonPlay");
const buttonMute = document.querySelector("#buttonMute");
buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();
