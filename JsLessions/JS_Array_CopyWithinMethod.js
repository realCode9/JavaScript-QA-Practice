const arr = [23, 24, 25, 26, 89, 90, 67, 99, 78]        //23, 24, 25, 26, 23, 24 ,25, 99, 78
console.log(arr)

const updatedArr = arr.copyWithin(4, 0, 3)      //First parameter: paste will start from this index including itself
                                                //Second parameter: index from which values will be picked to copy and paste including value at specified index
                                                //Third parameter: index until which values will be picked to copy and paste excluding value at specified index  
console.log(updatedArr)