 /* SELECTION SORT */

var sortArray = function(nums) {

    for(let i=0; i<nums.length; i++){
        let num = nums[i]
        let pos = i
        let min = num
        for(let j = i; j<nums.length; j++){
            if(nums[j]< min){
                pos = j
                min = nums[j]
            }
        }
        if(pos != i){
            nums[pos] = num
            nums[i] = min
        }
    }
    return nums
};

/* BUBBLE SORT */

var sortArray = function(nums) {
    let swap =0
    for(let i=nums.length; i>0 ; i--){
        for(let j=0; j<i; j++){
          if(nums[j]> nums[j+1]){
              let temp = nums[j]
              nums[j] = nums[j+1]
              nums[j+1] = temp
              swap =1
          }  
        }
        if(swap==0){break}
    }
    return nums
};


/* INSERTION SORT */

var sortArray = function(nums) {
    for(let i=1; i< nums.length; i++){
        let num = nums[i]
        console.log('i',i)
        for(let j=i-1; i>=0; j--){
            console.log('j',j)
            if(nums[j] > num){
                nums[j+1] = nums[j]
                nums[j] = num
            }
            else{
                break
            }
        }
    }
    return nums
};
