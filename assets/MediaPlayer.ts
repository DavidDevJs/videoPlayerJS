class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;

  constructor(config: { el: any; plugins: any; }) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this.initPlugins();
  }
  //Plugins
  private initPlugins() {
  
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }
  //Player functions
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  togglePlay() {
    this.media.paused ? this.play() : this.pause();
  }
  mute() {
    this.media.muted = true;
  }
  unmute() {
    this.media.muted = false;
  }
  toggleMute() {
    this.media.muted ? (this.media.muted = false) : (this.media.muted = true);
  }
}







export default MediaPlayer;
