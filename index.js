var array = [
      [1,   2,  3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10,  9,  8, 7]
    ];
    
    function spiralMatrex(array) {
        var widthPoint = 0;
        var hightPoin = 0;
        var w = array[0].length - 1;
        var h = array.length - 1;
        var direction = 1;
        var result = [];
        var mapPoint = new Map();
        var quantity = 0;
    
        while (quantity <= (w + 1) * (h + 1)) { 
            mapPoint.set(`${widthPoint},${hightPoin}`); 
            result.push(array[hightPoin][widthPoint]);
    
            if (direction === 1 && widthPoint < w && !mapPoint.has(`${widthPoint + 1},${hightPoin}`)) {
                widthPoint++;
            } else if (direction === 1) {
                direction = 2;
            }
            if (direction === 2 && hightPoin < h && !mapPoint.has(`${widthPoint},${hightPoin + 1}`)) {
                hightPoin++;
            } else if (direction === 2) {
                direction = 3;
            }
            if (direction === 3 && widthPoint > 0 && !mapPoint.has(`${widthPoint - 1},${hightPoin}`)) {
                widthPoint--;
            } else if (direction === 3) {
                direction = 4;
            }
            if (direction === 4 && hightPoin > 0 && !mapPoint.has(`${widthPoint},${hightPoin - 1}`)) {
                hightPoin--;
            } else if (direction === 4) {
                direction = 1;
            }
    
            quantity++;
        }
    
        console.log(result);
    }
    
    spiralMatrex(array);
