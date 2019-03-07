function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    
    var wadah = []
    for (var i=0; i<arr.length-1; i++){
        
        var proses = 0
        // console.log(i)
        proses += (arr[i+1])-(arr[i])
        wadah.push(proses)
    }
    var output = 0
    for (var j=0; j<wadah.length-1; j++){
        var hasilPengurangan = 0
        
        hasilPengurangan += wadah[j+1]-wadah[j]
        output += hasilPengurangan   
        
    }
    if (output===0) {
        hasil = true
    } else {
        hasil = false
    }
    
    
    return hasil
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false