function mergeSort(arr, start, end){
    if(start>= end) return;
    let mid = Math.floor((start  +end)/2)
    mergeSort(arr, start, mid)
    mergeSort(arr,mid+1,end)
    merge(arr, start, mid, end)
}

function merge(arr, start, mid, end){
    let i = start
    let j= mid+1
    let mergedArr = []
    while(i <= mid && j<= end){
        if(arr[i]< arr[j]){
         mergedArr.push(arr[i])
         i++
        }
        else{
          mergedArr.push(arr[j])
          j++
        }
    }
     while(i<=mid){
            mergedArr.push(arr[i])
         i++

        }
        while(j<=end){
            mergedArr.push(arr[j])
          j++
        }
    for(let k = start; k<=end ; k++){
        arr[k] = mergedArr[k-start]

    }

}

var sortArray = function(nums) {
    let arr = nums
    mergeSort(arr, 0, nums.length-1)
    return arr
};
