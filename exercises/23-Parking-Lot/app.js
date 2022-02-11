let parking_state = [
  [1, 1, 1],
  [0, 0, 0],
  [1, 1, 2]
]

const getParkingLotState = (array) => {
  let newObject = {};
  newObject.totalSlots = 0;
  newObject.availableSlots = 0;
  newObject.occupiedSlots = 0;
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array[i].length; j++){
      if (array[i][j]!==0){newObject.totalSlots++}
      if (array[i][j]===1){newObject.occupiedSlots++}
      if (array[i][j]===2){newObject.availableSlots++}
    }
  }
  return newObject;
}

console.log(getParkingLotState(parking_state))