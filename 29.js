function countVowelPermutation (n) {
  const mod = 10 ** 9 + 7,
        current = [1, 1, 1, 1, 1]
  for (let i = 2; i <= n; i++) {
    const prev = [...current]
    current[0] = (prev[1] + prev[2] + prev[4]) % mod
    current[1] = (prev[0] + prev[2]) % mod
    current[2] = (prev[1] + prev[3]) % mod
    current[3] = prev[2] % mod
    current[4] = (prev[2] + prev[3]) % mod
  }
  return current.reduce((sum, value) => sum + value, 0) % mod
}
