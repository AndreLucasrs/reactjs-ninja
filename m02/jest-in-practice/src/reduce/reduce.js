'use strict'

const reduce = (arr, func, initialValue) => {
  let acc = initialValue
  for (let i = 0; i < arr.length; i++) {
    acc = func(acc, arr[i])
  }
  return acc
}

export default reduce
