class AutoPause {
  
  constructor(){
    this.threshold = 0.25;
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  run(player) {
    this.player = player;

    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    })
    observer.observe(this.player.media);
    
    document.addEventListener("visibilityChange", this.handleVisibilityChange);
  }

  
  handleIntersection(entries){
    const entry = entries[0];
    
    const isVisible = entry.intersectionRatio >= this.threshold;
    
    (isVisible) ? this.player.play() : this.player.pause();
    
  }

  handleVisibilityChange(){
    const isVisible = document.visibilityState === "visible";
    
    (isVisible) ? this.player.play() : this.player.pause();
  }
}

export default AutoPause;