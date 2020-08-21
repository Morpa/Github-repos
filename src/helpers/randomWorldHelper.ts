function getRandomWord() {
  const words = [
    'react',
    'react-native',
    'javascript',
    'vue',
    'angular',
    'redux',
  ];
  return words[Math.floor(Math.random() * words.length)];
}

export { getRandomWord };
