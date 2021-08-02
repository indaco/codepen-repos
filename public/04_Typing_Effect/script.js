function autoTextEffect() {
  return {
    idx: 1,
    speed: 0,
    init: function () {
      this.textEl = this.$refs.textEl;
      this.speedEl = this.$refs.speedEl;
      this.speed = 300 / this.speedEl.value;
      this.text = 'Hi there, if you like it, enjoy!';

      this.writeText();
    },
    writeText: function () {
      this.textEl.innerText = this.text.slice(0, this.idx);
      this.idx += 1;
      if (this.idx > this.text.length) {
        this.idx = 1;
      }

      setTimeout(() => this.writeText(), this.speed);
    },
  };
}
