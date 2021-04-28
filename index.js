// Add your functions here
function map (srcArray, fctn){
  let arr =[];
  for (let i=0; i<srcArray.length; i++){
    let stg = srcArray[i]
    arr.push(fctn(stg))
  }
  return arr;
}

function reduce(srcArray, fctn, start){
    let arr = (!!start) ? start : src[0];
    let i = (!!start) ? 0 : 1

    for (; i < srcArray.length; i++){
        arr = fctn(src[i], arr)
    }
    return arr;
}
