1.ARRAYS
function getSecondLargest(nums) {
    // Complete the function
    var sorted_array = nums.sort(function (a,b) {return a - b;});
    var unique_sorted_array = sorted_array.filter(function(elem, index, self) 
    {
        return index === self.indexOf(elem);
    })

    return unique_sorted_array[unique_sorted_array.length - 2];
}
------------------------------------------------------------------------------
2.Try,Catch and Finally 

function reverseString(s) {
    
    try {
         s = s.split('').reverse().join('');
    } catch (e) {
         console.log('s.split is not a function');
    }

    console.log(s); 
}
----------------------------------------------------------------------------------
3.Throw 
function isPositive(a) {
   
    if(a==0)
    throw Error("Zero Error");
    if(a<0)
    throw Error("Negative Error");
     
     return 'YES';  
}
------------------------------------------------------------------------------------
