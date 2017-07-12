const arr = [ 9, 3, 1, 2, 1000, 15, 83, 75, 84, 200000, 42 ];

const bubbleSort = (arr) => {
  for(var i = 0; i < arr.length; i++){
    //first loop keeps track of first element to compare
    for(var j = 1; j < arr.length; j++){
      //second loop keeps track of the 2nd element to compare
      if(arr[j - 1] > arr[j]){
        //compare a i to j. If [j-1] is greater than j than call the swap function
        swap(arr, j - 1, j);
      }
    }
  }
  //return the array
  return arr;
};


const swap = (arr, i , j) =>{
  var temp = arr[i];
  arr[i]= arr[j];
  arr[j] = temp;
};

bubbleSort(arr);
