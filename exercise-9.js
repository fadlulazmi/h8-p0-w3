function cariMean(arr) {
    // you can only write your code here!
    var totalArr = 0
    for (var i=0; i<arr.length; i++){
        totalArr += arr[i]
    }
    var pembagian = totalArr/arr.length
    var pengurang = (totalArr%arr.length)/arr.length
    var hasil = pembagian - pengurang
    
    if (pengurang>=0.5){
        return hasil+1
    } 
    else if(pengurang<0.5){
        return hasil
    }
    // return pembagian  
  }
  
  // TEST CASES
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7])); // 7