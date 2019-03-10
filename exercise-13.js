function targetTerdekat(arr) {
  // you can only write your code here!
    // var hasilSortO = []
    // for (var i=0; i<arr.length; i++){
    //     if (arr[i] === 'o'){
    //         console.log (i)
    //         for (var j = i; j<arr.length-i; j++){
            
    //             // console.log (j, arr[j])
    //             hasilSortO.push(arr[j])
                
    //         }
            
    //     }else
    // }
    
    // console.log (hasilSortO[k])
    // var out = 0
    // for (var k = 0; k<hasilSortO.length; k++){
    //     // console.log(k)
    //     if (hasilSortO[k]==='x' && hasilSortO[k-1]!=='x' ){            
    //         out += k   
    //     }
    //     else if (hasilSortO[k]!=='x'){
    //         out += 0
    //         // console.log(k)
    //     } 

        
        
        
        
    // }
    // // console.log(hasilSortO[k])
    // console.log(out)
    // // console.log(hasilSortO)
    // // for (var k = 0; k<hasilSortO.length; k++){
    // //     // console.log(k)
    // //     if (hasilSortO[k]==='x' && hasilSortO[k-1]!=='x' ){            
    // //         console.log(k)
    // //     }         
    // // }
    // // console.log(gaadaX)
    
    //Cara lainnya
    var a = []
    var b = []
   var posO = -1;
   var posXRight = -1
   var posXLeft = -1
   var result = 0;

    for (var i=0; i<arr.length; i++){

        if (arr[i]==='o'){
            posO  = i;
            
        }
        
    }
    for (var i = posO; i<arr.length; i++){
        if (arr[i]==='x'){
            posXRight = i 
            break;
        }

    }
    // console.log(posXRight)
    for (var i = posO; i>=0; i--){
        if (arr[i]==='x'){
            posXLeft = i
            break;
        }
    }
    // console.log(posXLeft)

    if (posXLeft === -1 && posXRight === -1) {
        result
    }
    else if (posXLeft === -1){
        result = posXRight-posO
    } 
    else if (posXRight === -1){
        result = posO - posXLeft
    }
    
    
        
return result
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2