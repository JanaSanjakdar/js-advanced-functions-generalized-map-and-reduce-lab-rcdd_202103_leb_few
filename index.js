// Add your functions here
function map (srcArray, fctn){
  let arr =[];
  for (let i=0; i<srcArray.length; i++){
    let stg = srcArray[i]
    arr.push(fctn(stg))
  }
  return arr;
}

function reduce (srcArray,fctn, starting){
  let ray = (!!start) ? start : srcArray[0]
  let i = (!!start) ? 0: 1

  for (; i < array.length; i++) {
ray = fctn(srcArray[i], ray)
  }

  }

