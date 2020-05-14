1. Create a Rectangle Object

function Rectangle(a, b) {
    this.length=a;
    this.width=b;
    this.perimeter=2*(a+b);
    this.area=a*b;
}
-------------------------------------------------------
2.Count Objects
function getCount(objects) {
     var count = 0;
    for (var index in objects)
        {
            if (objects[index].x == objects[index].y)
                {
                    count++;
                }
        }
    return count;
}
----------------------------------------------------------

