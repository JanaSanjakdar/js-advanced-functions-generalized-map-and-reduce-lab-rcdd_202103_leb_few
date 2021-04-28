// Add your functions here
function map (srcArray, fctn){
  let arr =[];
  for (let i=0; i<srcArray.length; i++){
    let stg = srcArray[i]
    arr.push(fctn(stg))
  } 
  return arr;
}
