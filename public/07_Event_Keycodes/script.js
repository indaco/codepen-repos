function keydownCode() {
  return {
    atStart: true,
    eventKey: '',
    eventKeyCode: '',
    eventCode: '',
    getInfo: function (event) {
      this.atStart = false;

      this.eventKey = `
                ${event.key === ' ' ? 'Space' : event.key}
                <small class="absolute left-0 w-full text-sm text-center text-gray-700 -top-6">event.key</small>
            `;

      this.eventKeyCode = `
                ${event.keyCode}
                <small class="absolute left-0 w-full text-sm text-center text-gray-700 -top-6">event.keyCode</small>
            `;

      this.eventCode = `
                ${event.keyCode}
                <small class="absolute left-0 w-full text-sm text-center text-gray-700 -top-6">event.keyCode</small>
            `;
    },
  };
}
