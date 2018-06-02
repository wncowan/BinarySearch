function rBinSearch(arr, num, i=0){
    var result = -1;
    if(i === arr.length){
        return result;
    }
    if(arr[i] == num){
        return i;
    }
    else{
        return rBinSearch(arr, num, i+1);
    }
}

console.log(rBinSearch([1,7,9,10,12,-11],90))