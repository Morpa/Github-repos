function getRandomWord() {
  const words = ['react', 'react-native', 'javascript', 'vue', 'node', 'nextjs']
  return words[Math.floor(Math.random() * words.length)]
}

export { getRandomWord }
