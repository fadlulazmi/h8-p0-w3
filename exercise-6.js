function angkaPalindrome(num) {
    // you can only write your code here!
    var palindrome = false
    num += 1
    // while (!palindrome){
    while (palindrome === false){
        //num++
        var konversiNumStr = ''
        var hasilbalik = ''
        konversiNumStr += num
        // console.log(konversiNumStr)
        for (var i=konversiNumStr.length-1; i>=0; i--){
            hasilbalik += konversiNumStr[i]
            
        }
        // console.log(hasilbalik)
        // break
        // console.log(num)
        
        if (hasilbalik === konversiNumStr){
            return Number(hasilbalik)
        }
        num += 1
    }
    
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001