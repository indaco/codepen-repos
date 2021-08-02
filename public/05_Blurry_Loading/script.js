function blurry() {
  return {
    percentage: 0,
    interval: undefined,
    init: function () {
      this.interval = setInterval(() => {
        this.blurring();
      }, 30);
    },
    blurring: function () {
      this.percentage++;
      if (this.percentage > 99) {
        clearInterval(this.interval);
      }

      this.$refs.bg.style.filter = `blur(${this.scaleFunc(
        this.percentage,
        0,
        100,
        30,
        0
      )}px)`;
    },
    // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
    scaleFunc: function (num, in_min, in_max, out_min, out_max) {
      return (
        ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
      );
    },
  };
}
