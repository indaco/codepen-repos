function stepper() {
	return {
		items: 4,
		currentActive: 1,
		progressPercentage: 0,
		update: function () {
			this.progressPercentage =
				((this.currentActive - 1) / (this.items - 1)) * 100 + '%';
		},
		prev: {
			['@click']() {
				this.currentActive--;

				if (this.currentActive < 1) {
					this.currentActive = 1;
				}
				this.update();
			},
		},
		next: {
			['@click']() {
				this.currentActive++;

				if (this.currentActive > this.items) {
					this.currentActive = this.items;
				}
				this.update();
			},
		},
	};
}

document.addEventListener('alpine:init', () => {
	Alpine.data('stepper', stepper);
});
