function jokes() {
  return {
    jokeText: '// Joke goes here',
    generateJoke: async function (event) {
      const config = {
        headers: {
          Accept: 'application/json',
        },
      };

      const res = await fetch('https://icanhazdadjoke.com', config);
      const data = await res.json();
      this.jokeText = data.joke;
    },
  };
}
