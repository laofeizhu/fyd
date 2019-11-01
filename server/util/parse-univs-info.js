const getRentUnitPrice = (data) => {
  let ba = data.ba
  // count studio as 0.8 room.
  let br = Math.max(0.8, data.br)
  // count ba as half unit, br and one unit.
  return data.price / (0.5 * ba + br)
}

const parseRentData = (rentDataArray) => {
  return rentDataArray.map(getRentUnitPrice).reduce((acc, cur) => acc + cur) / rentDataArray.length
}

exports.parseUnivInfo = (univ) => {
  let parsedUniv = {}
  if (univ.rent !== undefined && univ.rent.length != 0) {
    parsedUniv.unitPrice = parseRentData(univ.rent)
  }
  parsedUniv.rank = univ.rank
  parsedUniv.name = univ.name
  parsedUniv.restaurants = univ.restaurants
  parsedUniv.location = univ.location
  return parsedUniv
}