function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var chicagoSports = ["Blackhawks", "Bulls", "Bears", "Cubs", "Whitesox"]
  chicagoSports.forEach(callback)
  return chicagoSports
}

function doToArray(array, callback) {
  array.forEach(callback)
}
