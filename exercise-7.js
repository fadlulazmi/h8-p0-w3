
// Cara 1

function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    
    var arr=[]
    
    for (var i=0; i<kalimat.length; i++){
        var kataStr='' 
        var output= ''   
        
        // console.log(kalimat[i])
        if (kalimat[i] !== ' '){
            
            kataStr += kalimat[i]
            console.log(kataStr)
        }
        
        
        output += kataStr   
    }
    
    arr.push (kataStr)
    
    
    console.log(arr)
    // console.log(arr.length)
    
  }

// Cara 2
  
// function hitungJumlahKata(kalimat) {
//     var hitungspasi = 0
//     for (var i=0; i<kalimat.length; i++){
//         if (kalimat[i]===" "){
//             hitungspasi += 1
//         }
//     }
//     return hitungspasi+1
// }

  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5