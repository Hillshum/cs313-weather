module.exports = (kelvin) => {
  return (9/5 * (kelvin - 273) + 32).toFixed(0)
}