function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    var wadah = []
    for (var i=0; i<arr.length-1; i++){
      var calculate = arr[i+1]/arr[i]
      wadah.push (calculate)   
    }
    // console.log(wadah)
    var pengurangan = 0
    for (var j=0; j<wadah.length-1; j++){
      // console.log(wadah[j])
      
      pengurangan += wadah[j+1]-wadah[j]
      
      // console.log(pengurangan)
    }
    if (pengurangan===0){
      hasil = true
    } else {
      hasil = false
    }
    return hasil
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false