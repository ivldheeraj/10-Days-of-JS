1.Inhertiance

Rectangle.prototype.area = function() {
        return(this.w*this.h);
    };
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
   
    class Square extends Rectangle {
        constructor(s) {
            super(s);
            this.h = s;
            this.w = s;
        }
    };

-----------------------------------------------------------------------------------
2.Arrow function
function modifyArray(nums) {
    const func = nums.map(function(num) 
    {
    if(num%2==0)
    {
        return 2*num;
    }
    else
    {
        return 3*num;
    }
    });
    return func;
}
