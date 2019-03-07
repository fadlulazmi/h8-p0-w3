function pasanganTerbesar(num) {
    // you can only write your code here!
    var konversiNumStr = ''+num
    var arr = []
    
    
    // console.log(konversiNumStr[1])
    for (var i=0; i<konversiNumStr.length-1; i++){
        
        var strFree= ''
        
        strFree += konversiNumStr[i]+konversiNumStr[i+1]
        arr.push (strFree)   
    }
    
    var nilaiMax = arr[0]
    for (i=1; i<arr.length; i++){
        if (nilaiMax < arr[i]){
            nilaiMax = arr [i]
        }
    }
    return nilaiMax
    
    
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99