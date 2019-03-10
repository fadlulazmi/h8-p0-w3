function perkalianUnik(arr) {
    // you can only write your code here!
   out = []
    var kali = 0
    for (var i=0; i<arr.length; i++){
      // console.log( 'ini i = ' , i)
      out2 = []
      for (var j=0; j<arr.length; j++){
        if (j !== i){
          out2.push(arr[j])
        }
              
      }
      out.push(out2)
            
    }
    // console.log(out)
    var out3 = []
    for (i=0;i<out.length;i++){
      var num = 1
      for (j=0;j<out[i].length;j++){
        num = num*out[i][j]
      }
      out3.push(num)
      // console.log(num)
    }
    return out3
  }
  
  // TEST CASES
  console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
  console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
  console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
  console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
  console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]