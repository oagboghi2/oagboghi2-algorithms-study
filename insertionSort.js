const arr = [ 9, 3, 1, 2, 1000, 15, 83, 75, 84, 200000, 42 ];

var insertionSort = (arr)=>{
  for(var i = 0; i < arr.length; i++){
    //run a loop through aray
    var temp = arr[i];
    //create a temp variable that stores an element of the unsorted array
    var j = i - 1;
    //have a variable keep count behind i
    while(j >= 0 && arr[j] > temp){
      arr[j + 1] = arr[j];
      j--;
    }
    //a loop runs as long as requirments are met, and
    arr[j + 1] = temp;
  }
  return arr;
};

insertionSort(arr)
